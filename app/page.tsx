import Link from "next/link";
import { Search, Clapperboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/server";
import { FavoritesButton } from "@/components/favorites-button";
import { LogoutButton } from "@/components/logout-button";
import { LoginButton } from "@/components/login-button";
import MovieList from "@/components/movie-list";

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid min-h-screen w-full">
      <div className="border-r bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex items-center border-b px-4 py-3 lg:h-[60px] lg:px-6">
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
          <div className="flex-1">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search movies..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
            </header>
            <main>
              <MovieList />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
