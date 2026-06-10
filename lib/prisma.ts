import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = process.env.DATABASE_URL;

export const isDatabaseConfigured = !!databaseUrl;

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

let prisma: PrismaClient | null = null;

if (databaseUrl) {
  const adapter = new PrismaPg(databaseUrl);

  prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
      adapter,
    });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }
}

export { prisma };