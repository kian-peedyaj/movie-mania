"use client";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export async function LogIn() {
  const router = useRouter();

  return (
    <Button
      variant="default"
      size="icon"
      className="h-8 w-full p-2"
      onClick={() => router.push("/login")}
    >
      Login
    </Button>
  );
}
