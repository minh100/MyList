import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResultCard } from './Component/ResultCard.js';
import './Home.css';

export const Home = () => {

    const [topAnime, setTopAnime] = useState([]);
    const [seasonPopular, setSeasonPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const baseUrl = "https://kitsu.io/api/edge";

    const dummy = "";

    useEffect(() => {
        let cancel;

        cancel && cancel();
        axios.get(`${baseUrl}/anime?sort=popularityRank&page[limit]=6`,   // gets all time popular
            {
                cancelToken: new axios.CancelToken(function executor(c) {
                    cancel = c
                })
            })
            .then(res => {
                // console.log(res.data.data)
                setTopAnime(res.data.data);
            })

        axios.get(`${baseUrl}/anime?filter[status]=current&sort=popularityRank&page[limit]=6`,    // gets trending now
            {
                cancelToken: new axios.CancelToken(function executor(c) {
                    cancel = c
                })
            })
            .then(res => {
                // console.log(res.data.data)
                setSeasonPopular(res.data.data);
            })

        axios.get(`${baseUrl}/anime?filter[status]=upcoming&sort=popularityRank&page[limit]=6`,    // gets upcoming
            {
                cancelToken: new axios.CancelToken(function executor(c) {
                    cancel = c
                })
            })
            .then(res => {
                // console.log(res.data.data)
                setUpcoming(res.data.data);
            })

    }, [dummy])

    const onChange = e => {
        let cancel;

        e.preventDefault();

        setSearch(e.target.value);

        const query = e.target.value;
        cancel && cancel();

        axios.get(`${baseUrl}/anime?filter[text]=${query}&page[limit]=7`,
            {
                cancelToken: new axios.CancelToken(function executor(c) {
                    cancel = c
                })
            })
            .then(res => {

                setResults(res.data.data);
            })
    }

    return (
        <div>
            <div className="search-section">
                <div className="search-bar">
                    <h3>Search</h3>
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
                                <ResultCard key={shows.id} anime={shows} />
                            ))}
                        </section>
                    ) : ""
                }
            </div>
            <div className="upcoming">
                <h3>Upcoming</h3>
                {
                    <section className="result-card-list">
                        {upcoming.map((shows) => (
                            <ResultCard key={shows.id} anime={shows} />
                        ))}
                    </section>

                }
            </div>
            <div className="trending">
                <h3>Trending Now</h3>
                {
                    <section className="result-card-list">
                        {seasonPopular.map((shows) => (
                            <ResultCard key={shows.id} anime={shows} />
                        ))}
                    </section>

                }
            </div>
            <div className="top">
                <h3>All Time Top</h3>
                {
                    <section className="result-card-list">
                        {topAnime.map((shows) => (
                            <ResultCard key={shows.id} anime={shows} />
                        ))}
                    </section>

                }
            </div>


        </div>
    )



}