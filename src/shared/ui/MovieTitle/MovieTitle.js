import React from 'react';
import './MovieTitle.css';

export const MovieTitle = ({ imageUrl, movieName, releaseYear, genres = [], onSelect }) => {

    return (
        <div className="card">
            <img src={process.env.PUBLIC_URL+imageUrl} alt="Avatar" />
            <div className="container">
                <h4><b>{movieName}</b></h4>
                <p  data-cy="paragraph-text" data-testid="paragraph-text">Year {releaseYear}</p>
                <p>genres
                    {genres.map((genre) => {
                        return (
                            <h4>{genre}</h4>
                        );
                    })}
                </p>
                <button data-testid="input-button" onClick={() => onSelect(movieName)}>Click Me!</button>
            </div>
        </div>
    )
};
