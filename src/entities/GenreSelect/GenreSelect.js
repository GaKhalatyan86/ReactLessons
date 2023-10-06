import React from 'react';
import './GenreSelect.css';

export const GenreSelect = ({ genres = [], onClick }) => {
  const handleButtonClick = (event) => {
    onClick(event.target.value);
  }

  return (
    <div>
      <ul>
        {genres?.map((genre, index) => {
          return (
            <li key={index}>
              <button data-cy={index} value={genre} onClick={handleButtonClick}>{genre}</button>
            </li>)
        }
        )}
      </ul>
    </div>
  );
};
