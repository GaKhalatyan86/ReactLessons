import './App.css';
import { Counter } from "../shared/ui/Counter/Counter";
import { GenreSelect } from "../shared/ui/GenreSelect/GenreSelect";
import { SearchForm } from "../shared/ui/SearchForm/SearchForm";
import { generList } from "../shared/ui/GenreSelect/GenerMockData";


export const App = () => {
  const handleSearch = (val) => { };

  const handleChangeSelectedGenre = (val) => { }

  return (
    <div className="App">
      <Counter initialValue={5} />
      <SearchForm
        initialValue={""}
        onSearch={handleSearch}
      />
      <GenreSelect
        genres={generList}
        onSelect={handleChangeSelectedGenre}
      />
    </div>
  );
};
