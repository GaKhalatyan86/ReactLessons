import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import Counter from './Counter/Counter';
import GenreSelect from './GenreSelect/GenreSelect';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const geners=['Action', 'Comedy', 'Drama', 'Fantasy'];
  return (
    <div className="App">
     <Counter/>
     <SearchForm/>
     <GenreSelect data={geners}/>
    </div>
  );
}

export default App;
