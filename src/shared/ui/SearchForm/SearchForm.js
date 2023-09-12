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
    <form className="search-form input-element">
      <input type="text" role="txtSearch" placeholder="Search...."
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button type="button" role="btnSearch" onClick={handleSearchClick}>Search</button>
    </form>
  );
};
