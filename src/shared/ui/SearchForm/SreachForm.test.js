import React from 'react';
import '@testing-library/jest-dom';
import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm';

describe("SearchForm Component Functionality", () => {
    test("Should render initial value", () => {
        const initialValue = "Hello World!";
        const OnSearchClick = jest.fn();
        render(
            <SearchForm
                initialValue={initialValue}
                onSearch={OnSearchClick}
            />
        );
        expect(screen.getByTestId('search-input')).toHaveValue('Hello World!')
    });

    test("Should get search value on button click event", () => {
        const initialValue = "Hello World!";
        const OnSearchClick = jest.fn((x) => x);
        render(
            <SearchForm
                initialValue={initialValue}
                onSearch={OnSearchClick}
            />
        );
        userEvent.click(screen.getByText('Search'));
        expect(OnSearchClick.mock.results[0].value).toBe('Hello World!')
    });
});