import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Global/GlobalState.js';
import { ListCard } from '../Component/ListCard.js';
import '../Css/MyList.css';

export const MyList = () => {

    const { activeAnimeList, finishedAnimeList, planningAnimeList } = useContext(GlobalContext);
    const [listing, setListing] = useState("Watching");

    return (
        <div className="mylist-section">

            {
                listing === "Watching" && (
                    <>
                        <div className="list-header">
                            <div>
                                <h3 className="title">{listing}</h3>
                                <button onClick={() => setListing("Watched")} >Go to Watched</button>
                                <button onClick={() => setListing("Planning")} >Go to Planning</button>
                            </div>

                            <h5 className="count">{activeAnimeList.length > 0 ? `Anime watching: ${activeAnimeList.length}` : ""}</h5>
                        </div>
                        <section className="list-section">
                            {activeAnimeList.length > 0 ? (
                                <>
                                {
                                    activeAnimeList.map((anime) => (
                                        <ListCard key={anime.id} anime={anime}  />
                                    ))
                                }
                                </>

                            ) : <h4>No Anime Added. Go Add some.</h4>}
                        </section>
                    </>
                )
            }
            {
                listing === "Watched" && (
                    <>
                        <div className="list-header">
                            <div>
                                <h3 className="title">{listing}</h3>
                                <button onClick={() => setListing("Watching")} >Go to Watching</button>
                                <button onClick={() => setListing("Planning")} >Go to Planning</button>
                            </div>

                            <h5 className="count">{finishedAnimeList.length > 0 ? `Anime Watched: ${finishedAnimeList.length}` : ""}</h5>
                        </div>
                        <section className="list-section">
                            {finishedAnimeList.length > 0 ? (
                                <>
                                    {
                                        finishedAnimeList.map((anime) => (
                                            <ListCard key={anime.id} anime={anime}  />
                                        ))
                                    }
                                </>
                            ) : <h4>No Anime Watched. Go Watch Some.</h4>}
                        </section>
                    </>
                )
            }
            {
                listing === "Planning" && (
                    <>
                        <div className="list-header">
                            <div>
                                <h3 className="title">{listing}</h3>
                                <button onClick={() => setListing("Watching")} >Go to Watching</button>
                                <button onClick={() => setListing("Watched")} >Go to Watched</button>
                            </div>

                            <h5 className="count">{planningAnimeList.length > 0 ? `Anime watching: ${planningAnimeList.length}` : ""}</h5>
                        </div>
                        <section className="list-section">
                            {planningAnimeList.length > 0 ? (
                                <>
                                {
                                    planningAnimeList.map((anime) => (
                                        <ListCard key={anime.id} anime={anime} />
                                    ))
                                }
                                </>

                            ) : <h4>No Anime Planned. Go Add some.</h4>}
                        </section>
                    </>
                )
            }

        </div>
    )
}