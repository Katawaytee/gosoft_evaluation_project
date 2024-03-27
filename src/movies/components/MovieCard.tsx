import { StarRating, Button } from "shared/components";

import { Movie, getAvgRating } from "movies/MovieModel";
import { getInitialMovies } from "data/initial";

// const movie = getInitialMovies()[0];

export const MovieCard = ({movie,movieList,setMovies}:{movie:Movie,movieList:Movie[],setMovies:Function}) => {
  const movieRating = getAvgRating(movie);

  function onClickDelete() {
    let tmpList = movieList
    console.log(tmpList)
    for (let i = 0; i < tmpList.length; i++) {
      if (tmpList[i].id == movie.id) {
        console.log(tmpList[i])
        tmpList.splice(i,1)
        break
      }
    }
    console.log(movieList.length)
    setMovies(tmpList)
  }

  return (
    <div data-testid={`movie-item-${movie.id}`}>
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: "14px" }}>
          {movie.description}
        </p>
        {/* TODO: Implement delete functionality */}
        <Button onClick={onClickDelete}>Delete</Button>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            {/* TODO: Implement rating functionality */}
            <StarRating rating={movieRating} onRate={() => console.error('rating not implemented yet')} />
          </div>
          <div
            data-testid="movie-rating"
            className="card-footer-badge float-right badge badge-primary badge-pill"
          >
            {movieRating}
          </div>
        </div>
      </div>
    </div>
  );
};
