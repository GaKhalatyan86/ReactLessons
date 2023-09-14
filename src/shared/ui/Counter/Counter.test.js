import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { Counter } from "./Counter";

describe("Counter Component Functionality", () => {
    test("Should render initial value", () => {
        const initialValue = 5;
        render(<Counter initialValue={initialValue} />);
        const initialValueElement = screen.getByText(initialValue);
        expect(initialValueElement).toBeInTheDocument();
    });

    test("Should decrement initial value on decrement button click", () => {
        const initialValue = 1;
        render(<Counter initialValue={initialValue} />);
        const decrementElement = screen.getByText('Decrement');
        act(() => {
            userEvent.click(decrementElement);
        });
        expect(screen.getByTestId('counter-input')).toHaveTextContent("0");
    });

    test("Should increment initial value on increment button click", async () => {
        const initialValue = 1;
        render(<Counter initialValue={initialValue} />);
        const decrementElement = screen.getByText('Increment');
        act(() => {
            userEvent.click(decrementElement);
        });
        expect(screen.getByTestId('counter-input')).toHaveTextContent("2");
    });
});
