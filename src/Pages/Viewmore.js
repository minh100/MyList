import React, { useState, useEffect } from 'react';
import './Viewmore.css';
import axios from 'axios';
import { ResultCard } from '../Component/ResultCard.js';

export const Viewmore = ({ title, url }) => {

    const [results, setResults] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        let cancel;

        cancel && cancel();
        axios.get(`${url}&page[offset]=${page}`,
            {
                cancelToken: new axios.CancelToken(function executor(c) {
                    cancel = c
                })
            })
            .then(res => {
                // console.log(res.data.data)
                setResults(res.data.data);
            })

        window.scrollTo(0,0); // scrolls the window to top of page after every render
    }, [page, url])

    return (

        <div className="container">

            <div className="viewmore-header">
                <h3 className="title">{title}</h3>
                <div className="pagination">
                    {
                        page !== 0 ? (
                            <div onClick={() => { setPage(page - 20) }} className="previous">
                                <i className="fas fa-arrow-left fa-lg"></i>
                            </div>
                        ) : (
                                <div className="previous" />
                            )
                    }
                    {
                        results.length >= 20 ? (
                            <div onClick={() => { setPage(page + 20) }} className="next">
                                <i className="fas fa-arrow-right fa-lg"></i>
                            </div>
                        ) : ("")
                    }
                </div>
            </div>
            <div className="viewmore-card-section">

                {results.map((shows) => (
                    <ResultCard key={shows.id} anime={shows} />
                ))}

            </div>
            <div className="viewmore-footer">
                <h3 className="title">Page: {Math.floor((page / 20) + 1)}</h3>
                <div className="pagination">
                    {
                        page !== 0 ? (
                            <div onClick={() => { setPage(page - 20) }} className="previous">
                                <i className="fas fa-arrow-left fa-lg"></i>
                            </div>
                        ) : (
                                <div className="previous" />
                            )
                    }
                    {
                        results.length >= 20 ? (
                            <div onClick={() => { setPage(page + 20) }} className="next">
                                <i className="fas fa-arrow-right fa-lg"></i>
                            </div>
                        ) : ("")
                    }
                </div>
            </div>
        </div>
    )
}

//https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}
//