"use server";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export async function FavoritesButton() {
  return (
    <Button
      variant="default"
      size="icon"
      className="h-8 w-full border-0 bg-transparent hover:bg-transparent p-2"
    >
      <Heart fill="red" color="red" className="h-6 w-6" />
    </Button>
  );
}
