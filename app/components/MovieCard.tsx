import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  movie: {
    name: string;
    banner_url: string;
    released_year: string;
    duration: string;
    genres: string[];
    about: string;
  };
}

export default function MovieCard({ movie }: Props) {
  return (
    <Card className="shadow-md m-3 p-0 bg-slate-800 rounded-lg xs:w-full sm:w-1/4 cursor-pointer opacity-80 hover:opacity-100">
      <Image
        className="rounded-lg xs:h-40 object-cover "
        src={movie.banner_url}
        alt=""
        height={500}
        width={500}
      />
      <CardContent className="p-2">
        <CardTitle className="py-2">{movie.name}</CardTitle>
        <CardDescription className="py-2">
          {movie.released_year} {movie.duration}
        </CardDescription>
        <CardDescription>{movie.about}</CardDescription>
      </CardContent>
    </Card>
  );
}
