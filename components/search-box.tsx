import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBox = () => {
  return (
    <div className="w-full flex-1 px-6 pt-2 pb-5">
      <form>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search movies..."
            // className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </form>
    </div>
  );
};
