import React from 'react';
import './MovieDetail.css';

export const MovieDetail = ({ imageUrl, movieName, releaseYear, rating, duration, description }) => {

    return (
        <div className="row">
            <div className="column">
                <img src={imageUrl} alt='image' />
            </div>
            <div className="column">
            <p>{movieName}</p>
            <p data-cy="paragraph-text" data-testid="paragraph-text">Year {releaseYear}</p>
            <p>Rating {rating}</p>
            <p>Duration {duration}</p>
            <p>Description {description}</p>
            </div>
        </div>
    )
};
