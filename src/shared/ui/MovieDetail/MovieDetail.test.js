import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { MovieDetail } from './MovieDetail';
import { movieDetailData } from './MovieDetailMockData';

describe("MovieDetail Component Functionality", () => {
    test("Should render movie details", () => {

        render(
            <MovieDetail
                imageUrl={movieDetailData.imageUrl}
                movieName={movieDetailData.movieName}
                rating={movieDetailData.rating}
                releaseYear={movieDetailData.releaseYear}
                duration={movieDetailData.duration}
                description={movieDetailData.description}
            />
        );
        expect(screen.getByTestId('paragraph-text')).toHaveTextContent("Year "+movieDetailData.releaseYear)
    });
});
