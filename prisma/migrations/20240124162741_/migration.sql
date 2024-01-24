-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'EDITOR');

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_digest" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "terms" BOOLEAN,
    "course" TEXT,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sections" JSONB[],
    "acordions" JSONB[],
    "titleSections" TEXT,
    "videoId" TEXT,
    "coordinatorName" TEXT,
    "coordinatorPhotoUrl" TEXT,
    "titleAcordions" TEXT,
    "bannerUrl" TEXT,
    "type" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "images" (
    "url" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,

    CONSTRAINT "images_pkey" PRIMARY KEY ("url")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "leads_email_key" ON "leads"("email");

-- CreateIndex
CREATE UNIQUE INDEX "courses_slug_key" ON "courses"("slug");
