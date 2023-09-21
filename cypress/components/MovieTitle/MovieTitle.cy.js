import React from "react";
import { MovieTitle } from "../../../src/shared/ui";
import { movieTitleData } from "../../../src/shared/ui";

describe("MovieTitle Component Functionality With Cypress", () => {
    it("Should render mock values", () => {

        const onClick = cy.stub();
        cy.mount(
            <MovieTitle
                imageUrl={movieTitleData.imageUrl}
                movieName={movieTitleData.movieName}
                releaseYear={movieTitleData.releaseYear}
                genres={movieTitleData.genres}
                onSelect={onClick}
            />
        );
        cy.get('[data-cy="paragraph-text"]').should('have.text', "Year " + movieTitleData.releaseYear)
    });
});
