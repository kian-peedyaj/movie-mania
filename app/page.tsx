import * as React from "react";
import { Dashboard } from "./components/Dashboard";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("@@@ user", user);

  return <Dashboard user={user} />;
}
