import { RESPONSE_STATUS } from "@/constants/const";
import { createClient } from "../client";
import { getUser } from "../supa-helper";

export const addToFavourites = async (
  id: number,
  favouriteMovies: Array<number>
) => {
  const user = await getUser();
  const supabase = createClient();
  const { status } = await supabase
    .from("user_profiles")
    .update({ favourite_movies: [...favouriteMovies, id] })
    .eq("email", user?.email);
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
  const user = await getUser();
  const supabase = createClient();
  const { status } = await supabase
    .from("user_profiles")
    .update({ favourite_movies: favouriteMovies?.filter((mId) => mId != id) })
    .eq("email", user?.email);
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
