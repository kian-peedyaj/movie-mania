import tmdb from "@/utils/tmdb";
import MovieCard from "./movie-card";

export default async function MovieList() {
  const { results } = (await tmdb.fetchTopRated()) || [];

  return (
    <div className="flex flex-wrap flex-row m-4">
      {results.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
