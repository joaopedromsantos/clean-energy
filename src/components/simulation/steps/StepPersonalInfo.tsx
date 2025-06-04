import NextButton from "@/components/shared/NextButton";
import BackButton from "../../shared/BackButton";

export default function StepPersonalInfo({ register, errors, onBack, onNext }: any) {

    return (
        <form onSubmit={onNext}>
            <h2 className="text-lg font-semibold text-dark-custom mb-4">👤 Informações Pessoais</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Nome Completo</label>
                <input
                    type="text"
                    {...register("personal.fullName")}
                    className={`w-full p-3 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors?.fullName ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                    placeholder="Seu Nome Completo"
                />
                {errors?.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    {...register("personal.email")}
                    className={`w-full p-3 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors?.email ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                    placeholder="seuemail@exemplo.com"
                />
                {errors?.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Telefone</label>
                <input
                    type="tel"
                    {...register("personal.phone")}
                    className={`w-full p-3 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors?.phone ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                    placeholder="(00) 00000-0000"
                />
                {errors?.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 mb-1">CPF</label>
                <input
                    type="text"
                    {...register("personal.cpf")}
                    className={`w-full p-3 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors?.cpf ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                    placeholder="000.000.000-00"
                />
                {errors?.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>}
            </div>

            <div className="flex justify-between">
                <BackButton onBack={onBack}>Voltar</BackButton>

                <NextButton>Calcular</NextButton>
            </div>
        </form>
    );
}
