import { getUser } from "@/utils/supabase/supa-helper-server";
import { MainTabs } from "@/components/main-tabs";

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const user = await getUser();
  return (
    <div>
      <div className="z-40">
        <div className="my-6 ml-1">
          <h1 className="text-xl font-light">Hey! {user?.email}</h1>
        </div>
      </div>
      <MainTabs query={query} />
    </div>
  );
}
