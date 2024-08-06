"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";

type SearchBoxProps = {
  onSearchClick?: (query: string) => void;
  tmdb?: boolean;
  placeholder?: string;
};

export const SearchBox: React.FC<SearchBoxProps> = ({
  tmdb,
  onSearchClick,
  placeholder,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState<string>(
    searchParams.get("query")?.toString() || ""
  );

  function handleSearch(term: string) {
    setValue(term);
    if (tmdb) return;
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full flex-1 pt-2 pb-5">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder || "What's on your mind?"}
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          onChange={(e) => handleSearch(e.target.value)}
          value={value}
        />
        {tmdb && (
          <Button size="sm" onClick={() => onSearchClick?.(value)}>
            Search
          </Button>
        )}
      </div>
    </div>
  );
};
