import './App.css';
import { Counter} from "../shared/ui/Counter/Counter";
import { GenreSelect } from "../shared/ui/GenreSelect/GenreSelect";
import { SearchForm } from "../shared/ui/SearchForm/SearchForm";
import {generList} from "../shared/ui/GenreSelect/GenerMockData";


function App() {
  const geners=['Action', 'Comedy', 'Drama', 'Fantasy'];

  const handleSearch = (val) => {
    console.log(val);
  };

  const handleChangeSelectedGenre = (val) => {
    console.log(val);
  };

  return (
    <div className="App">
     <Counter initialValue={5}/>
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
}

export default App;
