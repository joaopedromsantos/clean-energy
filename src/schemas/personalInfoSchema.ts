import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z
    .string({
      required_error: "O nome completo é obrigatório",
    })
    .min(1, "O nome completo não pode estar vazio"),
  email: z
    .string({
      required_error: "O e-mail é obrigatório",
    })
    .email("Endereço de e-mail inválido"),
  phone: z
    .string({
      required_error: "O número de telefone é obrigatório",
    })
    .min(10, "O número de telefone é muito curto"),
  cpf: z
    .string({
      required_error: "O CPF é obrigatório",
    })
    .regex(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/, "CPF inválido"),
});