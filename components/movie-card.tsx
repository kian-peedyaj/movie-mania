import { Card } from "@/components/ui/card";

interface Props {
  movie: {
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    duration: string;
    genre_ids: number[];
    overview: string;
  };
}

export default function MovieCard({ movie }: Props) {
  return (
    <div className="w-1/2 xs sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2 ">
      <Card
        className="flex flex-col-reverse p-0 rounded-lg cursor-pointer opacity-80 hover:opacity-100 h-40 bg-cover bg-top border-gray-500 shadow-sky-800 shadow-2xl hover:border-white overflow-hidden"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/${movie.poster_path})`,
        }}
      >
        <div className="p-2 bg-slate-700 bg-opacity-40 text-white">
          {movie.title}
        </div>
      </Card>
    </div>
  );
}
