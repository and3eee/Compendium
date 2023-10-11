/*
  Warnings:

  - The primary key for the `campaign` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `campaign` table. The data in that column could be lost. The data in that column will be cast from `VarChar(8)` to `Int`.
  - You are about to drop the column `campaignId` on the `gmprofile` table. All the data in the column will be lost.
  - Made the column `campaignId` on table `gamesession` required. This step will fail if there are existing NULL values in that column.
  - Made the column `campaignId` on table `playercharacter` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `gamesession` DROP FOREIGN KEY `GameSession_campaignId_fkey`;

-- DropForeignKey
ALTER TABLE `gmprofile` DROP FOREIGN KEY `GMProfile_campaignId_fkey`;

-- DropForeignKey
ALTER TABLE `playercharacter` DROP FOREIGN KEY `PlayerCharacter_campaignId_fkey`;

-- AlterTable
ALTER TABLE `campaign` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `gamesession` ADD COLUMN `private` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `campaignId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gmprofile` DROP COLUMN `campaignId`;

-- AlterTable
ALTER TABLE `playercharacter` MODIFY `campaignId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_CampaignToGMProfile` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CampaignToGMProfile_AB_unique`(`A`, `B`),
    INDEX `_CampaignToGMProfile_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlayerCharacter` ADD CONSTRAINT `PlayerCharacter_campaignId_fkey` FOREIGN KEY (`campaignId`) REFERENCES `Campaign`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameSession` ADD CONSTRAINT `GameSession_campaignId_fkey` FOREIGN KEY (`campaignId`) REFERENCES `Campaign`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CampaignToGMProfile` ADD CONSTRAINT `_CampaignToGMProfile_A_fkey` FOREIGN KEY (`A`) REFERENCES `Campaign`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CampaignToGMProfile` ADD CONSTRAINT `_CampaignToGMProfile_B_fkey` FOREIGN KEY (`B`) REFERENCES `GMProfile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
