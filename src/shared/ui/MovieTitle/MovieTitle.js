import React from 'react';
import './MovieTitle.css';

export const MovieTitle = ({ imageUrl, movieName, releaseYear, genres = [], onClick }) => {

    return (
        <div className="card">
            <img src={imageUrl} alt="Avatar" />
            <div className="container">
                <h4 className='title'>{movieName}</h4>
                <p  data-cy="paragraph-text" data-testid="paragraph-text">Year {releaseYear}</p>
                <p>genres
                    {genres.map((genre) => {
                        return (
                            <h4>{genre}</h4>
                        );
                    })}
                </p>
                <button data-testid="input-button" onClick={() => onClick(movieName)}>Click Me!</button>
            </div>
        </div>
    )
};
