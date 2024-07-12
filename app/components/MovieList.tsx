import MovieCard from "./MovieCard";

export default function MovieList() {
  let movies = [
    {
      name: "Chak De India",
      banner_url:
        "https://www.tallengestore.com/cdn/shop/products/ChakDeIndia-ShahRukhKhan-BollywoodHindiMoviePoster_87fc93a2-f831-41a8-b40a-0d781ddd9f2a.jpg?v=1675251761",
      released_year: "2007",
      duration: "2h 33m",
      genres: ["Drama", "Family", "Sport"],
      about:
        "Kabir Khan, the coach of the Indian Women's National Hockey Team, dreams of making his all-girls team emerge victorious against all odds.",
    },
    {
      name: "The Godfather",
      banner_url: "https://m.media-amazon.com/images/I/81C9FT0-8CL.jpg",
      released_year: "1972",
      duration: "2h 55m",
      genres: ["Crime", "Drama"],
      about:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
  ];
  return (
    <div className="flex flex-wrap flex-row">
      {movies.map((movie) => (
        <MovieCard key={movie.name} movie={movie} />
      ))}
    </div>
  );
}
