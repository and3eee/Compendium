-- AlterTable
ALTER TABLE `users` ADD COLUMN `campaignId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_campaignId_fkey` FOREIGN KEY (`campaignId`) REFERENCES `Campaign`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
