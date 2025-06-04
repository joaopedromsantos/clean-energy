import type { SupplyType, SupplyTypeSelectorProps } from "@/types/supply";

const SUPPLY_TYPES: { label: string; value: SupplyType }[] = [
  { label: "Monofásico", value: "monophase" },
  { label: "Bifásico", value: "biphase" },
  { label: "Trifásico", value: "triphase" },
];

export function SupplyTypeSelector({ selected, onChange }: SupplyTypeSelectorProps) {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:space-x-3">
        {SUPPLY_TYPES.map((type) => {
          const isSelected = selected === type.value;
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => onChange(type.value)}
              aria-pressed={isSelected}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg shadow-sm cursor-pointer transition ${
                isSelected
                  ? "bg-accent-custom text-white border-accent-custom hover:bg-emerald-600"
                  : "text-gray-600 border-gray-300 hover:bg-soft-custom"
              }`}
            >
              <span role="img" aria-label="energia">⚡</span>
              <span>{type.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
