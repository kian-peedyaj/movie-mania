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
import { LockKeyholeOpenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

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
    } else {
      router.push("/");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md p-4  rounded-lg space-y-8"
        >
          <LockKeyholeOpenIcon className="mx-auto" />

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
            Log In
          </Button>
        </form>
      </Form>
      OR
      <Link href="/">Click here, To continue as a Guest.</Link>
    </div>
  );
}
