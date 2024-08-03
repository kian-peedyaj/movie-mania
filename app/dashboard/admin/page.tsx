// "use client";
import { Movie } from "@/types/common";
import { getUsersFavouriteMovies } from "@/utils/supabase/tables/favourites-server";
import { getIsAdmin } from "@/utils/supabase/supa-helper-server";
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
  return <MainTabs query={query} />;
}
