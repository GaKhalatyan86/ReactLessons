import React, { useState } from "react"
import './SearchForm.css'

export const SearchForm = ({ initialValue = "1", onSearch }) => {
  const [searchText, setSearchText] = useState(initialValue);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchText);
    }
  }

  return (
    <form className="search-form input-element" onSubmit={() => onSearch(searchText)}>
      <input type="text" data-testid="search-input" data-cy="search-input" placeholder="Search...."
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button type="submit" data-testid="button-input" data-cy="button-input">Search</button>
    </form>
  );
};
