import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { PowerOffIcon } from "lucide-react";
import supaHelper from "@/utils/supabase/supabase-helper";

export function LogoutButton() {
  const signOut = async () => {
    "use server";
    await new supaHelper().signOut();
    return redirect("/login");
  };

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
