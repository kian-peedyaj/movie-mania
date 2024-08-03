import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getIsAdmin, getUser } from "@/utils/supabase/supa-helper-server";
import MainHeader from "@/components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Mania",
  description: "Collection of movies.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdmin = await getIsAdmin();
  const user = await getUser();
  return (
    <html lang="en" className={isAdmin ? "light" : "dark"}>
      <body className={inter.className}>
        <main>
          <div className="min-h-screen w-full">
            <MainHeader />
            <div className="z-40">
              <div className="mt-6 ml-6">
                <h1 className="text-xl">Hey! {user?.email}</h1>
              </div>
            </div>
            <div className="mt-6 mx-6">{children}</div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
