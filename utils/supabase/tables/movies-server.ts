import { Movie } from "@/types/common";
import { createClient } from "../server";
import { RESPONSE_STATUS } from "@/constants/const";

export const fetchMovies = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("movies").select();
  if (error) {
    return [];
  }
  return data;
};
