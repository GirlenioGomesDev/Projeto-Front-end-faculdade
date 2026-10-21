import { useState } from "react";
import { login } from "../../services/authService.js";
import { useNavigate, useLocation } from "react-router-dom";
import "./AuthLogin.css";

function AuthLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const destino = location.state?.from?.pathname || "/agendamento";


    async function handleLogin(event) {
        event.preventDefault();

        setLoading(true);
        setError("");

        try {
            await login(username, password);
            navigate(destino, { replace: true });
        } catch (error) {
            setError("Não foi possível entrar. Verifique suas credenciais ou conexão.");
        } finally {
            setLoading(false);
        }
    }


    return (
        <section className="auth-login" aria-labelledby="auth-login-title">
            <h2 id="auth-login-title">Entrar no PetNear</h2>
            <p className="auth-login__description">
                Entre para continuar seu agendamento.
            </p>

            <form onSubmit={handleLogin}>
                <label htmlFor="username">Usuário</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite seu usuário"
                    required
                />

                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                />

                <button
                    type="submit"
                    className="auth-login__submit"
                    disabled={loading}
                >
                    {loading ? "Entrando..." : "Entrar"}
                </button>
            </form>
            {error && <p className="auth-login__error" role="alert">{error}</p>}
        </section>
    );

}

export default AuthLogin;