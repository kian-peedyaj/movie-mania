"use client";
import { Button } from "@/components/ui/button";
import { useCustomToast } from "@/hooks/useCustomToast";
import {
  addToFavourites,
  removeFromFavourites,
} from "@/utils/supabase/tables/favourites";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const FavoritesButton: React.FC<{
  id: number;
  customClasses?: string;
  caption?: string;
  isFavourite: boolean;
  favourites: Array<number>;
}> = ({ id, customClasses = "", caption = "", isFavourite, favourites }) => {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const toggleFavourite = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    let response = { isSuccess: false, message: "" };
    if (isFavourite) {
      response = await removeFromFavourites(id, favourites);
    } else {
      response = await addToFavourites(id, favourites);
    }
    let variant = "destructive";
    if (response?.isSuccess) variant = "default";
    showToast({
      description: response?.message,
    });
    router.refresh();
  };

  return (
    <Button onClick={toggleFavourite} className={customClasses}>
      {isFavourite ? (
        <Heart fill="red" color="red" className="h-6 w-6" />
      ) : (
        <Heart className="h-6 w-6" />
      )}{" "}
      {caption}
    </Button>
  );
};
