import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { passkey } from "@better-auth/passkey";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { anonymous } from "better-auth/plugins";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";
import { sendEmail } from "@/lib/email";
import { mergeFavoriteUsers } from "@/lib/favorite-merging";
import { verifyPasskeyRegistrationContext } from "@/lib/passkey-registration-context";

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
const passkeyOrigin = authBaseURL ?? null;
const passkeyRpID = authBaseURL ? new URL(authBaseURL).hostname : undefined;
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
    passkey({
      rpID: passkeyRpID,
      rpName: "PowerBase",
      origin: passkeyOrigin,
      registration: {
        requireSession: false,
        resolveUser: ({ context }) => {
          const registrationContext = verifyPasskeyRegistrationContext(
            context ?? null,
          );

          return {
            id: registrationContext.id,
            name: registrationContext.email,
            displayName: registrationContext.name,
          };
        },
        afterVerification: async ({ context }) => {
          if (!context) {
            return;
          }

          const registrationContext = verifyPasskeyRegistrationContext(
            context,
          );
          const [existingUser] = await db
            .select({ id: schema.user.id })
            .from(schema.user)
            .where(eq(schema.user.email, registrationContext.email))
            .limit(1);

          if (existingUser) {
            throw new Error("A user with this email already exists.");
          }

          await db.insert(schema.user).values({
            id: registrationContext.id,
            name: registrationContext.name,
            email: registrationContext.email,
            emailVerified: false,
          });
        },
      },
    }),
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
