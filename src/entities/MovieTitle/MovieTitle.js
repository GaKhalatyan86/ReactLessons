import React from 'react';
import './MovieTitle.css';

export const MovieTitle = ({ movieTitleData }) => {

    return (
        <div className="card">
            <img src={movieTitleData.imageUrl} />
            <div className="container">
                <h4 className='title'>{movieTitleData.movieName}</h4>
                <p data-cy="paragraph-text" data-testid="paragraph-text">Year {movieTitleData.releaseYear}</p>
                <p>genres
                    {movieTitleData.genres.map((genre) => {
                        return (
                            <h4>{genre}</h4>
                        );
                    })}
                </p>
                <button data-testid="input-button" onClick={movieTitleData.onClick}>Click Me!</button>
            </div>
        </div>
    )
};
