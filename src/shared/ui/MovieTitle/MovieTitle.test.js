import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { MovieTitle } from "./MovieTitle";
import { movieTitleData } from './MovieTitleMockData';

describe("MovieTitle Component Functionality", () => {
    test("Should render movie title", () => {
        const onMovieClick = jest.fn();
        render(
            <MovieTitle
                imageUrl={movieTitleData.imageUrl}
                movieName={movieTitleData.movieName}
                releaseYear={movieTitleData.releaseYear}
                genres={movieTitleData.genres}
                onSelect={onMovieClick}
            />
        );
        expect(screen.getByTestId('paragraph-text')).toHaveTextContent('Year ' + movieTitleData.releaseYear)
    });
});
