"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LoginButton() {
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
