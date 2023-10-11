/*
  Warnings:

  - You are about to drop the column `campaignId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_campaignId_fkey`;

-- AlterTable
ALTER TABLE `playerprofile` ADD COLUMN `campaignId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `campaignId`;

-- AddForeignKey
ALTER TABLE `PlayerProfile` ADD CONSTRAINT `PlayerProfile_campaignId_fkey` FOREIGN KEY (`campaignId`) REFERENCES `Campaign`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
