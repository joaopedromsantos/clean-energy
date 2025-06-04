import { RotateCcw } from 'lucide-react';
import type { RestartButtonProps } from "@/types/button";

export default function RestartButton({ restart, children }: RestartButtonProps) {
    return (
        <button
            type="button"
            onClick={restart}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-accent-custom text-white hover:bg-emerald-500 cursor-pointer"
        >
            <RotateCcw size={20} />
            {children}
        </button>
    );
}
