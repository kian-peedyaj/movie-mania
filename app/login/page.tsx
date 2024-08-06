import Link from "next/link";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { revalidatePath } from "next/cache";
import { LockKeyhole } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui-expansion/spinner";
import { createClient } from "@/utils/supabase/server";
import { getIsAdmin, getUser } from "@/utils/supabase/supa-helper-server";
import { LoginTestToggle } from "./login-test-toggle";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const user = await getUser();
  if (user) {
    if (await getIsAdmin()) {
      redirect("/admin/dashboard");
    } else {
      redirect("/dashboard");
    }
  }

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
      return redirect("/login?message=Could not authenticate user");
    }
    const isAdmin = await getIsAdmin();
    if (isAdmin) {
      revalidatePath("/admin/dashboard", "layout");
      redirect("/admin/dashboard");
    } else {
      revalidatePath("/dashboard", "layout");
      redirect("/dashboard");
    }
  };

  // const signUp = async (formData: FormData) => {
  //   "use server";

  //   const origin = headers().get("origin");
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = createClient();

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   });

  //   if (error) {
  //     return redirect("/login?message=Could not authenticate user");
  //   }

  //   return redirect("/login?message=Check email to continue sign in process");
  // };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="w-full max-w-md p-4  rounded-lg space-y-8">
        <LockKeyhole className="mx-auto" size={100} />
        <LoginTestToggle />
        <SubmitButton
          formAction={signIn}
          className="w-full"
          pendingText={<Spinner className="text-background" />}
        >
          Sign In
        </SubmitButton>
        {/* <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton> */}
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
      <strong>
        <h1>OR</h1>
      </strong>
      <Link href="/dashboard">Click here, to continue as a Guest.</Link>
    </div>
  );
}
