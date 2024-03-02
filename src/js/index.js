// Importar una hoja de estilo CSS
import '../styles/main.scss';
// Importar estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar JavaScript de Bootstrap
import 'bootstrap';








/*COMPONENTS */

import navbar from '@/components/navbar.js';
import { obtenerIpYGenerarHtml } from '@/components/ip_locator.js';

// Selecciona el contenedor donde quieres insertar la navbar
const navbarContainer = document.getElementById('NAVBAR_COMPONENT');
if (navbarContainer) {
    //navbarContainer.innerHTML = navbar; INNETHTML ES PARA PONERLO DENTRO
    navbarContainer.outerHTML = navbar; // OUTERHTML ES PARA PONERLO FUERA
} else {
    console.error('El contenedor de la navbar no fue encontrado.');
}

async function mostrarIpLocator() {
    const htmlLocator = await obtenerIpYGenerarHtml();
    document.getElementById('IP_LOCATOR_COMPONENT').outerHTML = htmlLocator;
}

document.addEventListener('DOMContentLoaded', mostrarIpLocator);

/*COMPONENTS */

// Código JavaScript para inicializar tu aplicación
document.addEventListener('DOMContentLoaded', () => {
  // Tu código para iniciar la aplicación va aquí, por ejemplo:
  const app = document.getElementById('app');
});
