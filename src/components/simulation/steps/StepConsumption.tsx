import NextButton from "../../shared/NextButton";
import { SupplyTypeSelector } from "../step-components/SupplyTypeSelector";
import { StepConsumptionProps } from "@/types/step-props";
import type { SupplyType } from "@/types/supply";

const brazilianStates = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

export default function StepConsumption({ register, setValue, watch, errors, onNext }: StepConsumptionProps) {

    const supplyType = watch("consumption.supplyType");

    return (
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <h3 className="text-lg font-semibold text-dark-custom mb-4">⚡ Dados de Consumo</h3>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Valor mensal da Conta de Energia (R$)</label>
                <input
                    type="number"
                    step="any"
                    {...register("consumption.energyBillValue", { valueAsNumber: true })}
                    className={`w-full p-3 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors?.energyBillValue ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                    placeholder="R$ 0,00"
                />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:space-x-4 mb-4">
                <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Cidade</label>
                    <input
                        type="text"
                        {...register("consumption.city")}
                        className={`w-full p-3 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors?.city ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                        placeholder="Sua cidade"
                    />
                    {errors?.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>

                <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Estado</label>
                    <select
                        {...register("consumption.state")}
                        className={`w-full p-3 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors?.state ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"
                            } cursor-pointer`}
                    >
                        <option value="">Selecione</option>
                        {brazilianStates.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                    {errors?.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                </div>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2">Tipo de Fornecimento</label>
                <SupplyTypeSelector
                    selected={supplyType}
                    onChange={(type: SupplyType) => setValue("consumption.supplyType", type, { shouldValidate: true })}
                />
                {errors?.supplyType && <p className="text-red-500 text-sm mt-1">{errors.supplyType.message}</p>}
            </div>

            <div className="flex justify-end">
                <NextButton>Próximo</NextButton>
            </div>
        </form>
    );
}
