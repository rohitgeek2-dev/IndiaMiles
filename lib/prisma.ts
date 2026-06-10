import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = process.env.DATABASE_URL;

export const isDatabaseConfigured = !!databaseUrl;

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

export const prisma = databaseUrl
  ? globalForPrisma.prisma ??
    new PrismaClient({
      adapter: new PrismaPg(databaseUrl),
    })
  : ({} as PrismaClient);

if (databaseUrl && process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}