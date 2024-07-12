"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { createClient } from "@/utils/supabase/client";
import { PowerOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  const handleLogout = () => {
    const supabase = createClient();
    supabase.auth.signOut().then(({ error }) => {
      if (error) {
        toast({
          title: error.message,
        });
      } else {
        router.push("/login");
      }
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      className="h-8 w-full p-2 bg-transparent hover:bg-transparent"
      onClick={handleLogout}
    >
      <PowerOffIcon color="white" />
    </Button>
  );
}
