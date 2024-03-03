
const hero = `
<div class="container text-center">
    <div class="row">
        <div class="col">
                <span>Navega con total libertad y privacidad.</span>
                <h1>2 años de SimVPN por solo $2.19 al mes</h1>
                <ul>
                <li>Mantén tus datos seguros y tu actividad online privada con la VPN líder del mundo.</li>
                <li>Oculta tu dirección IP y navega sin ser rastreado.</li>
                <li>Protege tu información personal y financiera de hackers y malware.</li>
                <li>Disfruta de contenido sin restricciones geográficas en cualquier país.</li>
                </ul>
                <button type="button" class="btn btn-primary">Obtener SimVPN ahora</button>
                <p>Garantía de devolución de 30 días garantizada</p>
        </div>
        <div class="col">
            <picture>
                <source type="image/webp" data-srcset="./assets/image/stock-photo.webp" class="lazyload">
                <source type="image/png" data-srcset="./assets/image/stock-photo.png" class="lazyload">
                <img data-src="./assets/image/stock-photo.png" alt="Avatar" class="lazyload" style="width:100%">
            </picture>  
        </div>
        
    </div>
</div>
`;
export default hero;

//pasos para generar con lazy al importar
/* const img = document.createElement('img');
img.setAttribute('data-src', 'path/to/your/image.jpg');
img.classList.add('lazyload');
document.body.appendChild(img); */
