"use server";
import { Home } from "lucide-react";
import Link from "next/link";

export async function MainFavoritesButton() {
  return (
    <Link href="/dashboard" className="my-auto mx-3">
      <Home className="h-6 w-6" />
    </Link>
  );
}
