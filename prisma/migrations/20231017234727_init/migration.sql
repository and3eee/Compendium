-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'GM', 'ADMIN');

-- CreateEnum
CREATE TYPE "SessionState" AS ENUM ('PLANNED', 'ACTIVE', 'COMPLETE');

-- CreateEnum
CREATE TYPE "HostType" AS ENUM ('REMOTE', 'HYBRID', 'INPERSON');

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "refresh_token_expires_in" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "age" INTEGER,
    "fName" TEXT,
    "lName" TEXT,
    "bio" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "ROLE" NOT NULL DEFAULT 'USER',
    "gMProfileId" TEXT,
    "playerProfileId" TEXT,
    "infoSessionId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GMProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "HostType" NOT NULL,

    CONSTRAINT "GMProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "campaignId" INTEGER,

    CONSTRAINT "PlayerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerCharacter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "playerProfileId" TEXT NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 5,
    "gold" INTEGER NOT NULL DEFAULT 200,
    "classedEntityId" TEXT NOT NULL,
    "backStory" TEXT,
    "personality" TEXT,
    "race" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PlayerCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassedEntity" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ClassedEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassConfigs" (
    "id" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "Level" INTEGER NOT NULL DEFAULT 5,
    "classedEntityId" TEXT NOT NULL,

    CONSTRAINT "ClassConfigs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameSession" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "gMProfileId" TEXT NOT NULL,
    "description" TEXT,
    "notes" TEXT,
    "state" "SessionState" NOT NULL DEFAULT 'PLANNED',
    "campaignId" INTEGER NOT NULL,
    "private" BOOLEAN NOT NULL DEFAULT false,
    "gameSessionId" TEXT,
    "questId" INTEGER,
    "storyId" INTEGER,
    "maxPlayers" INTEGER NOT NULL DEFAULT 4,
    "platform" TEXT,
    "prework" TEXT,

    CONSTRAINT "GameSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfoSession" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "gMProfileId" TEXT NOT NULL,
    "description" TEXT,
    "private" BOOLEAN NOT NULL DEFAULT false,
    "campaignId" INTEGER,

    CONSTRAINT "InfoSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL,
    "dmNotes" TEXT NOT NULL,
    "recLevel" INTEGER,
    "questID" INTEGER,
    "gMProfileId" TEXT NOT NULL,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameSessionToPlayerCharacter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CampaignToGMProfile" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GMProfile_userId_key" ON "GMProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerProfile_userId_key" ON "PlayerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCharacter_classedEntityId_key" ON "PlayerCharacter"("classedEntityId");

-- CreateIndex
CREATE UNIQUE INDEX "GameSession_gameSessionId_key" ON "GameSession"("gameSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_name_key" ON "Campaign"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Quest_questID_key" ON "Quest"("questID");

-- CreateIndex
CREATE UNIQUE INDEX "_GameSessionToPlayerCharacter_AB_unique" ON "_GameSessionToPlayerCharacter"("A", "B");

-- CreateIndex
CREATE INDEX "_GameSessionToPlayerCharacter_B_index" ON "_GameSessionToPlayerCharacter"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CampaignToGMProfile_AB_unique" ON "_CampaignToGMProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_CampaignToGMProfile_B_index" ON "_CampaignToGMProfile"("B");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_infoSessionId_fkey" FOREIGN KEY ("infoSessionId") REFERENCES "InfoSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GMProfile" ADD CONSTRAINT "GMProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerProfile" ADD CONSTRAINT "PlayerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerProfile" ADD CONSTRAINT "PlayerProfile_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_playerProfileId_fkey" FOREIGN KEY ("playerProfileId") REFERENCES "PlayerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_classedEntityId_fkey" FOREIGN KEY ("classedEntityId") REFERENCES "ClassedEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassConfigs" ADD CONSTRAINT "ClassConfigs_classedEntityId_fkey" FOREIGN KEY ("classedEntityId") REFERENCES "ClassedEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassConfigs" ADD CONSTRAINT "ClassConfigs_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_gMProfileId_fkey" FOREIGN KEY ("gMProfileId") REFERENCES "GMProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_gameSessionId_fkey" FOREIGN KEY ("gameSessionId") REFERENCES "GameSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfoSession" ADD CONSTRAINT "InfoSession_gMProfileId_fkey" FOREIGN KEY ("gMProfileId") REFERENCES "GMProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfoSession" ADD CONSTRAINT "InfoSession_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_gMProfileId_fkey" FOREIGN KEY ("gMProfileId") REFERENCES "GMProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_questID_fkey" FOREIGN KEY ("questID") REFERENCES "Quest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameSessionToPlayerCharacter" ADD CONSTRAINT "_GameSessionToPlayerCharacter_A_fkey" FOREIGN KEY ("A") REFERENCES "GameSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameSessionToPlayerCharacter" ADD CONSTRAINT "_GameSessionToPlayerCharacter_B_fkey" FOREIGN KEY ("B") REFERENCES "PlayerCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignToGMProfile" ADD CONSTRAINT "_CampaignToGMProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignToGMProfile" ADD CONSTRAINT "_CampaignToGMProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "GMProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
