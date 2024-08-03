import { createClient } from "./client";

export const getUser = async () => {
  const supabase = createClient();
  const userResponse = await supabase.auth.getUser();
  return userResponse?.data?.user;
};

export const getIsAdmin = async () => {
  const supabase = createClient();
  const user = await getUser();
  if (!user) return false;
  const { data: usersData }: any = await supabase
    .from("user_profiles")
    .select("*")
    .eq("email", user?.email);
  const is_admin = usersData?.[0]?.is_admin || false;
  return is_admin;
};
