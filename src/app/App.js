import './App.css';
import { Counter, GenreSelect, SearchForm, genreList, movieTitleData, MovieTitle,movieDetailData,MovieDetail } from "../shared/ui";

export const App = () => {
  const handleSearch = (searchVal) => { };

  const handleChangeSelectedGenre = (searchVal) => { }

  const handleSelectMovieTitile = (selectedVal) => {
    alert(selectedVal);
   }

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

      <MovieTitle
        imageUrl={movieTitleData.imageUrl}
        movieName={movieTitleData.movieName}
        releaseYear={movieTitleData.releaseYear}
        genres={movieTitleData.genres}
        onSelect={handleSelectMovieTitile}
      />

       <MovieDetail
        imageUrl={movieDetailData.imageUrl}
        movieName={movieDetailData.movieName}
        rating={movieDetailData.rating}
        releaseYear={movieDetailData.releaseYear}
        duration={movieDetailData.duration}
        description={movieDetailData.description}
      />
    </div>
  );
};
