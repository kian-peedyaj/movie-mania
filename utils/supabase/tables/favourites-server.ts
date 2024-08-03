import { createClient } from "../server";
import { getUser } from "../supa-helper-server";

export const getUsersFavouriteMovies = async () => {
  const supabase = createClient();
  const user = await getUser();
  if (!user) return false;
  const { data: usersData }: any = await supabase
    .from("user_profiles")
    .select("*")
    .eq("email", user?.email);
  const favouriteMovies = usersData?.[0]?.favourite_movies || [];
  return favouriteMovies;
};
