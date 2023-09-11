import react, { useState } from "react";
import './GenerSelect.css';

export const GenreSelect = ({ genres = [], onSelect }) => {
  const handleButtonClick=(event)=>{
    onSelect(event.target.value);
  }

  return (
    <nav>
      <ul>
        {genres?.map((gener,index) =>{
        return(
          <li key={index}>
            <button  value={gener} onClick={handleButtonClick}>{gener}</button>
          </li>)}
          )}
      </ul>
    </nav>
  );
};
