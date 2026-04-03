import { useState } from "react";

const API = import.meta.env.VITE_URL_API || "https://megaapp.onrender.com";

export default function ClienteDelete() {
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);

  const handleDelete = async () => {
    if (!codigo) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    const start = Date.now();

    try {
      const res = await fetch(`${API}/cliente/${codigo}`, {
        method: "DELETE",
      });

      setStatus(res.status);
      setElapsed(Date.now() - start);

      if (!res.ok) throw new Error(`Erro ${res.status}`);

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
      setElapsed(Date.now() - start);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#e8e8f0] p-6">
      <div className="max-w-xl mx-auto">

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-500/20 text-red-400 tracking-widest">
              DELETE
            </span>
            <code className="text-sm text-[#ffcb05] font-mono">
              /cliente/{"{codigo}"}
            </code>
          </div>
          <h1 className="text-2xl font-extrabold">Deletar Cliente</h1>
          <p className="text-[#6b7090] text-sm mt-1">
            Remove um cliente do sistema.
          </p>
        </div>

        <div className="bg-[#161628] border border-[#2a2a4a] rounded-xl p-5 mb-5">
          <label className="block text-xs font-bold uppercase text-[#6b7090] mb-2">
            Código do Cliente
          </label>
          <input
            type="number"
            placeholder="Ex: 1"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            className="w-full bg-[#0d0d1a] border border-[#2a2a4a] focus:border-red-500 outline-none rounded-lg px-4 py-2.5 text-sm font-mono"
          />
        </div>

        <button
          onClick={handleDelete}
          disabled={loading || !codigo}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:brightness-110 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-red-900/30 mb-6"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            "🗑"
          )}
          Deletar
        </button>

        {status && (
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              status < 300
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}>
              {status}
            </span>
            <span className="text-xs text-[#6b7090] font-mono">
              {elapsed}ms
            </span>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm mb-4">
            ⚠️ {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="text-green-400 font-bold text-sm">
              ✅ Cliente deletado com sucesso!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}