import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const response = await (
      await fetch(process.env.API_URL + "/api/session")
    ).json();

    console.log(response);
    if (!response.ok) {
      return NextResponse.redirect("http://localhost:3000/login");
    }
  } catch (error) {
    console.log(error);
    console.log("IS not ok");
    return NextResponse.redirect("http://localhost:3000/login");
  }
  console.log("ENd midlwea");
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login|signup|reset-password).*)",
  ],
};
