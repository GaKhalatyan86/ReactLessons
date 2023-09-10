import react, { useState } from "react";
import './GenerSelect.css';

const geners = ['Action', 'Comedy', 'Drama', 'Fantasy'];

export const GenreSelect = ({ genres = [], onSelect }) => {

  const handleButtonClick=(event)=>{
    onSelect(event.target.value);
  }

  return (
    <nav>
      <ul>
        {genres?.map((val,i) =>{
        return(
          <li key={i}>
            <button  value={val} onClick={handleButtonClick}>{val}</button>
          </li>)}
          )}
      </ul>
    </nav>
  )
}
