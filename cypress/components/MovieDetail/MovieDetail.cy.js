import React from "react";
import { MovieDetail } from "../../../src/entities";
import { movieDetailData } from "../../../src/entities";

describe("MovieDetail Component Functionality With Cypress", () => {
    it("Should render mock values", () => {
        cy.mount(
            <MovieDetail
                movieInfo={movieDetailData}
            />
        );
        cy.get('[data-cy="paragraph-text"]').should('have.text', "Year " + movieDetailData.releaseYear)
    });
});
