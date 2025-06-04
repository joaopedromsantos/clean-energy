import type { NextButtonProps } from "@/types/button";

export default function NextButton({ children }: NextButtonProps) {
  return (
    <button
      type="submit"
      className="px-6 py-2 rounded-lg bg-accent-custom text-white hover:bg-emerald-500 cursor-pointer"
    >
      {children}
    </button>
  );
}
