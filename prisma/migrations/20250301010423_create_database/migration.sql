-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "tarefa" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "descricao" VARCHAR(50),

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);
