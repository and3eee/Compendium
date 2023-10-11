/*
  Warnings:

  - You are about to drop the column `gameSessionId` on the `playercharacter` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `playercharacter` DROP FOREIGN KEY `PlayerCharacter_gameSessionId_fkey`;

-- AlterTable
ALTER TABLE `playercharacter` DROP COLUMN `gameSessionId`,
    ADD COLUMN `experience` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `level` INTEGER NOT NULL DEFAULT 5,
    ADD COLUMN `worldAnvilId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `_GameSessionToPlayerCharacter` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GameSessionToPlayerCharacter_AB_unique`(`A`, `B`),
    INDEX `_GameSessionToPlayerCharacter_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GameSessionToPlayerCharacter` ADD CONSTRAINT `_GameSessionToPlayerCharacter_A_fkey` FOREIGN KEY (`A`) REFERENCES `GameSession`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GameSessionToPlayerCharacter` ADD CONSTRAINT `_GameSessionToPlayerCharacter_B_fkey` FOREIGN KEY (`B`) REFERENCES `PlayerCharacter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
