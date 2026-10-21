import { apiRequest } from "./apiClient.js";
import { saveSession, getSession, clearSession } from "./sessionService.js";



export async function login(username, password) {
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    
    const data = await apiRequest("/auth/login", options);
    
    const user = {
        id: data.id,
        username: data.username,
        firstName: data.firstName,
        accessToken: data.accessToken
        
    };
    
    
    
    saveSession(user);
    return data;
}

export function logout() {
        clearSession();
    }


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


