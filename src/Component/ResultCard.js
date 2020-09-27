import React from 'react';
import '../Css/ResultCard.css';

export const ResultCard = ({anime}) => {
    return (
        // <section className="result-card-list">
        //     <article className="result-card">
        //         <header className="result-card-header">
        //             <img alt={anime.title}
        //             src={anime.image_url}
        //             />
        //             <h4>{anime.title}</h4>
        //         </header>
        //     </article>
        // </section>
        <article className="result-card">
                <header className="result-card-header">
                    <img alt={anime.title}
                    src={anime.image_url}
                    />
                    <h4>{anime.title}</h4>
                </header>
            </article>
    )
}

