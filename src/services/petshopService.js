const OVERPASS_URL =
    "https://overpass-api.de/api/interpreter";

export async function buscarPetShops() {
    const consulta = `
        [out:json][timeout:25];
        (
            nwr["shop"="pet"](around:10000,-8.0476,-34.8770);
        );
        out center;
    `;

    const response = await fetch(OVERPASS_URL, {
        method: "POST",
        body: new URLSearchParams({
            data: consulta
        })
    });

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.elements)) {
        throw new Error("Resposta inválida da API");
    }

    return data.elements
    .filter((elemento) => {
        return (
            typeof elemento.tags?.name === "string" &&
            elemento.tags.name.trim() !== ""
        );
    })
    .map(normalizarPetShop);
}


export function normalizarPetShop(elemento) {
    const tags = elemento.tags || {};
   
    
    return {
        
        id: `osm-${elemento.type}-${elemento.id}`,
        
        nome: tags.name || "Pet Shop sem nome",
        
        latitude: elemento.lat ?? elemento.center?.lat ?? null,
        longitude: elemento.lon ?? elemento.center?.lon ?? null,
       
        endereco: [
            tags["addr:street"],
            tags["addr:housenumber"]
        ].filter(Boolean).join(", ") || "Endereço não informado",
        bairro: tags["addr:suburb"] || "Bairro não informado",
        cidade: tags["addr:city"] || "Cidade não informada",
        distancia: "Não calculada",
        avaliacao: "Não disponível",
        horario: tags.opening_hours || "Horário não informado",
        servicos: []
    };
}