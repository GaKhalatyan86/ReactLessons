import React from "react";
import { MovieTitle } from "../../../src/entities";
import { movieTitleData } from "../../../src/entities";

describe("MovieTitle Component Functionality With Cypress", () => {
    it("Should render mock values", () => {

        const onClick = cy.stub();
        cy.mount(
            <MovieTitle
                imageUrl={movieTitleData.imageUrl}
                movieName={movieTitleData.movieName}
                releaseYear={movieTitleData.releaseYear}
                genres={movieTitleData.genres}
                onClick={onClick}
            />
        );
        cy.get('[data-cy="paragraph-text"]').should('have.text', "Year " + movieTitleData.releaseYear)
    });
});
