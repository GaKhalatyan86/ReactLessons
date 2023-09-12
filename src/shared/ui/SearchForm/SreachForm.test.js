import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchForm } from './SearchForm';

describe("SearchForm Component Functionality", () => {
    test("Renders Search Form intitial value", () => {
        const initialValue = "Hello World!";
        const OnSearchClick = jest.fn();
        render(
            <SearchForm
                initialValue={initialValue}
                onSearch={OnSearchClick}
            />
        );
        expect(screen.getByRole('txtSearch')).toHaveValue('Hello World!')
    });

    test("Renders Search button click", () => {
        const initialValue = "Hello World!";
        const OnSearchClick = jest.fn((x) => x);
        render(
            <SearchForm
                initialValue={initialValue}
                onSearch={OnSearchClick}
            />
        );
        fireEvent.click(screen.getByText('Search'));
        expect(OnSearchClick.mock.results[0].value).toBe('Hello World!')
    });
});