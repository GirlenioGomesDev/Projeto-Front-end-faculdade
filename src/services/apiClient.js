import { API_BASE_URL } from "./apiConfig.js";



export async function apiRequest(endpoint, options = {}) {
   const  response = await fetch(`${API_BASE_URL}${endpoint}`, options);
   
   if (!response.ok) {
    const error = new Error(`Erro HTTP: ${response.status}`);
    error.status = response.status;
    throw error;
}

   const data = await response.json();

   return data;

}


