import React from "react";
import { Counter } from "../../../src/shared/ui/Counter/Counter"

describe("Counter Component Functionality With Cypress Test", () => {
    it("Should render initial value", () => {
        const mockedInitialValue = 5;
        cy.mount(<Counter initialValue={mockedInitialValue} />);
        cy.get('[data-cy=counter-input]').should('have.text', mockedInitialValue)
    });

    it('Should decrement initial value on decrement button click', () => {
        const mockedInitialValue = 5;
        cy.mount(<Counter initialValue={mockedInitialValue} />);
        cy.get('[data-cy=increment-input]').click()
        cy.get('[data-cy=counter-input]').should('have.text', mockedInitialValue + 1)
    });

    it('Should increment initial value on increment button click', () => {
        const mockedInitialValue = 5;
        cy.mount(<Counter initialValue={mockedInitialValue} />);
        cy.get('[data-cy=decrement-input]').click()
        cy.get('[data-cy=counter-input]').should('have.text', mockedInitialValue - 1)
    });
});
