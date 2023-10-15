import React from 'react';
import './MovieDetail.css';

export const MovieDetail = (props) => {
    return (
        <div className="wrapper">
            <div className="column">
                <img src={props.movie.imageUrl} />
            </div>
            <div className="column">
                <p>{props.movie.movieName}</p>
                <p data-cy="paragraph-text" data-testid="paragraph-text">Year {props.movie.releaseYear}</p>
                <p>Rating {props.movie.rating}</p>
                <p>Duration {props.movie.duration}</p>
                <p>Description {props.movie.description}</p>
            </div>
        </div>
    )
};
