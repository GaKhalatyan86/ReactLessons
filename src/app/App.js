import './App.css';
import { Counter, GenreSelect, SearchForm, genreList } from "../shared/ui";

export const App = () => {
  const handleSearch = (searchVal) => { };

  const handleChangeSelectedGenre = (searchVal) => { }

  return (
    <div className="App">
      <Counter initialValue={5} />
      <SearchForm
        initialValue={""}
        onSearch={handleSearch}
      />
      <GenreSelect
        genres={genreList}
        onSelect={handleChangeSelectedGenre}
      />
    </div>
  );
};
