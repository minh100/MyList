import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState.js';

export const Controls = ({ anime, type }) => {
    const { removeAnimeBothList, moveAnimeToActive, moveAnimeToFinish } = useContext(GlobalContext);

    return (
        <div>
            {type === 'anime-watching' && (
                <>
                    <button onClick={() => moveAnimeToFinish(anime)}>
                        Move to Watched
                    </button>

                    <button onClick={() => removeAnimeBothList(anime.mal_id)}>
                        Remove from list
                    </button>

                </>
            )}
            {type === 'finishedAnimeList' && (
                <>
                    <button onClick={() => moveAnimeToActive(anime)}>
                        Move to Watching
                    </button>

                    <button onClick={() => removeAnimeBothList(anime.mal_id)}>
                        Remove from list
                    </button>
                </>
            )}
        </div>
    )
}