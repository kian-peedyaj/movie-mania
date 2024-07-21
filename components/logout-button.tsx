import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { PowerOffIcon } from "lucide-react";
import { redirect } from "next/navigation";

export function LogoutButton() {
  const signOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <form action={signOut}>
      <Button
        variant="default"
        size="icon"
        className="h-8 w-full p-2 bg-transparent hover:bg-transparent"
      >
        <PowerOffIcon color="white" />
      </Button>
    </form>
  );
}
