import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { getInitialMovies } from "data/initial";
import { useState } from "react";

// const movies = getInitialMovies();

export const MovieList = () => {

  const [movies,setMovies] = useState(getInitialMovies())
  
  return (
    <div className="card-deck">
      {movies.map((movie) => (
        <Card>
          {/* TODO: implement displaying movies list */}
          <MovieCard movie={movie} movieList={movies} setMovies={setMovies}/>
        </Card>
      ))}
      {/* TODO: implement a toggle - show either a button or (after clicked) the form */}
      <Card>
        <AddMovieButton />
      </Card>
      <Card>
        <AddMovieForm movieList={movies} setMovies={setMovies} />
      </Card>
    </div>
  );
};
