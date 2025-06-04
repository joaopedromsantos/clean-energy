import { z } from "zod";
import { consumptionSchema } from "./consumptionSchema";
import { personalInfoSchema } from "./personalInfoSchema";

export const simulationSchema = z.object({
    consumption: consumptionSchema,
    personal: personalInfoSchema
});
