import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { anonymous } from "better-auth/plugins";

import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";
import { sendEmail } from "@/lib/email";
import { mergeFavoriteUsers } from "@/lib/favorite-merging";

const isProductionBuild = process.env.NEXT_PHASE === "phase-production-build";
const authBaseURL =
  process.env.BETTER_AUTH_URL ??
  process.env.APP_BASE_URL ??
  (isProductionBuild || process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : undefined);
const authSecret =
  process.env.BETTER_AUTH_SECRET ??
  (isProductionBuild || process.env.NODE_ENV !== "production"
    ? "powerbase-local-build-auth-secret-change-in-runtime"
    : undefined);
const socialProviders = {
  ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
      }
    : {}),
  ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET
    ? {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
      }
    : {}),
};

export const auth = betterAuth({
  appName: "PowerBase",
  baseURL: authBaseURL,
  secret: authSecret,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ url, user }) => {
      void sendEmail({
        to: user.email,
        subject: "Verify your PowerBase email",
        text: `Verify your PowerBase account by opening this link: ${url}`,
      }).catch((error: unknown) => {
        console.error("Failed to send verification email", error);
      });
    },
  },
  socialProviders,
  plugins: [
    anonymous({
      generateName: () => "Guest",
      generateRandomEmail: () =>
        `guest-${crypto.randomUUID()}@anonymous.powerbase.local`,
      onLinkAccount: async ({ anonymousUser, newUser }) => {
        await mergeFavoriteUsers({
          anonymousUserId: anonymousUser.user.id,
          newUserId: newUser.user.id,
        });
      },
    }),
    nextCookies(),
  ],
});
