import React, { useEffect, useState } from 'react';
import { ResultCard } from './Component/ResultCard.js';
import './Home.css';

export const Home = () => {

    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v3/top/anime")
            .then(res => res.json())
            .then((data) => {
                if (!data.errors) {

                    setTopAnime(data.top);
                }

            });
    })

    return (
        <div>
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="top">
                <h3>Top Anime of All Time</h3>
                {
                    <section className="result-card-list">
                        {topAnime.map((shows) => (
                            <ResultCard anime={shows} />
                        ))}
                    </section>

                }
            </div>
        </div>
    )



}