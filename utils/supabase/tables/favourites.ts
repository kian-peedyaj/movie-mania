import { RESPONSE_STATUS } from "@/constants/const";
import { createClient } from "../client";

export const addToFavourites = async (
  id: number,
  favouriteMovies: Array<number>
) => {
  const supabase = createClient();
  const { status } = await supabase
    .from("user_profiles")
    .update({ favourite_movies: [...favouriteMovies, id] });
  const result = { isSuccess: false, message: "" };
  if (status === RESPONSE_STATUS.UPDATED) {
    result.isSuccess = true;
    result.message = "Movie added to favourites.";
  } else {
    result.isSuccess = false;
    result.message = "Something went wrong!";
  }
  return result;
};

export const removeFromFavourites = async (
  id: number,
  favouriteMovies: Array<number> = []
) => {
  const supabase = createClient();
  const { status } = await supabase
    .from("user_profiles")
    .update({ favourite_movies: favouriteMovies?.filter((mId) => mId != id) });
  const result = { isSuccess: false, message: "" };
  if (status === RESPONSE_STATUS.UPDATED) {
    result.isSuccess = true;
    result.message = "Movie removed from favourites.";
  } else {
    result.isSuccess = false;
    result.message = "Something went wrong!";
  }
  return result;
};
