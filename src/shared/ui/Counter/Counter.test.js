import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter Component Functionality", () => {
    test("Renders Initial Value", () => {
        const initialValue = 5;
        render(<Counter initialValue={initialValue} />);
        const initialValueElement = screen.getByText(initialValue);
        expect(initialValueElement).toBeInTheDocument();
    });
    test("Decrement Button Functionality", () => {
        const initialValue = 1;
        render(<Counter initialValue={initialValue} />);
        const decrementElement = screen.getByText('Decrement');
        fireEvent.click(decrementElement);
        expect(screen.getByRole('cnt')).toHaveTextContent("0");
    });
    test("Increment Button Functionality", () => {
        const initialValue = 1;
        render(<Counter initialValue={initialValue} />);
        const decrementElement = screen.getByText('Increment');
        fireEvent.click(decrementElement);
        expect(screen.getByRole('cnt')).toHaveTextContent("2");
    });

});