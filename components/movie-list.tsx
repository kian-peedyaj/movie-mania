import { MovieCard } from "./movie-card/movie-card";
import { Movie, Movies } from "@/types/common";
import { SearchBox } from "./search-box";
import { getUsersFavouriteMovies } from "@/utils/supabase/tables/favourites-server";

const MovieList: React.FC<{
  title?: string;
  movies: Movies;
  showAddButton?: boolean;
  showRemoveButton?: boolean;
  showFavouriteButton?: boolean;
  isFavourite?: boolean;
  hideSearch?: boolean;
}> = async ({
  title = "",
  movies,
  showAddButton = false,
  showRemoveButton = false,
  showFavouriteButton = false,
  hideSearch = false,
}) => {
  const favouriteMovies = (await getUsersFavouriteMovies()) || [];

  return (
    <div className="mt-4">
      <h1 className="text-2xl mx-6 mb-4 font-extrabold text-stone-600 dark:text-slate-50">
        {title}
      </h1>
      {!hideSearch && (
        <div className="mx-6 my-4">
          <SearchBox />
        </div>
      )}
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
