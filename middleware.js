// import { NextResponse } from "next/server";

import { withAuth } from "next-auth/middleware";

// export function middleware(request) {
//   con;

//   return NextResponse.redirect(new URL("/login", request.url));
// }

//

// matcher
// where the middleware should run

export const config = {
  matcher: ["/account/:path*", "/cabins/:path*"],
};

// protects the routes specified in the matcher by redirecting unauthenticated users to the login page
export default withAuth({
  pages: {
    signIn: "/login",
  },
});
