import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "./db";
import User from "../models/User";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email });
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isValid) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role || "USER",
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: any) {
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
