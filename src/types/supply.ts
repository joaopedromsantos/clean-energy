export type SupplyType = "monophase" | "biphase" | "triphase";

export interface SupplyTypeSelectorProps {
  selected?: SupplyType;
  onChange: (type: SupplyType) => void;
}
