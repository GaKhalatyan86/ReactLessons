import React from 'react';
import '@testing-library/jest-dom';
import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm';

describe("SearchForm Component Functionality", () => {
    test("Should render initial value", () => {
        const mockedInitialValue = "Hello World!";
        const onSearchClick = jest.fn();
        render(
            <SearchForm
                initialValue={mockedInitialValue}
                onSearch={onSearchClick}
            />
        );
        expect(screen.getByTestId('search-input')).toHaveValue('Hello World!')
    });

    test("Should get search value on button click event", () => {
        const mockedInitialValue = "Hello World!";
        const onSearchClick = jest.fn();
        render(
            <SearchForm
                initialValue={mockedInitialValue}
                onSearch={onSearchClick}
            />
        );
        userEvent.click(screen.getByText('Search'));
        expect(onSearchClick).toBeCalledWith(mockedInitialValue)
    });
});
