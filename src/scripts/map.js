import L, { icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import iconUrl from '../images/marker-icon.png';

const ubicaciones = [
    { lat: 42.8121348340127, lng: -1.6493258843956333, title: 'La Ciudadela' },
    { lat: 42.81877677739823, lng: -1.6440409574103985, title: 'El Ayuntamiento' },
    { lat: 42.81709627893053, lng: -1.642751130425502, title: 'Plaza del Castillo' },
    { lat: 42.817606456848935, lng: -1.6420770028765386, title: 'La Estafeta' },
    { lat: 42.82117585383558, lng: -1.6413366757164622, title: 'Rincón del Caballo Blanco' },
    { lat: 42.81946906373421, lng: -1.6457324028764757, title: 'Cuesta de Santo Domingo' }
];

const mapContainer = document.getElementById('map');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Inicializar el mapa solo cuando el contenedor esté visible
            const map = L.map('map', {
                center: [42.81709627893053, -1.642751130425502],
                zoom: 14
            });

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            const customIcon = L.icon({
                iconUrl: iconUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            });

            ubicaciones.forEach(ubic => {
                L.marker([ubic.lat, ubic.lng], { icon: customIcon })
                    .addTo(map)
                    .bindPopup(ubic.title);
            });

            // Dejar de observar una vez cargado el mapa
            observer.unobserve(mapContainer);
        }
    });
}, { threshold: 0.1 }); // El mapa se cargará cuando sea al menos un 10% visible

// Iniciar la observación del contenedor del mapa
observer.observe(mapContainer);
