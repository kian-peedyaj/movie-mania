import Link from "next/link";
import { Search, Clapperboard, LogInIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Favorites } from "./favorites";
import { LogOut } from "./logout";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { LogIn } from "./login";

export async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid min-h-screen w-full">
      <div className="border-r bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Clapperboard className="h-6 w-6" />
              <span className="">Movie Mania</span>
            </Link>
            <div className="ml-auto flex gap-4">
              {user && (
                <>
                  <Favorites />
                  <LogOut />
                </>
              )}
              {!user && <LogIn />}
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
          </div>
        </div>
      </div>
    </div>
  );
}
