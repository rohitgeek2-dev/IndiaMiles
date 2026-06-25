import { readFileSync } from "fs";

// Manually parse .env to get DATABASE_URL
const envContent = readFileSync(".env", "utf-8");
const match = envContent.match(/^DATABASE_URL="([^"]+)"$/m);
const DATABASE_URL = match ? match[1] : "";
console.log("DATABASE_URL extracted from .env:", !!DATABASE_URL);

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg(DATABASE_URL),
});

async function main() {
  await prisma.$connect();
  console.log("Connected successfully");

  const stateCount = await prisma.state.count();
  const cityCount = await prisma.city.count();
  const placeCount = await prisma.place.count();
  const categoryCount = await prisma.category.count();
  const placeCategoryCount = await prisma.placeCategory.count();
  console.log("Counts:", { stateCount, cityCount, placeCount, categoryCount, placeCategoryCount });

  const activeStateCount = await prisma.state.count({ where: { isActive: true } });
  const activeCityCount = await prisma.city.count({ where: { isActive: true } });
  const activePlaceCount = await prisma.place.count({ where: { isActive: true } });
  const activeCategoryCount = await prisma.category.count({ where: { isActive: true } });
  console.log("Active counts:", { activeStateCount, activeCityCount, activePlaceCount, activeCategoryCount });

  const states = await prisma.state.findMany({ where: { isActive: true }, orderBy: { name: "asc" } });
  console.log("Active states:", states.length);
  for (const s of states) {
    console.log(`  State: ${s.name} (slug: ${s.slug}, active: ${s.isActive})`);
  }

  const categories = await prisma.category.findMany({ where: { isActive: true }, orderBy: { name: "asc" } });
  console.log("Active categories:", categories.length);
  for (const c of categories) {
    console.log(`  Category: ${c.name} (slug: ${c.slug}, active: ${c.isActive})`);
  }

  const places = await prisma.place.findMany({
    where: { isActive: true },
    include: {
      city: { include: { state: true } },
      categories: { include: { category: true } },
    },
    orderBy: { name: "asc" },
  });
  console.log("Active places (with includes):", places.length);
  for (const p of places) {
    console.log(`  Place: ${p.name} | city: ${p.city.name} | state: ${p.city.state.name} | categories: ${p.categories.map((pc) => pc.category.name).join(", ")}`);
  }

  await prisma.$disconnect();
  console.log("\n--- DIAGNOSTIC COMPLETE ---");
}

main().catch(async (e) => {
  console.error("DIAGNOSTIC FAILED:", e.message);
  console.error(e.stack);
  try {
    await prisma.$disconnect();
  } catch {}
  process.exit(1);
});