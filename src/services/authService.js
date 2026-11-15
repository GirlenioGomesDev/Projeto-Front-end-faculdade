
import { apiRequest } from "./apiClient.js";
import {
    saveSession,
    getSession,
    clearSession
} from "./sessionService.js";

// Realiza o login do usuário
export async function login(username, password) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    };

    const data = await apiRequest("/auth/login", options);

    // Guarda somente os dados necessários para manter a sessão.
    // A senha não é armazenada.
    const user = {
        id: data.id,
        username: data.username,
        firstName: data.firstName,
        accessToken: data.accessToken
    };

    saveSession(user);

    return data;
}

// Encerra a sessão do usuário
export function logout() {
    clearSession();
}

// Verifica se existe um usuário autenticado
export async function getAuthenticatedUser() {
    const session = getSession();

    if (!session?.accessToken) {
        return null;
    }

    const options = {
        headers: {
            Authorization: `Bearer ${session.accessToken}`
        }
    };

    try {
        return await apiRequest("/auth/me", options);
    } catch (error) {
        if (error.status === 401 || error.status === 403) {
            clearSession();
        }

        throw error;
    }
}
