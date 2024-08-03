import { Movie } from "@/types/common";
import { createClient } from "../server";
import { RESPONSE_STATUS } from "@/constants/const";

export const fetchMovies = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("movies").select();
  if (error) {
    return [];
  }
  const results = data?.map((movie) => {
    return movie.movie_details || {};
  });
  return results;
};
