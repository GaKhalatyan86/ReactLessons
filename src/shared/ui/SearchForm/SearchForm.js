import React, { useState } from "react"
import './SearchForm.css'

export const SearchForm = ({ initialValue = "1", onSearch }) => {
  const [searchText, setSearchText] = useState(initialValue);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchText);
    }
  }

  return (
    <form className="search-form input-element">
      <input type="text" data-testid="search-input" data-cy="search-input" placeholder="Search...."
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button type="button" data-cy="button-input" onClick={handleSearchClick}>Search</button>
    </form>
  );
};
