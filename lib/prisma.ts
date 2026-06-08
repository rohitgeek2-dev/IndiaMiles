import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = process.env.DATABASE_URL;


if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to initialize Prisma.");
}

export const isDatabaseConfigured = true;

const adapter = new PrismaPg(databaseUrl);

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });


if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

