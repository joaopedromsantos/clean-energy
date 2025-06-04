import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from "react-hook-form";
import { z } from "zod";
import { simulationSchema } from "../schemas/simulationSchema";

export type SimulationFormData = z.infer<typeof simulationSchema>;

export interface StepPersonalInfoProps {
    register: UseFormRegister<SimulationFormData>;
    errors?: FieldErrors<SimulationFormData["personal"]>; // <-- agora pode ser undefined
    onBack: () => void;
    onNext: () => void;
}

export interface StepConsumptionProps {
    register: UseFormRegister<SimulationFormData>;
    setValue: UseFormSetValue<SimulationFormData>;
    watch: UseFormWatch<SimulationFormData>;
    errors?: FieldErrors<SimulationFormData["consumption"]>; // <-- agora pode ser undefined
    onNext: () => void;
}