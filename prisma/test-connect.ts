import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  // Try a simple query to validate connectivity
  const res = await prisma.$queryRaw`SELECT 1 as ok`;
  console.log("query result:", res);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error("connect test failed:", e);
  try {
    await prisma.$disconnect();
  } catch {}
  process.exit(1);
});

