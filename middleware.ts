import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/"],
    debug: false,
    ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api/uploadthing"]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};