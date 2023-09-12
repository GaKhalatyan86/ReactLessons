import React, { useState } from "react"
import './SearchForm.css'

export const SearchForm = ({ initialValue = "", onSearch }) => {
  const [searchText, setSearchText] = useState(initialValue);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  const handleKeyPress=(event)=>{
    if (event.key === "Enter") {
      onSearch(searchText);
    }
  }

  return (
    <form class="search-form input-element">
      <input type="text" placeholder="Search...."
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={handleSearchClick}>Search</button>
    </form>
  );
};
