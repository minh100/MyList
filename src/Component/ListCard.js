import React, { useState, useContext } from 'react';
import '../Css/ListCard.css';
import '../Css/Popup.css';
import '../Css/Controls.css';
import { GlobalContext } from '../Global/GlobalState.js';

export const ListCard = ({ anime }) => {

    const { moveAnimeToActive, moveAnimeToFinish, moveAnimeToPlanning, removeAnimeBothList, activeAnimeList, finishedAnimeList, planningAnimeList } = useContext(GlobalContext);
    const [popup, togglePopup] = useState(false);

    let storedActiveAnime = activeAnimeList.find(o => o.id === anime.id);
    let storedFinishedAnime = finishedAnimeList.find(o => o.id === anime.id);
    let storedPlanningAnime = planningAnimeList.find(o => o.id === anime.id);

    // prevents you from adding already added anime
    const activeListDisabled = storedActiveAnime ? true : false;
    const finishedListDisabled = storedFinishedAnime ? true : false;
    const planningListDisabled = storedPlanningAnime ? true : false;

    return (
        <>
            {
                (popup === false) ? (

                    <div className="list-card">
                        <div className="card-cover">
                            <div className="control-container">
                                <div className="control-button">
                                    {
                                        activeListDisabled ? <i className="fas fa-glasses"></i> :
                                            finishedListDisabled ? <i className="fas fa-check"></i> :
                                                planningListDisabled ? <i className="fas fa-bookmark"></i> :
                                                    <i className="fas fa-plus"></i>
                                    }
                                </div>
                                <div className="control-dropdown-content">
                                    {
                                        <>
                                            <div onClick={() => moveAnimeToActive(anime)} className={activeListDisabled ? "item-active" : "item"}>
                                                <i className="fas fa-glasses"></i> Watching
                                            </div>
                                            <div onClick={() => moveAnimeToFinish(anime)} className={finishedListDisabled ? "item-active" : "item"}>
                                                <i className="fas fa-check"></i> Watched
                                            </div>
                                            <div onClick={() => moveAnimeToPlanning(anime)} className={planningListDisabled ? "item-active" : "item"}>
                                                <i className="fas fa-bookmark"></i> Planning
                                            </div>
                                            <div onClick={() => removeAnimeBothList(anime.id)} className="item">
                                                <i className="fas fa-times"></i> Reset
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            <img className="card-cover-image" onClick={() => togglePopup(true)} alt={anime.attributes.canonicalTitle} src={anime.attributes.posterImage.large}></img>

                        </div>
                        <div className="card-bottom">
                            <div className="card-title">{anime.attributes.canonicalTitle}</div>
                        </div>
                    </div>
                ) : (
                        // clickable cards
                        <div className="popup-container" >
                            <div className="blocker" onClick={() => togglePopup(false)}></div>
                            <div className="popup-content">

                                <div className="banner" style={{ backgroundImage: `url(${anime.attributes.coverImage !== null ? anime.attributes.coverImage.original : anime.attributes.posterImage.original})` }}>
                                    <div className="popup-close-button-container">
                                        <div onClick={() => togglePopup(false)} className="popup-close-button">Close</div>
                                    </div>
                                    <div className="shadow"></div>
                                </div>
                                <div className="popup-header">
                                    <div className="popup-header-section">
                                        <div className="popup-poster-wrap">
                                            <div className="popup-poster-wrap-inner">
                                                <img className="popup-poster" src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle}></img>
                                                {/* Controls here drop downs*/}
                                                <div className="popup-control-container">
                                                    <div className="popup-control-button">
                                                        {
                                                            activeListDisabled ? (
                                                                <div>
                                                                    Watching | <i className="fas fa-glasses"></i>
                                                                </div>
                                                            ) :
                                                                finishedListDisabled ? (
                                                                    <div>
                                                                        Watched | <i className="fas fa-check"></i>
                                                                    </div>
                                                                ) :
                                                                    planningListDisabled ? (
                                                                        <div>
                                                                            Planning | <i className="fas fa-bookmark"></i>
                                                                        </div>
                                                                    ) :
                                                                        <div>
                                                                            Add | <i className="fas fa-plus-circle"></i>
                                                                        </div>
                                                        }
                                                    </div>
                                                    {
                                                        <div className="popup-control-dropdown-content">
                                                            <div onClick={() => moveAnimeToActive(anime)} className={activeListDisabled ? "popup-item-active" : "popup-item"}>
                                                                <i className="fas fa-glasses"></i> Watching
                                                                    </div>
                                                            <div onClick={() => moveAnimeToFinish(anime)} className={finishedListDisabled ? "popup-item-active" : "popup-item"}>
                                                                <i className="fas fa-check"></i> Watched
                                                                    </div>
                                                            <div onClick={() => moveAnimeToPlanning(anime)} className={planningListDisabled ? "popup-item-active" : "popup-item"}>
                                                                <i className="fas fa-bookmark"></i> Planning
                                                                    </div>
                                                            <div onClick={() => removeAnimeBothList(anime.id)} className="popup-item">
                                                                <i className="fas fa-times"></i> Reset
                                                                    </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="popup-stats-container">
                                                    <div className="popup-stats">
                                                        <h5 id="popup-rating">Type: {anime.attributes.subtype}</h5>
                                                        <h5 id="popup-rating">Rating: {anime.attributes.averageRating}</h5>
                                                        <h5 id="popup-episodes">Episodes: {anime.attributes.episodeCount}</h5>
                                                        <a id="link-to-MAL" href={`https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`} target="_blank" rel="noopener noreferrer">Trailer</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popup-description-section">
                                            <h1 className="title">{anime.attributes.canonicalTitle}</h1>
                                            <p className="description">{anime.attributes.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>


    )
}