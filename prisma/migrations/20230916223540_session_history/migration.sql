/*
  Warnings:

  - A unique constraint covering the columns `[gameSessionId]` on the table `GameSession` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `gamesession` ADD COLUMN `gameSessionId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `GameSession_gameSessionId_key` ON `GameSession`(`gameSessionId`);

-- AddForeignKey
ALTER TABLE `GameSession` ADD CONSTRAINT `GameSession_gameSessionId_fkey` FOREIGN KEY (`gameSessionId`) REFERENCES `GameSession`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
