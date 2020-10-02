import React, { useContext, useState } from 'react';
import '../Css/ResultCard.css';
import '../Css/Popup.css';
import { GlobalContext } from '../Global/GlobalState.js';

export const ResultCard = ({ anime }) => {

    const { addAnimeToActive, removeAnimeBothList, activeAnimeList, finishedAnimeList } = useContext(GlobalContext);
    const [popup, togglePopup] = useState(false);

    let storedActiveAnime = activeAnimeList.find(o => o.id === anime.id);
    let storedFinishedAnime = finishedAnimeList.find(o => o.id === anime.id);


    // prevents you from adding already added anime
    const activeListDisabled = storedActiveAnime ? true :
        storedFinishedAnime ? true : false;
    const finishedListDisabled = storedFinishedAnime ? true : false;

    return (
        <>
            {
                (popup === false) ? (

                    <article key={anime.id} className="result-card" >
                        <header className="result-card-header">
                            <img onClick={() => togglePopup(true)} alt={anime.attributes.canonicalTitle}
                                src={anime.attributes.posterImage.large}
                            />
                            <div className="result-card-bot">
                                <h5>{anime.attributes.canonicalTitle}</h5>
                                <button disabled={activeListDisabled} onClick={() => addAnimeToActive(anime)}>+</button>

                            </div>

                        </header>
                    </article >
                ) : (
                        // feature
                        <div className="popup-container" >
                            <div className="blocker" onClick={() => togglePopup(false)}></div>
                            <div className="popup-content">

                                <div className="banner" style={{ backgroundImage: `url(${anime.attributes.coverImage !== null ? anime.attributes.coverImage.original : anime.attributes.posterImage.original})` }}>
                                    <div className="shadow"></div>
                                </div>
                                <div className="popup-header">
                                    <div className="popup-header-section">
                                        <div className="popup-poster-wrap">
                                            <div className="popup-poster-wrap-inner">
                                                <img className="popup-poster" src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle}></img>
                                                <div className="controls">
                                                    {/* Controls here drop downs*/}
                                                    <h1>close popup</h1>
                                                    <h1>controls</h1>
                                                </div>
                                                <div className="popup-stats">
                                                    <h5>Rating: {anime.attributes.averageRating}</h5>
                                                    <h5>Episodes: {anime.attributes.episodeCount}</h5>
                                                    <a id="link-to-MAL" href={`https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`} target="_blank" rel="noopener noreferrer">Trailer</a>
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