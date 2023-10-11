/*
  Warnings:

  - You are about to drop the column `age` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `quest` ADD COLUMN `recLevel` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `age`,
    ADD COLUMN `fName` VARCHAR(191) NULL,
    ADD COLUMN `lName` VARCHAR(191) NULL;
