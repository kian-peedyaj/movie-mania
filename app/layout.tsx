import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getIsAdmin } from "@/utils/supabase/supa-helper-server";
import MainHeader from "@/components/main-header";
import { Suspense } from "react";
import Loading from "./loading";

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
  return (
    <html lang="en" className={isAdmin ? "light" : "dark"}>
      <body className={inter.className}>
        <main>
          <div className="min-h-screen w-full">
            <MainHeader />
            {/*suspense not working*/}
            <Suspense fallback={<Loading />}>
              <div className="mt-6 mx-6">{children}</div>
            </Suspense>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
