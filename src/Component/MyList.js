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
                            <div className="list-info">
                                <div className="list-title">
                                    <h3 style={{ borderBottomStyle: "solid" }}>{listing}</h3>
                                </div>
                                <div className="dropdown">
                                    <i className="fas fa-angle-right fa-lg"></i>
                                    <div className="dropdown-content">
                                        <div onClick={() => setListing("Watched")} className="items">Go to Watched</div>
                                        <div onClick={() => setListing("Planning")} className="items">Go to Planning</div>
                                    </div>
                                </div>
                            </div>
                            <div className="count-box">
                                Watching: <h5 className="count">{activeAnimeList.length}</h5>
                            </div>
                        </div>
                        <section className="list-section">
                            {activeAnimeList.length > 0 ? (
                                <>
                                    {
                                        activeAnimeList.map((anime) => (
                                            <ListCard key={anime.id} anime={anime} />
                                        ))
                                    }
                                </>

                            ) : (
                                    <>
                                        <i style={{ textAlign: "right" }} className="fas fa-ghost fa-3x"></i>
                                        <div className="filler">
                                            No Anime Watching. Go Add Some.
                                        </div>
                                    </>
                                )
                            }
                        </section>
                    </>
                )
            }
            {
                listing === "Watched" && (
                    <>
                        <div className="list-header">
                            <div className="list-info">
                                <div className="list-title">
                                    <h3 style={{ borderBottomStyle: "solid" }}>{listing}</h3>
                                </div>
                                <div className="dropdown">
                                    <i className="fas fa-angle-right fa-lg"></i>
                                    <div className="dropdown-content">
                                        <div onClick={() => setListing("Watching")} className="items">Go to Watching</div>
                                        <div onClick={() => setListing("Planning")} className="items">Go to Planning</div>
                                    </div>
                                </div>
                            </div>
                            <div className="count-box">
                                Watched: <h5 className="count">{finishedAnimeList.length}</h5>
                            </div>
                        </div>
                        <section className="list-section">
                            {finishedAnimeList.length > 0 ? (
                                <>
                                    {
                                        finishedAnimeList.map((anime) => (
                                            <ListCard key={anime.id} anime={anime} />
                                        ))
                                    }
                                </>
                            ) : (
                                    <>
                                        <i style={{ textAlign: "right" }} className="fas fa-ghost fa-3x"></i>
                                        <div className="filler">
                                            No Anime Watched. Go Watch Some.
                                    </div>
                                    </>
                                )
                            }
                        </section>
                    </>
                )
            }
            {
                listing === "Planning" && (
                    <>
                        <div className="list-header">
                            <div className="list-info">
                                <div className="list-title">
                                    <h3 style={{ borderBottomStyle: "solid" }}>{listing}</h3>
                                </div>
                                <div className="dropdown">
                                    <i className="fas fa-angle-right fa-lg"></i>
                                    <div className="dropdown-content">
                                        <div onClick={() => setListing("Watching")} className="items">Go to Watching</div>
                                        <div onClick={() => setListing("Watched")} className="items">Go to Watched</div>
                                    </div>
                                </div>
                            </div>
                            <div className="count-box">
                                Planned: <h5 className="count">{planningAnimeList.length}</h5>
                            </div>
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

                            ) : (
                                    <>
                                        <i style={{ textAlign: "right" }} className="fas fa-ghost fa-3x"></i>
                                        <div className="filler">
                                            No Anime Planned. Go Add Some.
                                        </div>
                                    </>
                                )
                            }
                        </section>
                    </>
                )
            }

        </div>
    )
}