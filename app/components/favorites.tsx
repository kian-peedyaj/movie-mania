"use server";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export async function Favorites() {
  return (
    <Button variant="outline" size="icon" className="h-8 w-8">
      <Heart fill="red" color="red" className="h-6 w-6" />
    </Button>
  );
}
