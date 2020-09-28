import React from 'react';
import '../Css/ListCard.css';

export const ListCard = ({anime, type}) => {
    return (
        <article className="list-card">
            <header className="list-card-header">
                <img alt={anime.title}
                    src={anime.image_url}
                />
                <h5>{anime.title}</h5>
            </header>
        </article>
    )
}