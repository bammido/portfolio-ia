-- CreateTable
CREATE TABLE "experiencias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "urlsRelacionadas" TEXT[],
    "dataInicio" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experiencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExperienciaToTecnologia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ExperienciaToTecnologia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ExperienciaToTecnologia_B_index" ON "_ExperienciaToTecnologia"("B");

-- AddForeignKey
ALTER TABLE "_ExperienciaToTecnologia" ADD CONSTRAINT "_ExperienciaToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "experiencias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExperienciaToTecnologia" ADD CONSTRAINT "_ExperienciaToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
