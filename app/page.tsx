import { getUser } from "@/utils/supabase/supa-helper-server";
import { MainTabs } from "@/components/main-tabs";

export default async function Home() {
  const user = await getUser();
  return (
    <div className="z-40">
      <div className="mt-6 ml-6">
        <h1 className="text-xl">Hey! {user?.email}</h1>
      </div>
      <div className="mt-6 mx-6">
        <MainTabs />
      </div>
    </div>
  );
}
