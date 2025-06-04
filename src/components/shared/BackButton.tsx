import type { BackButtonProps } from "@/types/button";


export default function BackButton({ onBack, children }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="px-6 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer"
    >
      {children}
    </button>
  );
}
