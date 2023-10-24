import { useOutletContext } from "react-router";
import { SearchForm } from "../SearchForm/SearchForm";

export const SearchFormWrapper = () => {
    const { searchParam, handleSearch } = useOutletContext();
  
    return (
      <>
        <div className="find-movie-part">
          <p className="find-movie-title">FIND YOUR MOVIE</p>
          <SearchForm
            initialValue={searchParam || ""}
            onSearch={handleSearch}
            placeholder={"What do you want to search?"}
          />
        </div>
      </>
    );
  };