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
                movieInfo={movieDetailData}
            />
        );
        expect(screen.getByTestId('paragraph-text')).toHaveTextContent("Year " + movieDetailData.releaseYear)
    });
});
