import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import CounterForm from './Counter/CounterForm';
import GenreSelect from './GenreSelect/GenreSelect';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
     <CounterForm/>
     <SearchForm/>
     <GenreSelect/>
    </div>
  );
}

export default App;
