
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaReal.css";

function MapaReal({ petshops = [], onSelecionar }) {
    const elementoMapa = useRef(null);
    const instanciaMapa = useRef(null);
    const camadaMarcadores = useRef(null);

    // Cria o mapa apenas uma vez.
    useEffect(() => {
        if (!elementoMapa.current || instanciaMapa.current) {
            return;
        }

        const mapa = L.map(elementoMapa.current).setView(
            [-8.0476, -34.8770],
            12
        );

        // Carrega as ruas reais do OpenStreetMap.
        L.tileLayer(
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                maxZoom: 19,
                attribution: "&copy; OpenStreetMap contributors"
            }
        ).addTo(mapa);

        instanciaMapa.current = mapa;
        camadaMarcadores.current = L.layerGroup().addTo(mapa);

        return () => {
            mapa.remove();
            instanciaMapa.current = null;
            camadaMarcadores.current = null;
        };
    }, []);

    // Atualiza os marcadores quando a lista muda.
    useEffect(() => {
        const mapa = instanciaMapa.current;
        const camada = camadaMarcadores.current;

        if (!mapa || !camada) return;

        camada.clearLayers();

        const coordenadas = [];

        petshops.forEach((petShop) => {
            const latitude = Number(petShop.latitude);
            const longitude = Number(petShop.longitude);

            if (
                !Number.isFinite(latitude) ||
                !Number.isFinite(longitude) ||
                petShop.latitude == null ||
                petShop.longitude == null
            ) {
                return;
            }

            const marcador = L.circleMarker(
                [latitude, longitude],
                {
                    radius: 8,
                    color: "#e87519",
                    fillColor: "#ff9838",
                    fillOpacity: 0.9
                }
            );

            const popup = document.createElement("div");

            const nome = document.createElement("strong");
            nome.textContent = petShop.nome;

            const botao = document.createElement("button");
            botao.type = "button";
            botao.textContent = "Agendar serviço";
            botao.className = "petnear-popup__button";

            botao.addEventListener("click", () => {
                if (onSelecionar) {
                    onSelecionar(petShop);
                }
            });

            popup.appendChild(nome);
            popup.appendChild(botao);

            marcador.bindPopup(popup);
            marcador.addTo(camada);

            coordenadas.push([latitude, longitude]);
        });

        if (coordenadas.length > 0) {
            mapa.fitBounds(coordenadas, {
                padding: [30, 30],
                maxZoom: 14
            });
        }
    }, [petshops, onSelecionar]);


    return (
        <div
            ref={elementoMapa}
            aria-label="Mapa interativo de Pet Shops"
            style={{
                width: "100%",
                height: "400px",
                borderRadius: "16px",
                overflow: "hidden"
            }}
        />
    );
}

export default MapaReal;
