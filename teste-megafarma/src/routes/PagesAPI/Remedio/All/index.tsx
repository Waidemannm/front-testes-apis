import { useState } from "react";

const API = import.meta.env.VITE_URL_API || "https://megaapp.onrender.com";

type Remedio = {
  codigo: number;
  nome: string;
  preco: number;
  dataDeFabricacao: string;
  dataDeValidade: string;
};

export default function RemedioAll() {
  const [remedios, setRemedios] = useState<Remedio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number | null>(null);

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    setRemedios([]);
    const start = Date.now();
    try {
      const res = await fetch(`${API}/remedio`);
      setStatus(res.status);
      setElapsed(Date.now() - start);
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      const data = await res.json();
      setRemedios(data);
    } catch (err: any) {
      setError(err.message);
      setElapsed(Date.now() - start);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#e8e8f0] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400 tracking-widest">GET</span>
            <code className="text-sm text-[#ffcb05] font-mono">/remedio</code>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">Listar Todos os Remédios</h1>
          <p className="text-[#6b7090] text-sm mt-1">Retorna todos os remédios cadastrados no banco.</p>
        </div>

        <button
          onClick={fetchAll}
          disabled={loading}
          className="mb-6 flex items-center gap-2 bg-gradient-to-r from-[#e3350d] to-[#b02a09] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-red-900/30"
        >
          {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "▶"}
          Enviar Requisição
        </button>

        {status && (
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${status < 300 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{status}</span>
            <span className="text-xs text-[#6b7090] font-mono">{elapsed}ms</span>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm mb-4">⚠️ {error}</div>
        )}

        {remedios.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {remedios.map((c) => (
              <div key={c.codigo} className="bg-[#161628] border border-[#2a2a4a] rounded-xl p-4 hover:border-[#3d7dca] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-[#6b7090]">#{c.codigo}</span>
                </div>
                <h2 className="text-lg font-bold mb-2">{c.nome}</h2>
                <div className="grid grid-cols-1 gap-1 text-xs text-[#6b7090]">
                  <span>Nome: <span className="text-[#e8e8f0]">{c.nome}</span></span>
                  <span>Preço: <span className="text-[#e8e8f0]">{c.preco}</span></span>
                  <span>Fabricação: <span className="text-[#e8e8f0]">{c.dataDeFabricacao}</span></span>
                  <span>Validade: <span className="text-[#e8e8f0]">{c.dataDeValidade}</span></span>
                </div>
              </div>
            ))}
          </div>
        )}

        {remedios.length > 0 && (
          <details className="mt-6">
            <summary className="text-xs text-[#6b7090] cursor-pointer hover:text-[#e8e8f0] transition-colors">Ver JSON bruto</summary>
            <pre className="mt-3 bg-[#161628] border border-[#2a2a4a] rounded-xl p-4 text-xs text-green-400 font-mono overflow-auto max-h-60">
              {JSON.stringify(remedios, null, 2)}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
