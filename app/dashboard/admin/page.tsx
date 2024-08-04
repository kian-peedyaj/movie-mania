// "use client";
import { Movie } from "@/types/common";
import { getUsersFavouriteMovies } from "@/utils/supabase/tables/favourites-server";
import { getIsAdmin, getUser } from "@/utils/supabase/supa-helper-server";
import { fetchMovies } from "@/utils/supabase/tables/movies-server";
import MovieCard from "@/components/movie-card/movie-card";
import { SearchBox } from "@/components/search-box";
import MovieList from "@/components/movie-list";
import { MainTabs } from "@/components/main-tabs";

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const user = await getUser();
  return (
    <div>
      <div className="z-40">
        <div className="my-6 ml-1">
          <h1 className="text-xl">Hey! {user?.email}</h1>
        </div>
      </div>
      <MainTabs query={query} />
    </div>
  );
}
