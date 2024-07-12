"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { LockKeyhole, LockKeyholeOpenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui-expansion/spinner";

const formSchema = z.object({
  email: z.string().email({
    message: "Please provide a valid email id.",
  }),
  password: z.string().min(6, "Password must be of atleast 6 characters."),
});

export default function SignUp() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) router.push("/");
    };
    fetchUser();
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<any> {
    setIsSpinnerVisible(true);
    const supabase = createClient();
    let { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      console.error(error);
      toast({
        title: error.message,
        variant: "destructive",
      });
      setIsSpinnerVisible(false);
    } else {
      setIsLoginSuccess(true);
      setTimeout(() => {
        router.push("/");
        setIsSpinnerVisible(false);
      }, 3000);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md p-4  rounded-lg space-y-8"
        >
          {isLoginSuccess ? (
            <LockKeyholeOpenIcon className="mx-auto" size={100} />
          ) : (
            <LockKeyhole className="mx-auto" size={100} />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" size={"lg"}>
            {isSpinnerVisible && <Spinner className="text-black" />} Log In
          </Button>
        </form>
      </Form>
      <strong>
        <h1>OR</h1>
      </strong>
      <Link href="/">Click here, to continue as a Guest.</Link>
    </div>
  );
}
