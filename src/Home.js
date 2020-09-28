import React, { useEffect, useState } from 'react';
import { ResultCard } from './Component/ResultCard.js';
import './Home.css';

export const Home = () => {

    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const baseUrl = "https://api.jikan.moe/v3";

    useEffect(() => {
        fetch(`${baseUrl}/top/anime`)
            .then(res => res.json())
            .then((data) => {
                if (!data.errors) {

                    setTopAnime(data.top);
                }

            });
    })

    const onChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value);

        const query = e.target.value;

        fetch(`${baseUrl}/search/anime?q=${query}&page=1`)
            .then(res => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                }
                else {
                    setResults([]);
                }
            })
    }

    return (
        <div>
            <div className="search-section">
                <div className="search-bar">
                    <h3>SEARCH</h3>
                    <input
                        type="text"
                        onChange={onChange}
                        value={search}
                        placeholder="Search..."
                    />
                </div>


                {
                    <section className="result-card-list">
                        {results.map((shows) => (
                            <ResultCard key={shows.mal_id} anime={shows} />
                        ))}
                    </section>
                }
            </div>



            <div className="top">
                <h3>ALL TIME TOP</h3>
                {
                    <section className="result-card-list">
                        {topAnime.map((shows) => (
                            <ResultCard key={shows.mal_id} anime={shows} />
                        ))}
                    </section>

                }
            </div>
        </div>
    )



}