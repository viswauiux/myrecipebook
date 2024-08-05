// export { default } from "next-auth/middleware"

// export const config = { matcher: ["/dashboard"] }
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect to the sign-in page if the user is not authenticated
  },
});

// Specify the routes to protect using the matcher property
export const config = {
  matcher: ["/dashboard"], // Protect all routes under /protected
};