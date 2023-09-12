import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { GenreSelect } from "./GenreSelect";
import { genreList } from "./GenreMockData";

describe("GenreSelect Component Functionality", () => {
    test("Renders All Genres", () => {
        const OnGenreClick = jest.fn();
        render(
            <GenreSelect
                genres={genreList}
                onSearch={OnGenreClick}
            />
        );
        genreList.map((genre) =>
            expect(screen.getByText(genre)).toBeInTheDocument()
        );
    });

    test("Renders Genre select event", () => {
        const OnGenreClick = jest.fn((x) => x);
        render(
            <GenreSelect
                genres={genreList}
                onSelect={OnGenreClick}
            />
        );
        genreList.map((genre, index) => {
            fireEvent.click(screen.getByText(genre))
            expect(OnGenreClick.mock.results[index].value).toBe(genre);
        });
    });
});
