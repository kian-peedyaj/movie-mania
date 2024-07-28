export type Movie = {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  duration: string;
  genre_ids: number[];
  overview: string;
};

export type Movies = Array<Movie>;
