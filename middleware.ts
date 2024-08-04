import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { getIsAdmin } from "./utils/supabase/supa-helper-server";

export async function middleware(request: NextRequest) {
  const updatedRequest = await updateSession(request);
  const url = request.nextUrl.clone();
  const adminUser = await getIsAdmin();
  const adminURL = url.pathname.includes("/admin");
  if (adminUser !== adminURL) {
    if (adminUser) {
      url.pathname = "/dashboard/admin";
    } else {
      url.pathname = "/dashboard";
    }
    return NextResponse.redirect(url);
  }
  return updatedRequest;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
