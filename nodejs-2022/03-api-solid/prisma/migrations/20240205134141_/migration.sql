/*
  Warnings:

  - You are about to drop the column `descritpion` on the `gyms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "gyms" DROP COLUMN "descritpion",
ADD COLUMN     "description" TEXT;
