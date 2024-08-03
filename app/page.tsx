import { getIsAdmin, getUser } from "@/utils/supabase/supa-helper-server";
import { MainTabs } from "@/components/main-tabs";
import { MoviesCollection } from "@/components/tabs/movie-collection/movie-collection";

export default async function Home() {
  const user = await getUser();
  const isAdmin = await getIsAdmin();
  return (
    <div className="z-40">
      <div className="mt-6 ml-6">
        <h1 className="text-xl">Hey! {user?.email}</h1>
      </div>
      <div className="mt-6 mx-6">
        {user && isAdmin ? <MainTabs /> : <MoviesCollection />}
      </div>
    </div>
  );
}
