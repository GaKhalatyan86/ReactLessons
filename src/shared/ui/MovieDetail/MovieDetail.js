import React from 'react';
import './MovieDetail.css';

export const MovieDetail = (props) => {

    return (
        <div className="wrapper">
            <div className="column">
                <img src={props.movieInfo.imageUrl} alt='image' />
            </div>
            <div className="column">
            <p>{props.movieInfo.movieName}</p>
            <p data-cy="paragraph-text" data-testid="paragraph-text">Year {props.movieInfo.releaseYear}</p>
            <p>Rating {props.movieInfo.rating}</p>
            <p>Duration {props.movieInfo.duration}</p>
            <p>Description {props.movieInfo.description}</p>
            </div>
        </div>
    )
};
