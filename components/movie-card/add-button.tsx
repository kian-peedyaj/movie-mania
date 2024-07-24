"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Movie } from "@/interfaces/common";
import { createClient } from "@/utils/supabase/client";

export const AddButton: React.FC<{ movie: Movie }> = ({ movie }) => {
  const handleAdd = async () => {
    await createClient()
      .from("movies")
      .insert([{ id: movie.id, movie }]);
  };
  return (
    // <form>
    <Button
      // formAction={test}
      className="absolute top-0 right-0 size-sm bg-foreground opacity-50 hover:opacity-100"
    >
      <Plus />
    </Button>
    // </form>
  );
};
// export default AddButton;
