import "./MoviesListPage.css";
import { useEffect, useState } from "react";
import { MovieDetail, MovieTitle, SortControl, moviesSortOptions, genreList, GenreSelect, SearchForm } from "../entities";

export const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState(moviesSortOptions[0]);
  const [selectedGenre, setSelectedGenre] = useState("ALL");

  const handleSearch = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const handleChangeSelectedGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const handleChangeSortCriterion = (event) => {
    setSortCriterion(event.target.value);
  };

  const handleMovieTitleClick = (movieProps) => {
    setSelectedMovie(movieProps);
  };

  const handleMovieViewClosed = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/movies?sortBy=${sortCriterion.value
          }&search=${searchQuery}&filter=${[selectedGenre === 'ALL' ? '' : selectedGenre]}`
        );
        const json = await response.json();
        setMovies(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMoviesData();
  }, [searchQuery, sortCriterion, selectedGenre]);

  return (
    <div className="list-page">
      <div className="list-page-upper">
        {!selectedMovie && (
          <>
            <div className="find-movie-part">
              <p className="find-movie-title">FIND YOUR MOVIE</p>
              <SearchForm
                initialValue={""}
                onSearch={handleSearch}
                placeholder={"What do you want to search?"}
              />
            </div>
          </>
        )}
        {selectedMovie && (
          <MovieDetail
            movie={selectedMovie}
            handleMovieViewClosed={handleMovieViewClosed}
          />
        )}
      </div>
      <div className="list-page-lower">
        <div className="config-list-part">
          <GenreSelect
            genres={genreList}
            onClick={handleChangeSelectedGenre}
          />
          <SortControl
            options={moviesSortOptions}
            selectedOption={sortCriterion}
            onSelect={handleChangeSortCriterion}
          />
        </div>
        <div className="movies-list-part">
          <p className="found-movies">{movies?.length} movies found</p>
          <div className="movies-list">
            {movies?.map((movie) => {
              return (
                <MovieTitle
                  key={movie.id}
                  movieTitleData={
                    {
                    movieName: movie.title,
                    releaseYear: movie.releaseYear,
                    genres: movie.genres,
                    imageUrl: movie.poster_path,
                    onClick: () =>
                    handleMovieTitleClick({
                      imageUrl: movie.poster_path,
                      movieName: movie.title,
                      releaseYear: movie.release_date,
                      rating: movie.vote_average,
                      duration: movie.runtime,
                      description: movie.overview,
                    })
                  }
                }
                  
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
