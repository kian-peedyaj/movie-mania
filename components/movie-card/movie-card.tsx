import { Card } from "@/components/ui/card";
import supaHelper from "@/utils/supabase/supabase-helper";
import { AddButton } from "./add-button";
import { Movie } from "@/interfaces/common";

const MovieCard: React.FC<{ movie: Movie }> = async ({ movie }) => {
  const user: any = await new supaHelper(true).getUser();
  const { is_admin = false } = user;

  return (
    <div className="w-1/2 xs sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2 ">
      <Card
        className="flex flex-col-reverse p-0 rounded-lg cursor-pointer opacity-80 hover:opacity-100 h-40 bg-cover bg-top border-gray-500 shadow-sky-800 shadow-2xl hover:border-white overflow-hidden relative"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/${movie.poster_path})`,
        }}
      >
        {is_admin && <AddButton movie={movie} />}
        <div className="p-2 bg-slate-700 bg-opacity-40 text-white">
          {movie.title}
        </div>
      </Card>
    </div>
  );
};
export default MovieCard;
