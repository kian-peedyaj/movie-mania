"use client";

import { Button } from "../ui/button";
import { deleteMovie } from "@/utils/supabase/tables/movies";
import { useCustomToast } from "@/hooks/useCustomToast";
import { Minus } from "lucide-react";
import { useRouter } from "next/navigation";

export const RemoveButton: React.FC<{ id: number }> = ({ id }) => {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const handleRemove = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
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
      className="absolute top-0 right-0 size-sm bg-background opacity-50 text-foreground hover:bg-background hover:opacity-80"
    >
      <Minus />
    </Button>
  );
};
