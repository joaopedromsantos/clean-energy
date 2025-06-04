'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { simulationSchema } from "@/schemas/simulationSchema";
import type { z } from "zod";

import BreadCrumb from "./step-components/BreadCrumb";
import StepConsumption from "./steps/StepConsumption";
import StepPersonalInfo from "./steps/StepPersonalInfo";
import StepResult from "./steps/StepResult";

import axios from "axios";

export type SimulationFormData = z.infer<typeof simulationSchema>;

export default function SimulationSection() {
    const [step, setStep] = useState(1);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<SimulationFormData>({
        resolver: zodResolver(simulationSchema),
        defaultValues: {
            consumption: {
                energyBillValue: 0,
                city: "",
                state: "",
                supplyType: undefined,
            },
            personal: {
                fullName: "",
                email: "",
                phone: "",
                cpf: "",
            }
        }
    });

    function nextStep() {
        setStep((prev) => Math.min(prev + 1, 3));
    }

    function prevStep() {
        setStep((prev) => Math.max(prev - 1, 1));
    }

    function restart() {
        setStep(1);
    }

    const [formData, setFormData] = useState<SimulationFormData | null>(null);

    async function onSubmit(data: SimulationFormData) {

        try {
            await axios.post('/api/leads', {
                energyBillValue: data.consumption.energyBillValue,
                city: data.consumption.city,
                state: data.consumption.state,
                supplyType: data.consumption.supplyType,
                fullName: data.personal.fullName,
                email: data.personal.email,
                phone: data.personal.phone,
                cpf: data.personal.cpf.replace(/\D/g, '')
            });

            setFormData(data);
            nextStep();

        } catch {}
    }

    return (
        <section id="Simulation" className="flex flex-col items-center justify-center gap-20 bg-offwhite-custom text-dark-custom px-6 py-12 md:h-screen">
            <div className="min-h-screen bg-offwhite-custom flex items-center justify-center w-full">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">

                    <h2 className="text-2xl font-bold text-dark-custom mb-2 text-center">
                        Simulador de Economia de Energia
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 text-center">
                        Descubra quanto você pode economizar ao contratar a Clean Energy
                    </p>

                    <BreadCrumb step={step} />

                    {step === 1 && (
                        <StepConsumption
                            register={register}
                            setValue={setValue}
                            watch={watch}
                            errors={errors.consumption}
                            onNext={nextStep}
                        />
                    )}

                    {step === 2 && (
                        <StepPersonalInfo
                            register={register}
                            errors={errors.personal}
                            onBack={prevStep}
                            onNext={handleSubmit(onSubmit)}
                        />
                    )}

                    {step === 3 && (
                        <StepResult data={formData} onBack={prevStep} onRestart={restart} />
                    )}
                </div>
            </div>
        </section>
    );
}
