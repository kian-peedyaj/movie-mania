"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Movie } from "@/types/common";
import { insertMovie } from "@/utils/supabase/tables/movies";
import { useCustomToast } from "@/hooks/useCustomToast";
import { useRouter } from "next/navigation";

export const AddButton: React.FC<{ movie: Movie }> = ({ movie }) => {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const handleAdd = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const { isSuccess, message } = await insertMovie(movie);
    if (isSuccess) {
      router.refresh();
      showToast({
        // title: "Success",
        description: message,
      });
    } else {
      showToast({
        // title: "Failure",
        description: message,
        variant: "destructive",
      });
    }
  };
  return (
    <Button
      onClick={handleAdd}
      className="absolute top-0 right-0 size-sm bg-background opacity-50 text-foreground hover:bg-background hover:opacity-80"
    >
      <Plus />
    </Button>
  );
};
