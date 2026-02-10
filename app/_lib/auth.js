import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // !! is a double NOT operator to convert a value to a boolean
      return !!auth?.user;
    },
    // user, account
    async signIn({ user, account, profile }) {
      try {
        // check if guest already exists
        const guest = await getGuest(user.email);

        if (!guest)
          await createGuest({
            fullName: user.name,
            email: user.email,
          });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      if (!session.user?.email) return session;

      const guest = await getGuest(session.user.email);

      if (guest) {
        session.user.guestId = guest.id;
      }
      return session;
    },
  },
};

export default authConfig;
