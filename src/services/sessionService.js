export function saveSession(user) {
    localStorage.setItem("petnear_session", JSON.stringify(user));
}

export function getSession() {
    const session = localStorage.getItem("petnear_session");

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


export function clearSession() {
    localStorage.removeItem("petnear_session");
}