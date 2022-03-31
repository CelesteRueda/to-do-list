import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth({
  secret: process.env.AUTH0_SECRET,
});
