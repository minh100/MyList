import React, { useContext } from 'react';
import '../Css/ResultCard.css';
import { GlobalContext } from '../Global/GlobalState.js';

export const ResultCard = ({ anime }) => {

    const { addAnimeToActive, removeAnimeBothList, activeAnimeList, finishedAnimeList } = useContext(GlobalContext);

    let storedActiveAnime = activeAnimeList.find(o => o.mal_id === anime.mal_id);
    let storedFinishedAnime = finishedAnimeList.find(o => o.mal_id === anime.mal_id);


    // prevents you from adding already added anime
    const activeListDisabled = storedActiveAnime ? true :
        storedFinishedAnime ? true : false;
    const finishedListDisabled = storedFinishedAnime ? true : false;

    return (
        <article key={anime.mal_id} className="result-card">
            <header className="result-card-header">
                <img alt={anime.title}
                    src={anime.image_url}
                />
                <div className="result-card-bot">
                    <h5>{anime.title}</h5>
                    <button disabled={activeListDisabled} onClick={() => addAnimeToActive(anime)}>+</button>

                </div>

            </header>
        </article>
    )
}