/*
  Warnings:

  - Added the required column `calories` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture` to the `Recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipes" ADD COLUMN     "calories" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT NOT NULL;
