/*
  Warnings:

  - Changed the type of `role` on the `admins` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "admins" DROP COLUMN "role",
ADD COLUMN     "role" "ROLE" NOT NULL;
