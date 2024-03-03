import '../styles/hero.css';
import CheckIcon from './svg/check.js';
const checkIconHTML = CheckIcon({ fill: 'red', width: '0.9rem', height: '0.9rem' });

const hero = `
<div class="header custom-header">
    <!--Waves Container-->
    <div>
    <div class="container text-center">
    <div class="row">
        <div class="col">
                <span>Navega con total libertad y privacidad.</span>
                <h1>2 años de SimVPN por solo $2.19 al mes</h1>
                <ul style="list-style-type: none;text-align: left;text-wrap: balance;padding-left: 0;">
                    <li>${checkIconHTML}Mantén tus datos seguros y tu actividad online privada.</li>
                    <li>${checkIconHTML}Oculta tu dirección IP y navega sin ser rastreado.</li>
                    <li>${checkIconHTML}Protege tu información personal y financiera de hackers y malware.</li>
                    <li>${checkIconHTML}Disfruta de contenido sin restricciones geográficas en cualquier país.</li>
                </ul>
                <button type="button" class="btn btn-primary">Obtener SimVPN ahora</button>
                <p>Garantía de devolución de 30 días garantizada</p>
        </div>
        <div class="col">
            <!--<picture>
                <source type="image/webp" data-srcset="./assets/image/stock-photo.webp" class="lazyload">
                <source type="image/png" data-srcset="./assets/image/stock-photo.png" class="lazyload">
                <img data-src="./assets/image/stock-photo.png" alt="Avatar" class="lazyload" style="width:100%">
            </picture>-->
        </div>
    </div>
    </div>
    <!--Waves-->
        <svg class="waves custom-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
    </div>
    <!--Waves end-->
</div>
`;
export default hero;

//pasos para generar con lazy al importar
/* const img = document.createElement('img');
img.setAttribute('data-src', 'path/to/your/image.jpg');
img.classList.add('lazyload');
document.body.appendChild(img); */
