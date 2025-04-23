
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, UserPlus, LogIn } from "lucide-react";

// Nova cor do campo de "esqueci a senha"
const forgotColor = "#9b87f5";

export default function Login() {
  const navigate = useNavigate();
  const [isCadastro, setIsCadastro] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [showRecuperar, setShowRecuperar] = useState(false);

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
        {/* Esqueci a senha */}
        {!isCadastro && (
          <div className="flex justify-end my-0.5">
            <button
              type="button"
              onClick={() => setShowRecuperar((v) => !v)}
              style={{
                color: forgotColor,
                background: "none",
                border: "none",
                padding: 0,
                fontSize: "0.96rem",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "2.5px",
                fontWeight: 500,
              }}
              tabIndex={0}
            >
              Esqueci a senha
            </button>
          </div>
        )}
        {showRecuperar && (
          <div className="mb-2 rounded border border-[#D6BCFA] bg-white text-sm px-3 py-2 text-[#333] shadow">
            <b className="block mb-1" style={{ color: forgotColor }}>Recuperar senha:</b>
            <div>
              Digite seu email acima e clique em "Recuperar". Você receberá um email fictício com instruções ou, caso seja cadastro local, redefina sua senha cadastrando uma nova conta com mesmo email.
            </div>
            <Button
              type="button"
              style={{
                background: forgotColor,
                color: "#fff",
                marginTop: "10px",
                minWidth: 110,
              }}
              size="sm"
              onClick={() => {
                if (!email) {
                  setErro("Digite seu email para recuperar sua senha.");
                } else {
                  setErro("");
                  alert("Em um sistema real, você receberia um email para redefinir sua senha. Aqui, basta cadastrar novamente esse usuário.");
                  setShowRecuperar(false);
                }
              }}
            >
              Recuperar
            </Button>
          </div>
        )}
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

