import React from 'react';
import '../Css/ListCard.css';
import { Controls } from '../Global/Controls.js';

export const ListCard = ({ anime, type }) => {
    return (
        <div className="list-card">
            <div className="image">
                <img alt={anime.title}
                    src={anime.image_url}
                />
            </div>
            <div className="bottom-info">
                <h5>{anime.title}</h5>
                <Controls type={type} anime={anime} />
            </div>
        </div>
    )
}