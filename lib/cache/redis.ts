import "server-only";

import Redis from "ioredis";

declare global {
  var powerBaseRedis: Redis | undefined;
}

const redisUrl =
  process.env.REDIS_URL ?? "redis://:dev_password@localhost:6379/0";

function createRedisClient() {
  return new Redis(redisUrl, {
    connectTimeout: 2_000,
    enableReadyCheck: true,
    lazyConnect: true,
    maxRetriesPerRequest: 1,
    retryStrategy(times) {
      return Math.min(times * 100, 1_000);
    },
  });
}

export const redis = globalThis.powerBaseRedis ?? createRedisClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.powerBaseRedis = redis;
}

export async function ensureRedisConnected() {
  if (redis.status === "end" || redis.status === "wait") {
    await redis.connect();
  }

  return redis;
}
