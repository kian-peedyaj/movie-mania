import Link from "next/link";
import { Search, Clapperboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FavoritesButton } from "@/components/favorites-button";
import { LogoutButton } from "@/components/logout-button";
import { LoginButton } from "@/components/login-button";
import MovieList from "@/components/movie-list";
import supabaseHelper from "@/utils/supabase/supabase-helper";

export default async function Dashboard() {
  const user = await new supabaseHelper(true).getUser();

  return (
    <div className="min-h-screen w-full">
      <header className="flex flex-col sticky top-0 z-50 bg-muted  shadow-md">
        <div className="flex items-center px-6 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Clapperboard className="h-6 w-6" />
            <span className="">Movie Mania</span>
          </Link>
          <div className="ml-auto flex">
            {user && (
              <>
                <FavoritesButton />
                <LogoutButton />
              </>
            )}
            {!user && <LoginButton />}
          </div>
        </div>
        <div className="w-full flex-1 px-6 pt-2 pb-5">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search movies..."
                // className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
      </header>
      <main className="z-40">
        <MovieList />
      </main>
    </div>
  );
}
