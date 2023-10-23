-- AlterTable
ALTER TABLE "Field" ALTER COLUMN "type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Stat" ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "type" DROP NOT NULL;
