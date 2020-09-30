import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResultCard } from './Component/ResultCard.js';
import './Home.css';

export const Home = () => {

    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const baseUrl = "https://api.jikan.moe/v3";

    const dummy = "";

    let cancel;
    const CancelToken = axios.CancelToken;

    useEffect(() => {
        cancel && cancel();
        axios.get(`${baseUrl}/top/anime`,
        {
            cancelToken: new CancelToken(function executor(c) {
                cancel = c
            })
        })
            .then(res => {
                setTopAnime(res.data.top);
            })
    }, [dummy])

    const onChange = e => {
        e.preventDefault();

        setSearch(e.target.value);

        const query = e.target.value;
        cancel && cancel();

        axios.get(`${baseUrl}/search/anime?q=${query}&page=1`,
            {
                cancelToken: new CancelToken(function executor(c) {
                    cancel = c
                })
            })
            .then(res => {
                console.log(res.data);
                setResults(res.data.results);
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
                    results.length > 0 ? (
                        <section className="result-card-list">
                            {results.map((shows) => (
                                <ResultCard key={shows.mal_id} anime={shows} />
                            ))}
                        </section>
                    ) : ""
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