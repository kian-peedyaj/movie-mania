import { getUser } from "@/utils/supabase/supa-helper-server";
import { fetchMovies } from "@/utils/supabase/tables/movies-server";
import MovieList from "@/components/movie-list";
import { Suspense } from "react";
import { Spinner } from "@/components/ui-expansion/spinner";

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const movies = await fetchMovies();
  const user = await getUser();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <div className="z-40 mb-5">
        <div className="mt-6 ml-6">
          <h1 className="text-xl">Hey! {user?.email}</h1>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <MovieList
          title="Explore the world of movies!"
          movies={filteredMovies}
          showFavouriteButton={!!user}
        />
      </Suspense>
    </div>
  );
}
