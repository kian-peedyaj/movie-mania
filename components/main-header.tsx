import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { MainFavoritesButton } from "@/components/main-favorites-button";
import { LogoutButton } from "@/components/logout-button";
import { LoginButton } from "@/components/login-button";
import { getIsAdmin, getUser } from "@/utils/supabase/supa-helper-server";

export default async function MainHeader() {
  const user = await getUser();
  const isAdmin = await getIsAdmin();
  return (
    <header className="flex flex-col sticky top-0 z-50 bg-muted  shadow-md">
      <div className="flex items-center px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Clapperboard className="h-6 w-6" />
          <span className="">Movie Mania</span>
        </Link>
        <div className="ml-auto flex">
          {user && (
            <>
              {!isAdmin && <MainFavoritesButton />}
              <LogoutButton />
            </>
          )}
          {!user && <LoginButton />}
        </div>
      </div>
      {/* <div className="w-full flex-1 px-6 pt-2 pb-5">    
        </div> */}
    </header>
  );
}
