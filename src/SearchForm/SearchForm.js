import React, { useState } from "react"
import GenreSelect from "../GenreSelect/GenreSelect";

function SearchForm(props) {
  const Genres = ['Action', 'Comedy', 'Drama', 'Fantasy']
  const [searchText, setSearchText] = useState('');

  return <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button name='Search' className="btn btn-light" value=''>Search</button>
          </li>
          <li className="nav-item dropdown">
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>

  </>
}


export default SearchForm
