import React, { useState } from 'react';
import '../Css/ListCard.css';
import '../Css/Popup.css';
import { Controls } from '../Global/Controls.js';

export const ListCard = ({ anime, type }) => {

    const [popup, togglePopup] = useState(false);

    return (
        <>
            {
                (popup === false) ? (
                    <div className="list-card">
                        <div className="image">
                            <img onClick={() => togglePopup(true)} alt={anime.attributes.canonicalTitle}
                                src={anime.attributes.posterImage.large}
                            />
                        </div>
                        <div className="bottom-info">
                            <h5>{anime.attributes.canonicalTitle}</h5>
                            <Controls type={type} anime={anime} />
                        </div>
                    </div>
                ) : (
                        <div className="popup-container">
                            <div className="blocker" onClick={() => togglePopup(false)}></div>
                            <div className="popup-content">
                                <div id="popup-cover" style={{ backgroundImage: `url(${anime.attributes.posterImage.large})` }}>
                                </div>
                                <div className="popup-description">
                                    <div className="popup-header">
                                        <h1 id="popup-open-title">{anime.attributes.canonicalTitle}</h1>
                                        <button id="popup-open-toggle" onClick={() => togglePopup(false)}>X</button>
                                    </div>
                                    <div className="popup-info">
                                        <div className="popup-stats">
                                            <h5 id="popup-score">Rating: {anime.attributes.averageRating}</h5>
                                            <h5 id="popup-episodes">Episodes: {anime.attributes.episodeCount}</h5>
                                            <a id="link-to-MAL" href={`https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`} target="_blank">Trailer</a>
                                        </div>
                                        <h4 id="popup-synopsis">{anime.attributes.synopsis}</h4>

                                    </div>
                                </div>


                            </div>

                        </div>
                    )
            }
        </>


    )
}