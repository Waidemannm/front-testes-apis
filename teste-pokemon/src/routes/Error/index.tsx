import { Link } from "react-router-dom";

export default function Error() {
    return (
        <main className="error-page flex flex-col justify-center items-center min-h-[70vh] text-center px-4">
            
            <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
            
            <p className="text-xl font-semibold mb-2">
                Página não encontrada
            </p>

            <p className="text-gray-600 max-w-md mb-6">
                Parece que você tentou acessar uma página que não existe 
                ou foi movida. Mas calma, nada está perdido.
            </p>

            <div className="text-6xl mb-6">🚧</div>

            <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
                Voltar para a página inicial
            </Link>
        </main>
    );
}
