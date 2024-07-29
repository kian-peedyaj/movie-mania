import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TmdbMovies } from "./tabs/tmdb-movies/tmdb-movies";
import { MoviesCollection } from "./tabs/movie-collection/movie-collection";

export const MainTabs = () => {
  return (
    <Tabs defaultValue="movie-collection" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="movie-collection">Collection</TabsTrigger>
        <TabsTrigger value="tmdb-movies">Explore & add</TabsTrigger>
      </TabsList>
      <TabsContent value="movie-collection">
        <MoviesCollection />
      </TabsContent>
      <TabsContent value="tmdb-movies">
        <TmdbMovies />
      </TabsContent>
    </Tabs>
  );
};
