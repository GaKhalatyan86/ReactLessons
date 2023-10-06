import React from 'react';
import { GenreSelect } from '../../../src/entities';
import { genreList } from '../../../src/entities';

describe("GenreSelect Component Functionality With Cypress", () => {
    it("Should render all genres", () => {
        const onGenreClick = cy.stub();
        cy.mount(
            <GenreSelect
                genres={genreList}
                onClick={onGenreClick}
            />
        );
        genreList.map((genre, index) =>
            cy.get('[data-cy="' + index + '"]').should("have.text", genre)
        );
    });

    it("Should select genre on button click event", () => {
        const onGenreClick = cy.stub();
        cy.mount(
            <GenreSelect
                genres={genreList}
                onClick={onGenreClick}
            />
        );
        genreList.map((genre, index) => {
            cy.get('[data-cy="' + index + '"]').click();
            ////****************Assert********************/
        });
    });
});
