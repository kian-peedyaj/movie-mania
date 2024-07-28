// pages/api/login.ts
import { createClient } from "@/utils/supabase/server";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { payload_fields } = await request.json();

  // if (error) {
  //   return NextResponse.json({ error: error.message }, { status: 401 });
  // }

  // const response = NextResponse.json({ message: "Login successful" });
  // response.cookies.set(
  //   `name`,
  //   value,
  //   {
  //     path: "/",
  //     httpOnly: true,
  //     secure: false,
  //     sameSite: "Strict",
  //   }
  // );

  // return response;
}
