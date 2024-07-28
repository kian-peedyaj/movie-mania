import { Movie } from "@/types/common";
import { insertMovie } from "@/utils/supabase/tables/movies";

export const actionInsertMovie = async (movie: Movie) => {
  return await insertMovie(movie);
};
