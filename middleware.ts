// import NextAuth from "next-auth";

// // import authConfig from "@/auth.config";
// // import { publicRoutes, authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT } from "@/routes";

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//     const { nextUrl } = req;
//     const isLoggedIn = !!req.auth;

//     const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//     const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//     const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//     if (isApiAuthRoute) {
//         return null;
//     }

//     if (isAuthRoute) {
//         if (isLoggedIn) {
//             return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//         }
//         return null;
//     }

//     if (!isLoggedIn && !isPublicRoute) {
//         // let callbackUrl = nextUrl.pathname;
//         // if (nextUrl.search) {
//         //     callbackUrl += nextUrl.search;
//         // }

//         // const encodedCallbackUrl = encodeURIComponent(callbackUrl);

//         return Response.redirect(new URL(`/auth/login`, nextUrl));
//     }

//     return null;
// });

// export const config = {
//     matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}