import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getIsAdmin } from "@/utils/supabase/supa-helper";
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
  return (
    <html lang="en" className={isAdmin ? "light" : "dark"}>
      <body className={inter.className}>
        <main>
          <div className="min-h-screen w-full">
            <MainHeader />
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
