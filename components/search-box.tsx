"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// type SearchBoxProps = {
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// };

// export const SearchBox: React.FC<SearchBoxProps> = (props: SearchBoxProps) => {
export const SearchBox = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
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
          placeholder="Search"
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
};
