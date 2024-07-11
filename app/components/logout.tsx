"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { createClient } from "@/utils/supabase/client";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export async function LogOut() {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: error.message,
      });
    } else {
      router.push("/login");
    }
  };

  return (
    <Button
      variant="default"
      size="icon"
      className="h-8 w-full p-2s"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
