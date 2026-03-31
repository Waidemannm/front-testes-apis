import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "https://pokemon-69v8.onrender.com";

export default function Delete() {
  const [codigo, setCodigo]     = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);
  const [success, setSuccess]   = useState(false);
  const [status, setStatus]     = useState(null);
  const [elapsed, setElapsed]   = useState(null);
  const [confirm, setConfirm]   = useState(false);

  const handleDelete = async () => {
    if (!codigo) return;
    setLoading(true);
    setError(null);
    setSuccess(false);
    setConfirm(false);
    const start = Date.now();
    try {
      const res = await fetch(`${API}/pokemon/${codigo}`, { method: "DELETE" });
      setStatus(res.status);
      setElapsed(Date.now() - start);
      if (!res.ok) throw new Error(`Pokémon não encontrado (${res.status})`);
      setSuccess(true);
      setCodigo("");
    } catch (err) {
      setError(err.message);
      setElapsed(Date.now() - start);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#e8e8f0] p-6">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-500/20 text-red-400 tracking-widest">DELETE</span>
            <code className="text-sm text-[#ffcb05] font-mono">/pokemon/{"{codigo}"}</code>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">Excluir Pokémon</h1>
          <p className="text-[#6b7090] text-sm mt-1">Remove permanentemente um pokémon do banco de dados.</p>
        </div>

        {/* Input */}
        <div className="bg-[#161628] border border-[#2a2a4a] rounded-xl p-5 mb-5">
          <label className="block text-xs font-bold uppercase tracking-widest text-[#6b7090] mb-2">Código do Pokémon</label>
          <input
            type="number"
            placeholder="Ex: 1"
            value={codigo}
            onChange={(e) => { setCodigo(e.target.value); setConfirm(false); setSuccess(false); setError(null); }}
            className="w-full bg-[#0d0d1a] border border-[#2a2a4a] focus:border-red-500/50 outline-none rounded-lg px-4 py-2.5 text-sm font-mono transition-colors"
          />
        </div>

        {/* Confirmação */}
        {!confirm ? (
          <button
            onClick={() => setConfirm(true)}
            disabled={!codigo}
            className="w-full bg-[#161628] border border-red-500/40 hover:border-red-500 hover:bg-red-500/10 disabled:opacity-50 disabled:cursor-not-allowed text-red-400 font-bold px-6 py-3 rounded-lg transition-all mb-6"
          >
            🗑️ Solicitar Exclusão
          </button>
        ) : (
          <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 mb-6">
            <p className="text-red-400 font-bold text-sm mb-3">
              ⚠️ Tem certeza? Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold py-2.5 rounded-lg transition-all"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : null}
                Confirmar Exclusão
              </button>
              <button
                onClick={() => setConfirm(false)}
                className="flex-1 bg-[#161628] border border-[#2a2a4a] hover:border-[#6b7090] text-[#6b7090] hover:text-[#e8e8f0] font-bold py-2.5 rounded-lg transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Status */}
        {status && (
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${status < 300 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
              {status}
            </span>
            <span className="text-xs text-[#6b7090] font-mono">{elapsed}ms</span>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
            ⚠️ {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 font-bold text-sm">
            ✅ Pokémon excluído com sucesso!
          </div>
        )}
      </div>
    </div>
  );
}
