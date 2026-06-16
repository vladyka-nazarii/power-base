import { NextResponse } from "next/server";

import { ensureRedisConnected } from "@/lib/cache/redis";

export const runtime = "nodejs";

export async function GET() {
  const startedAt = Date.now();
  const key = `powerbase:health:${crypto.randomUUID()}`;

  try {
    const redis = await ensureRedisConnected();
    const ping = await redis.ping();

    await redis.set(key, "ok", "EX", 30);
    const value = await redis.get(key);
    await redis.del(key);

    if (ping !== "PONG" || value !== "ok") {
      return NextResponse.json(
        {
          ok: false,
          error: "Redis health check returned an unexpected response.",
          latencyMs: Date.now() - startedAt,
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      ok: true,
      latencyMs: Date.now() - startedAt,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error ? error.message : "Redis health check failed.",
        latencyMs: Date.now() - startedAt,
      },
      { status: 503 },
    );
  }
}
