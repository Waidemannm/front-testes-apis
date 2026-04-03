import { useState } from "react";

const API = import.meta.env.VITE_URL_API || "https://megaapp.onrender.com";

const INITIAL = { nome: "", cpf: "", email: "", dataDeNascimento: "" };

export default function ClienteSave() {
  const [form, setForm] = useState(INITIAL);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    const start = Date.now();
    const formatDate = (date: string) => {
      if (!date) return "";
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    };
    try {
      const body = {
        nome: form.nome,
        cpf: form.cpf,
        email: form.email,
        dataDeNascimento: formatDate(form.dataDeNascimento),
      };
      
      const res = await fetch(`${API}/cliente`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(body);
      setStatus(res.status);
      setElapsed(Date.now() - start);
      const text = await res.text();
      let data: any = text;
      try { data = JSON.parse(text); } catch {}
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      setResponse(data);
      setForm(INITIAL);
    } catch (err: any) {
      setError(err.message);
      setElapsed(Date.now() - start);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "nome",             label: "Nome",               placeholder: "João Silva",        type: "text" },
    { name: "cpf",              label: "CPF",                placeholder: "000.000.000-00",    type: "text" },
    { name: "email",            label: "Email",              placeholder: "joao@email.com",    type: "email" },
    { name: "dataDeNascimento", label: "Data de Nascimento", placeholder: "",                  type: "date", full: true },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#e8e8f0] p-6">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 tracking-widest">POST</span>
            <code className="text-sm text-[#ffcb05] font-mono">/cliente</code>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">Cadastrar Cliente</h1>
          <p className="text-[#6b7090] text-sm mt-1">Adiciona um novo cliente ao banco de dados.</p>
        </div>

        <div className="bg-[#161628] border border-[#2a2a4a] rounded-xl p-5 mb-5">
          <div className="grid grid-cols-2 gap-4">
            {fields.map((f) => (
              <div key={f.name} className={(f as any).full ? "col-span-2" : ""}>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#6b7090] mb-2">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  value={(form as any)[f.name]}
                  onChange={handleChange}
                  className="w-full bg-[#0d0d1a] border border-[#2a2a4a] focus:border-[#3d7dca] outline-none rounded-lg px-4 py-2.5 text-sm transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#e3350d] to-[#b02a09] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg shadow-red-900/30 mb-6"
        >
          {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "▶"}
          Cadastrar
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

        {response && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="text-green-400 font-bold text-sm mb-2">✅ Cliente cadastrado com sucesso!</div>
            <pre className="text-xs text-green-400 font-mono overflow-auto">{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
