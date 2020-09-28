import React, { useContext } from 'react';

export const MyList = () => {
    
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