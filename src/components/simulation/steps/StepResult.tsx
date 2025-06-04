import BackButton from "../../shared/BackButton";
import RestartButton from "../../shared/RestartButton";
import type { SimulationFormData } from "@/components/simulation/SimulationSection";

type StepResultProps = {
  data: SimulationFormData | null;
  onBack: () => void;
  onRestart: () => void;
};

export default function StepResult({ data, onBack, onRestart }: StepResultProps) {
  if (!data) {
    return <p>Dados não disponíveis para calcular a economia.</p>;
  }

  const { energyBillValue } = data.consumption;

  const yearsList = [1, 3, 5];

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark-custom mb-4">Resultado da Simulação</h2>

      {/* Economia estimada */}
      <div className="space-y-4">
        {yearsList.map((years) => {
          const semEconomia = energyBillValue * 12 * years;
          const comEconomia = semEconomia * 0.75;
          const economia = semEconomia - comEconomia;

          return (
            <div key={years} className="bg-soft-custom text-dark-custom p-4 rounded-lg">
              <p className="font-semibold text-lg">
                Economia em {years} ano{years > 1 ? 's' : ''}:
              </p>
              <p className="text-sm text-gray-600">
                Total sem economia: <span className="font-medium text-dark-custom">
                  R$ {semEconomia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Total com economia: <span className="font-medium text-dark-custom">
                  R$ {comEconomia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Economia de: <span className="font-bold text-lg underline underline-offset-1 text-accent-custom">
                  R$ {economia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mt-6 mb-6">
        <p className="text-sm text-gray-700">
          Nosso especialista entrará em contato para oferecer uma proposta personalizada.
        </p>
      </div>

      <div className="flex justify-between">
        <BackButton onBack={onBack}>Voltar</BackButton>
        <RestartButton restart={onRestart}>Refazer</RestartButton>
      </div>
    </div>
  );
}
