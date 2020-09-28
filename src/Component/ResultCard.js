import React from 'react';
import '../Css/ResultCard.css';

export const ResultCard = ({ anime }) => {
    return (
        <article className="result-card">
            <header className="result-card-header">
                <img alt={anime.title}
                    src={anime.image_url}
                />
                <h5>{anime.title}</h5>
            </header>
        </article>
    )
}

