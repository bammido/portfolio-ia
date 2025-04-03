-- CreateTable
CREATE TABLE "contatos" (
    "id" SERIAL NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "linkedin" TEXT,
    "github" TEXT,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);
