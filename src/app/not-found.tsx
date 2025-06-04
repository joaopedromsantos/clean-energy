import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-offwhite-custom text-white p-6">
            <div className='bg-dark-custom p-12 flex flex-col items-center justify-center rounded-xl shadow-xl'>
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-8 text-offwhite-custom">Página não encontrada</p>
                <Link
                    href="/"
                    className="px-6 py-3 rounded-lg bg-accent-custom text-dark-custom font-semibold hover:bg-soft-custom transition-colors"
                >
                    Ir para a página inicial
                </Link>
            </div>         
        </main>
    );
}
