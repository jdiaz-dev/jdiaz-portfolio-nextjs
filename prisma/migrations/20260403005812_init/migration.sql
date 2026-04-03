-- CreateTable
CREATE TABLE "work_stream_audits" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "locale" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_stream_audits_pkey" PRIMARY KEY ("id")
);
