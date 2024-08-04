"use client";
import { Heart, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainFavoritesButton() {
  const pathname = usePathname();
  const isOnFavouritesPage = pathname === "/dashboard/favourites";
  const hrefLink = isOnFavouritesPage ? "/dashboard" : "/dashboard/favourites";

  return (
    <Link href={hrefLink} className="my-auto mx-3">
      {isOnFavouritesPage ? (
        <Home className="h-6 w-6" />
      ) : (
        <Heart fill="red" color="red" className="h-6 w-6" />
      )}
    </Link>
  );
}
