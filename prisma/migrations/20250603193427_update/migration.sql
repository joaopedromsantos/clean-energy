/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Leads` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Leads_cpf_key" ON "Leads"("cpf");
