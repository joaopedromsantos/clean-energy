import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Enter your email"),
  password: z.string().min(1, "Enter your password"),
});

export type LoginData = z.infer<typeof loginSchema>;
