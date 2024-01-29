import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.admin.upsert({
    where: { email: "admin@admin.com" },
    update: {
      password_digest: await bcrypt.hash("admin@123", 10),
    },
    create: {
      name: "admin",
      email: "admin@admin.com",
      password_digest: await bcrypt.hash("admin@123", 10),
      role: "ADMIN",
    },
  });

  console.log("Created: ", admin);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
