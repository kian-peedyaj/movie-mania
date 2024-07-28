"use client";

import { Button } from "../ui/button";
import { Movie } from "@/types/common";
import { deleteMovie, insertMovie } from "@/utils/supabase/tables/movies";
import { useCustomToast } from "@/hooks/useCustomToast";
import { Minus } from "lucide-react";
import { useRouter } from "next/navigation";

export const RemoveButton: React.FC<{ id: string }> = ({ id }) => {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const handleRemove = async () => {
    const { isSuccess, message } = await deleteMovie(id);
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
      onClick={handleRemove}
      className="absolute top-0 right-0 size-sm bg-foreground opacity-50 hover:opacity-100"
    >
      <Minus />
    </Button>
  );
};
