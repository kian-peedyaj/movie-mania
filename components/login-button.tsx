"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export function LoginButton() {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/login") return null;

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
