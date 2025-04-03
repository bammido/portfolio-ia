/*
  Warnings:

  - Added the required column `dataFim` to the `experiencias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa` to the `experiencias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "experiencias" ADD COLUMN     "dataFim" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "empresa" TEXT NOT NULL;
