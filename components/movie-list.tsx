import MovieCard from "./movie-card/movie-card";
import { Movie, Movies } from "@/types/common";
import { SearchBox } from "./search-box";
import { getUsersFavouriteMovies } from "@/utils/supabase/tables/favourites-server";

const MovieList: React.FC<{
  movies: Movies;
  showAddButton?: boolean;
  showRemoveButton?: boolean;
  showFavouriteButton?: boolean;
  isFavourite?: boolean;
}> = async ({
  movies,
  showAddButton = false,
  showRemoveButton = false,
  showFavouriteButton = false,
}) => {
  const favouriteMovies = (await getUsersFavouriteMovies()) || [];
  return (
    <div>
      <SearchBox />
      <div className="flex flex-wrap flex-row m-4">
        {movies?.map((movie: Movie) => {
          const isFavourite = favouriteMovies?.includes(movie?.id) || false;
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              showAddButton={showAddButton}
              showRemoveButton={showRemoveButton}
              showFavouriteButton={showFavouriteButton}
              isFavourite={isFavourite}
              favourites={favouriteMovies}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MovieList;
