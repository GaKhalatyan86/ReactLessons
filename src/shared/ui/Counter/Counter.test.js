import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { Counter } from "./Counter";

describe("Counter Component Functionality", () => {
    test("Should render initial value", () => {
        const mockedInitialValue = 5;
        render(<Counter initialValue={mockedInitialValue} />);
        const initialValueElement = screen.getByText(mockedInitialValue);
        expect(initialValueElement).toBeInTheDocument();
    });

    test("Should decrement initial value on decrement button click", () => {
        const mockedInitialValue = 1;
        render(<Counter initialValue={mockedInitialValue} />);
        const decrementElement = screen.getByText('Decrement');
        act(() => {
            userEvent.click(decrementElement);
        });
        expect(screen.getByTestId('counter-input')).toHaveTextContent("0");
    });

    test("Should increment initial value on increment button click", async () => {
        const mockedInitialValue = 1;
        render(<Counter initialValue={mockedInitialValue} />);
        const decrementElement = screen.getByText('Increment');
        act(() => {
            userEvent.click(decrementElement);
        });
        expect(screen.getByTestId('counter-input')).toHaveTextContent("2");
    });
});
