import React, { useContext } from 'react';
import { GlobalContext } from '../Global/GlobalState.js';
import { ListCard } from '../Component/ListCard.js';
import '../Css/MyList.css';

export const MyList = () => {

    const { activeAnimeList } = useContext(GlobalContext);

    return (
        <div>
            <div className="list-header">
                <h3 className="title">Watching</h3>
                <h5 className="count">{activeAnimeList.length > 0 ? `Anime watching: ${activeAnimeList.length}` : ""}</h5>
            </div>
            <section className="list-section">
                {activeAnimeList.length > 0 ? (
                    <div className="list-container">
                        {
                            activeAnimeList.map( (anime) => (
                                <ListCard key={anime.mal_id} anime={anime} type="anime-watching" />
                            ))
                        }
                    </div>
                ) : <h4>No Anime Added. Go Add some.</h4>}
            </section>
        </div>
    )
}