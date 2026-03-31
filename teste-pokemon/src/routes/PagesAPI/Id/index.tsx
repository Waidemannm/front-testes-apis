import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "https://pokemon-69v8.onrender.com";

export default function Id() {
  const [codigo, setCodigo] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [elapsed, setElapsed] = useState(null);

  const fetchById = async () => {
    if (!codigo) return;
    setLoading(true);
    setError(null);
    setPokemon(null);
    const start = Date.now();
    try {
      const res = await fetch(`${API}/pokemon/${codigo}`);
      setStatus(res.status);
      setElapsed(Date.now() - start);
      if (!res.ok) throw new Error(`Pokémon não encontrado (${res.status})`);
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
      setElapsed(Date.now() - start);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#e8e8f0] p-6">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400 tracking-widest">GET</span>
            <code className="text-sm text-[#ffcb05] font-mono">/pokemon/{"{codigo}"}</code>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">Buscar por Código</h1>
          <p className="text-[#6b7090] text-sm mt-1">Retorna um pokémon específico pelo seu código.</p>
        </div>

        {/* Input */}
        <div className="bg-[#161628] border border-[#2a2a4a] rounded-xl p-5 mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest text-[#6b7090] mb-2">Código</label>
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Ex: 1"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchById()}
              className="flex-1 bg-[#0d0d1a] border border-[#2a2a4a] focus:border-[#3d7dca] outline-none rounded-lg px-4 py-2.5 text-sm font-mono transition-colors"
            />
            <button
              onClick={fetchById}
              disabled={loading || !codigo}
              className="flex items-center gap-2 bg-gradient-to-r from-[#e3350d] to-[#b02a09] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-red-900/30"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : "▶"}
              Buscar
            </button>
          </div>
        </div>

        {/* Status */}
        {status && (
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${status < 300 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
              {status}
            </span>
            <span className="text-xs text-[#6b7090] font-mono">{elapsed}ms</span>
          </div>
        )}

        {/* Erro */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* Card resultado */}
        {pokemon && (
          <div className="bg-[#161628] border border-[#3d7dca]/50 rounded-xl p-5">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono text-[#6b7090]">#{pokemon.codigo}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#ffcb05]/10 text-[#ffcb05]">{pokemon.categoria}</span>
            </div>
            <h2 className="text-2xl font-extrabold mb-4">{pokemon.nome}</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-[#0d0d1a] rounded-lg p-3">
                <div className="text-xs text-[#6b7090] mb-1">Altura</div>
                <div className="font-bold">{pokemon.altura}m</div>
              </div>
              <div className="bg-[#0d0d1a] rounded-lg p-3">
                <div className="text-xs text-[#6b7090] mb-1">Peso</div>
                <div className="font-bold">{pokemon.peso}kg</div>
              </div>
              <div className="bg-[#0d0d1a] rounded-lg p-3 col-span-2">
                <div className="text-xs text-[#6b7090] mb-1">Data da Captura</div>
                <div className="font-bold">{pokemon.dataDaCaptura}</div>
              </div>
            </div>
            <pre className="mt-4 bg-[#0d0d1a] rounded-lg p-3 text-xs text-green-400 font-mono overflow-auto">
              {JSON.stringify(pokemon, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
