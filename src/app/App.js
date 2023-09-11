import './App.css';
import { Counter } from "../shared/ui/Counter/Counter";
import { GenreSelect } from "../shared/ui/GenreSelect/GenreSelect";
import { SearchForm } from "../shared/ui/SearchForm/SearchForm";
import { genreList } from "../shared/ui/GenreSelect/GenreMockData";

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
