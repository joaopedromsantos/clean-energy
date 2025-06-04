import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-custom text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-4">
        <div className="flex items-center space-x-2">
          <div className="flex flex-row items-center justify-center gap-2.5">
                    <Image
                      src="/images/logo.svg"
                      alt="Clean Energy Logo"
                      width={42}
                      height={42}
                      priority
                    />
                    <h4 className="text-lg font-semibold">Clean Energy</h4>
                  </div>
        </div>

        <div className="text-center text-xs text-gray-400">
          © 2025 Clean Energy. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
