import { createHmac, timingSafeEqual } from "crypto";

const passkeyRegistrationContextMaxAgeSeconds = 5 * 60;

type PasskeyRegistrationContext = {
  id: string;
  email: string;
  name: string;
  exp: number;
};

function getPasskeyRegistrationSecret() {
  const secret =
    process.env.BETTER_AUTH_SECRET ??
    (process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NODE_ENV !== "production"
      ? "powerbase-local-build-auth-secret-change-in-runtime"
      : undefined);

  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is required for passkey registration.");
  }

  return secret;
}

function base64UrlEncode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function base64UrlDecode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function signPayload(payload: string) {
  return createHmac("sha256", getPasskeyRegistrationSecret())
    .update(payload)
    .digest("base64url");
}

export function createPasskeyRegistrationContext({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const payload = base64UrlEncode(
    JSON.stringify({
      id: crypto.randomUUID(),
      email: email.trim().toLowerCase(),
      name: name.trim(),
      exp:
        Math.floor(Date.now() / 1000) + passkeyRegistrationContextMaxAgeSeconds,
    } satisfies PasskeyRegistrationContext),
  );
  const signature = signPayload(payload);

  return `${payload}.${signature}`;
}

export function verifyPasskeyRegistrationContext(context: string | null) {
  if (!context) {
    throw new Error("Passkey registration context is required.");
  }

  const [payload, signature] = context.split(".");

  if (!payload || !signature) {
    throw new Error("Passkey registration context is invalid.");
  }

  const expectedSignature = signPayload(payload);
  const signatureBuffer = Buffer.from(signature, "base64url");
  const expectedSignatureBuffer = Buffer.from(expectedSignature, "base64url");

  if (
    signatureBuffer.length !== expectedSignatureBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedSignatureBuffer)
  ) {
    throw new Error("Passkey registration context signature is invalid.");
  }

  const parsed = JSON.parse(
    base64UrlDecode(payload),
  ) as PasskeyRegistrationContext;

  if (
    typeof parsed.id !== "string" ||
    typeof parsed.email !== "string" ||
    typeof parsed.name !== "string" ||
    typeof parsed.exp !== "number" ||
    parsed.exp < Math.floor(Date.now() / 1000)
  ) {
    throw new Error("Passkey registration context has expired or is invalid.");
  }

  return parsed;
}
