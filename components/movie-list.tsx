import MovieCard from "./movie-card/movie-card";
import { Movie, Movies } from "@/types/common";

const MovieList: React.FC<{
  movies: Movies;
  showAddButton?: boolean;
  showRemoveButton?: boolean;
}> = async ({ movies, showAddButton = false, showRemoveButton = false }) => {
  return (
    <div className="flex flex-wrap flex-row m-4">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          showAddButton={showAddButton}
          showRemoveButton={showRemoveButton}
        />
      ))}
    </div>
  );
};

export default MovieList;
