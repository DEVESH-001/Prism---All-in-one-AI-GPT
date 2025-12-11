import { PrismaClient } from "@prisma/client";

const db =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Enable query logging, useful for debugging
  });

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = db; // prevent multiple instances in development
}

export default db;
