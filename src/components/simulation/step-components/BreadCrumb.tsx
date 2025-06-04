interface BreadCrumbProps {
    step: number;
}

export default function BreadCrumb({ step }: BreadCrumbProps) {
    const steps = ["Consumo", "Dados", "Resultado"];

    return (
        <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
                {steps.map((label, index) => {
                    const current = index + 1;
                    const isActive = current === step;
                    return (
                        <div key={label} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                                ${isActive ? "bg-accent-custom text-white" : "bg-gray-200 text-gray-500"}`}>
                                {current}
                            </div>
                            <span className={`ml-2 text-sm ${isActive ? "font-semibold text-dark-custom" : "text-gray-500"} hidden sm:block`}>
                                {label}
                            </span>
                            {current < steps.length && (
                                <div className="w-6 h-px bg-gray-300 mx-2"></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
