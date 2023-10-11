/*
  Warnings:

  - You are about to drop the column `worldAnvilId` on the `playercharacter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[classedEntityId]` on the table `PlayerCharacter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `classedEntityId` to the `PlayerCharacter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `PlayerCharacter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gamesession` ADD COLUMN `platform` VARCHAR(191) NULL,
    ADD COLUMN `prework` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `playercharacter` DROP COLUMN `worldAnvilId`,
    ADD COLUMN `backStory` VARCHAR(191) NULL,
    ADD COLUMN `classedEntityId` VARCHAR(191) NOT NULL,
    ADD COLUMN `gold` INTEGER NOT NULL DEFAULT 200,
    ADD COLUMN `personality` VARCHAR(191) NULL,
    ADD COLUMN `race` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `infoSessionId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ClassedEntity` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClassConfigs` (
    `id` VARCHAR(191) NOT NULL,
    `classId` VARCHAR(191) NOT NULL,
    `Level` INTEGER NOT NULL DEFAULT 5,
    `classedEntityId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfoSession` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `duration` INTEGER NOT NULL,
    `gMProfileId` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `private` BOOLEAN NOT NULL DEFAULT false,
    `campaignId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `PlayerCharacter_classedEntityId_key` ON `PlayerCharacter`(`classedEntityId`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_infoSessionId_fkey` FOREIGN KEY (`infoSessionId`) REFERENCES `InfoSession`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlayerCharacter` ADD CONSTRAINT `PlayerCharacter_classedEntityId_fkey` FOREIGN KEY (`classedEntityId`) REFERENCES `ClassedEntity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassConfigs` ADD CONSTRAINT `ClassConfigs_classedEntityId_fkey` FOREIGN KEY (`classedEntityId`) REFERENCES `ClassedEntity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassConfigs` ADD CONSTRAINT `ClassConfigs_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InfoSession` ADD CONSTRAINT `InfoSession_gMProfileId_fkey` FOREIGN KEY (`gMProfileId`) REFERENCES `GMProfile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InfoSession` ADD CONSTRAINT `InfoSession_campaignId_fkey` FOREIGN KEY (`campaignId`) REFERENCES `Campaign`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
