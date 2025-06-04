import { z } from "zod";

export const consumptionSchema = z.object({
  energyBillValue: z
    .number({
      invalid_type_error: "O valor da conta de energia deve ser um número",
      required_error: "O valor da conta de energia é obrigatório",
    })
    .min(0, "O valor da conta de energia deve ser no mínimo 0"),
  city: z
    .string({
      required_error: "A cidade é obrigatória",
    })
    .min(1, "A cidade não pode estar vazia"),
  state: z
    .string({
      required_error: "O estado é obrigatório",
    })
    .min(1, "O estado não pode estar vazio"),
  supplyType: z.enum(["monophase", "biphase", "triphase"], {
    required_error: "O tipo de fornecimento é obrigatório",
  }),
});
