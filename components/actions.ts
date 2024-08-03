"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signOut = async () => {
  await createClient().auth.signOut();
  return redirect("/login");
};
