-- AlterTable
ALTER TABLE `gamesession` ADD COLUMN `questId` INTEGER NULL,
    ADD COLUMN `storyId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Story` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `isPrivate` BOOLEAN NOT NULL,
    `dmNotes` VARCHAR(191) NOT NULL,
    `questID` INTEGER NULL,
    `gMProfileId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Quest_questID_key`(`questID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GameSession` ADD CONSTRAINT `GameSession_questId_fkey` FOREIGN KEY (`questId`) REFERENCES `Quest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameSession` ADD CONSTRAINT `GameSession_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quest` ADD CONSTRAINT `Quest_gMProfileId_fkey` FOREIGN KEY (`gMProfileId`) REFERENCES `GMProfile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quest` ADD CONSTRAINT `Quest_questID_fkey` FOREIGN KEY (`questID`) REFERENCES `Quest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
