import React from "react";
import { SearchForm } from "../../../src/entities";

describe("SearchForm Component Functionality With Cypress", () => {
    it("Should render initial value", () => {
        const mockedInitialValue = "Hello World!";
        const onSearchClick = cy.stub();
        cy.mount(
            <SearchForm
                initialValue={mockedInitialValue}
                onSearch={onSearchClick}
            />
        );
        cy.get('[data-cy="search-input"]').should('have.value', mockedInitialValue)
    });

    it("Should get search value on button click event", () => {
        const mockedInitialValue = "Hello World!";
        const onSearchClick = cy.stub();
        cy.mount(
            <SearchForm
                initialValue={mockedInitialValue}
                onSearch={onSearchClick}
            />
        );
        cy.get('[data-cy="button-input"]').click()
        ////*********Assert***************////
    });
});
