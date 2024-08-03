import { Button } from "@/components/ui/button";
import { PowerOffIcon } from "lucide-react";
import { signOut } from "./actions";

export function LogoutButton() {
  return (
    <form action={signOut}>
      <Button
        variant="default"
        size="icon"
        className="h-8 w-full p-2 bg-transparent hover:bg-transparent"
      >
        <PowerOffIcon className="text-foreground" />
      </Button>
    </form>
  );
}
