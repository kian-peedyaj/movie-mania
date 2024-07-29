"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type SearchBoxProps = {
  onChange: (e: ChangeEvent) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = (props: SearchBoxProps) => {
  const { onChange } = props;
  return (
    <div className="w-full flex-1 pt-2 pb-5">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
