import { Movie } from "@/types/common";
import { createClient } from "../client";
import { RESPONSE_STATUS } from "@/constants/const";

export const insertMovie = async (movie: Movie) => {
  const supabase = createClient();
  const { status } = await supabase
    .from("movies")
    .insert({ id: movie.id, movie_details: movie });
  const result = { isSuccess: false, message: "" };
  if (status === RESPONSE_STATUS.CREATED) {
    result.isSuccess = true;
    result.message = "Movie added to collection.";
  } else if (status === RESPONSE_STATUS.CONFLICT) {
    result.isSuccess = false;
    result.message = "Movie already added.";
  } else {
    result.isSuccess = false;
    result.message = "Something went wrong!";
  }
  return result;
};

export const deleteMovie = async (id: string) => {
  const supabase = createClient();
  const { status } = await supabase.from("movies").delete().eq("id", id);
  const result = { isSuccess: false, message: "" };
  if (status === RESPONSE_STATUS.DELETED) {
    result.isSuccess = true;
    result.message = "Movie removed from collection.";
  } else {
    result.isSuccess = false;
    result.message = "Something went wrong!";
  }
  return result;
};
