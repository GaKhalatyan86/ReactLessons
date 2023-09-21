import React from "react";
import { MovieDetail } from "../../../src/shared/ui";
import { movieDetailData } from "../../../src/shared/ui";

describe("MovieDetail Component Functionality With Cypress", () => {
    it("Should render mock values", () => {
        cy.mount(
            <MovieDetail
                imageUrl={movieDetailData.imageUrl}
                movieName={movieDetailData.movieName}
                rating={movieDetailData.rating}
                releaseYear={movieDetailData.releaseYear}
                duration={movieDetailData.duration}
                description={movieDetailData.description}
            />
        );
        cy.get('[data-cy="paragraph-text"]').should('have.text', "Year " + movieDetailData.releaseYear)
    });
});
