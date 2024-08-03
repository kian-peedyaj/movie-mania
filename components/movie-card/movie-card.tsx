"use client";

import { Card } from "@/components/ui/card";
import { AddButton } from "./add-button";
import { Movie } from "@/types/common";
import { RemoveButton } from "./remove-button";
import { useRouter } from "next/navigation";
import { FavoritesButton } from "./favorites-button";

const MovieCard: React.FC<{
  movie: Movie;
  showAddButton?: boolean;
  showRemoveButton?: boolean;
  showFavouriteButton?: boolean;
  isFavourite?: boolean;
  favourites?: Array<number>;
  // getFavourites: Function;
}> = ({
  movie,
  showAddButton = false,
  showRemoveButton = false,
  showFavouriteButton = false,
  isFavourite = false,
  favourites = [],
  // getFavourites = () => {},
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    const movieData = encodeURIComponent(JSON.stringify(movie));
    router.push(`/movie/${movie.id}?data=${movieData}&btn=collection`);
  };
  const buttonClasses =
    "absolute top-0 right-0 size-sm bg-background opacity-50 text-foreground hover:bg-background hover:opacity-80";
  return (
    <div className="w-1/2 xs sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2 ">
      <Card
        className="flex flex-col-reverse p-0 rounded-lg cursor-pointer opacity-80 hover:opacity-100 h-40 bg-cover bg-top border-gray-500 shadow-sky-800 shadow-2xl hover:border-white overflow-hidden relative"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/${movie.poster_path})`,
        }}
        onClick={handleCardClick}
      >
        {showAddButton && (
          <AddButton movie={movie} customClasses={buttonClasses} />
        )}
        {showRemoveButton && <RemoveButton id={movie.id} />}
        {showFavouriteButton && (
          <FavoritesButton
            id={movie.id}
            customClasses={buttonClasses}
            isFavourite={isFavourite}
            favourites={favourites}
            // getFavourites={getFavourites}
          />
        )}
        <div className="p-2 bg-slate-700 bg-opacity-40 text-white">
          {movie.title}
        </div>
      </Card>
    </div>
  );
};
export default MovieCard;
