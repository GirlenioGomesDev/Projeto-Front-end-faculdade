
const SESSION_KEY = "petnear_session";

// Salva os dados da sessão do usuário
export function saveSession(user) {
    if (!user || !user.accessToken) {
        throw new Error("Dados de sessão inválidos.");
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

// Recupera os dados da sessão
export function getSession() {
    const session = localStorage.getItem(SESSION_KEY);

    if (!session) {
        return null;
    }

    try {
        return JSON.parse(session);
    } catch {
        clearSession();
        return null;
    }
}

// Encerra e remove a sessão
export function clearSession() {
    localStorage.removeItem(SESSION_KEY);
}
