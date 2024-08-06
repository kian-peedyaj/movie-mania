"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";

type SearchBoxProps = {
  tmdb?: boolean;
  placeholder?: string;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ tmdb, placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState<string>(
    searchParams.get("query")?.toString() || ""
  );

  function setPathparams(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handleOnChange = (value: string) => {
    setValue(value);
    if (!tmdb || !value) setPathparams(value);
  };

  const handleOnSearchClick = () => {
    setPathparams(value);
  };

  return (
    <div className="w-full flex pt-2 pb-5 gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder || "Search"}
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          onChange={(e) => handleOnChange(e.target.value)}
          value={value}
        />
      </div>
      {tmdb && (
        <Button size="sm" onClick={handleOnSearchClick}>
          Search
        </Button>
      )}
    </div>
  );
};
