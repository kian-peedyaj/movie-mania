"use client";
import { Button } from "@/components/ui/button";
import { useCustomToast } from "@/hooks/useCustomToast";
import {
  addToFavourites,
  removeFromFavourites,
} from "@/utils/supabase/tables/favourites";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Spinner } from "../ui-expansion/spinner";

export const FavoritesButton: React.FC<{
  id: number;
  customClasses?: string;
  caption?: string;
  isFavourite: boolean;
  favourites: Array<number>;
}> = ({ id, customClasses = "", caption = "", isFavourite, favourites }) => {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const toggleFavourite = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsPending(true);
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
    setIsPending(false);
  };

  return (
    <Button onClick={toggleFavourite} className={customClasses}>
      {isPending ? (
        <Spinner size={"small"} />
      ) : (
        <>
          {isFavourite ? (
            <Heart fill="red" color="red" className="h-6 w-6" />
          ) : (
            <Heart className="h-6 w-6" />
          )}{" "}
          {caption}
        </>
      )}
    </Button>
  );
};
