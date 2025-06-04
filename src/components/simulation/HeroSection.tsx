import Image from "next/image";
import PrimaryButton from "../shared/PrimaryButton";

export default function HeroSection() {
  
  return (
    <div
        id="Hero"
        className="relative h-screen flex flex-col items-center justify-center gap-24 sm:gap-36 bg-dark-custom text-white px-6 py-6 min-h-[667px] min-w-[300px]"
      >
        <div className="flex flex-row items-center justify-center gap-2.5">
          <Image
            src="/images/logo.svg"
            alt="Clean Energy Logo"
            width={56}
            height={56}
            priority
          />
          <h4 className="font-bold text-2xl">Clean Energy</h4>
        </div>

        <div
          id="texts-container"
          className="text-center flex flex-col items-center justify-center gap-8"
        >
          <h1 className="text-accent-custom text-4xl md:text-5xl font-bold">
            Economize até 25% na sua conta de energia!
          </h1>
          <p className="text-md sm:text-lg  max-w-2xl">
            Simule agora sua economia ao migrar para o mercado livre de energia
            e veja quanto você pode economizar nos próximos anos.
          </p>
        </div>

        <PrimaryButton href="#Simulation">
            Simular Economia
        </PrimaryButton>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <svg
            className="w-10 h-10 text-accent-custom animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
  );
}
