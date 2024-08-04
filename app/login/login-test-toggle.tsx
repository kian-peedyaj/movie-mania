"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export const LoginTestToggle = () => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const handleSwitchChange = () => {
    setIsAdminLogin((prev) => !prev);
  };
  return (
    <>
      <div className="w-full flex justify-center gap-2">
        <Switch
          id="admin-switch"
          checked={isAdminLogin}
          onCheckedChange={handleSwitchChange}
        />
        <Label htmlFor="admin-switch" className="my-auto">
          {isAdminLogin ? "Admin Login" : "User Login"}
        </Label>
      </div>
      {isAdminLogin ? (
        <Input
          name="email"
          placeholder="you@example.com"
          required
          defaultValue={"admin@mail.com"}
        />
      ) : (
        <Input
          name="email"
          placeholder="you@example.com"
          required
          defaultValue={"user@mail.com"}
        />
      )}
      <Input
        type="password"
        name="password"
        placeholder="••••••••"
        required
        defaultValue={"123456"}
      />
    </>
  );
};
