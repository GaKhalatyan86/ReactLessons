import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { GenreSelect } from "./GenreSelect";
import { genreList } from "./GenreMockData";

describe("GenreSelect Component Functionality", () => {
    test("Should render all genres", () => {
        const onGenreClick = jest.fn();
        render(
            <GenreSelect
                genres={genreList}
                onSearch={onGenreClick}
            />
        );
        genreList.map((genre) =>
            expect(screen.getByText(genre)).toBeInTheDocument()
        );
    });

    test("Should select genre on button click event", () => {
        const onGenreClick = jest.fn();
        render(
            <GenreSelect
                genres={genreList}
                onSelect={onGenreClick}
            />
        );
        genreList.map((genre, index) => {
            userEvent.click(screen.getByText(genre))
            expect(onGenreClick).toBeCalledWith(genre)
        });
    });
});
