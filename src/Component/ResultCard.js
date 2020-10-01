import React, { useContext, useState } from 'react';
import '../Css/ResultCard.css';
import '../Css/Popup.css';
import { GlobalContext } from '../Global/GlobalState.js';

export const ResultCard = ({ anime }) => {

    const { addAnimeToActive, removeAnimeBothList, activeAnimeList, finishedAnimeList } = useContext(GlobalContext);
    const [popup, togglePopup] = useState(false);

    let storedActiveAnime = activeAnimeList.find(o => o.mal_id === anime.mal_id);
    let storedFinishedAnime = finishedAnimeList.find(o => o.mal_id === anime.mal_id);


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
                        <div className="popup-container">
                            <div className="popup-content">
                                <div id="popup-cover" style={{ backgroundImage: `url(${anime.attributes.posterImage.large})` }}>
                                </div>
                                <div className="popup-description">
                                    <div className="popup-header">
                                        <h1 id="popup-open-title">{anime.attributes.posterImage.large}</h1>
                                        <button id="popup-open-toggle" onClick={() => togglePopup(false)}>X</button>
                                    </div>
                                    <div className="popup-info">
                                        <div className="popup-stats">
                                            <h5 id="popup-score">Rating: {anime.attributes.averageRating}</h5>
                                            <h5 id="popup-episodes">Episodes: {anime.attributes.episodeCount}</h5>
                                            <a id="link-to-MAL" href={anime.url}>MAL</a>
                                        </div>
                                        <h4 id="popup-synopsis">{anime.links.self}</h4>

                                    </div>
                                </div>


                            </div>

                        </div>
                    )
            }
        </>
    )

}