
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, UserPlus, LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [isCadastro, setIsCadastro] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (isCadastro) {
      // Cadastro simulado (salva no localStorage)
      if (localStorage.getItem(`user_${email}`)) {
        setErro("Este email já está cadastrado.");
        return;
      }
      localStorage.setItem(`user_${email}`, senha);
      localStorage.setItem("logged_user", email);
      navigate("/dashboard", { replace: true });
    } else {
      // Login simulado
      const savedSenha = localStorage.getItem(`user_${email}`);
      if (savedSenha && savedSenha === senha) {
        localStorage.setItem("logged_user", email);
        navigate("/dashboard", { replace: true });
      } else {
        setErro("Email ou senha inválidos.");
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <form
        className="bg-background shadow-md rounded-lg p-8 w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center mb-2">
          <Lock size={40} className="mb-1 text-primary" />
          <h1 className="text-2xl font-bold">
            {isCadastro ? "Crie sua Conta" : "Faça Login"}
          </h1>
          <span className="text-sm text-muted-foreground">
            {isCadastro
              ? "Cadastre-se para acessar seus roteiros"
              : "Acesse seus roteiros de viagem"}
          </span>
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-2 top-2.5 text-zinc-400" size={18} />
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="pl-8"
              autoFocus
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Senha</label>
          <div className="relative">
            <Lock className="absolute left-2 top-2.5 text-zinc-400" size={18} />
            <Input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="pl-8"
              required
            />
          </div>
        </div>
        {erro && (
          <div className="text-destructive text-sm mb-2">{erro}</div>
        )}
        <Button type="submit" className="w-full" variant="default">
          {isCadastro ? (
            <>
              <UserPlus size={18} /> Criar Conta
            </>
          ) : (
            <>
              <LogIn size={18} /> Entrar
            </>
          )}
        </Button>
        <div className="text-center mt-2">
          {isCadastro ? (
            <button
              type="button"
              className="text-primary underline text-sm"
              onClick={() => setIsCadastro(false)}
            >
              Já tem conta? Fazer login
            </button>
          ) : (
            <button
              type="button"
              className="text-primary underline text-sm"
              onClick={() => setIsCadastro(true)}
            >
              Ainda não tem conta? Cadastre-se
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
