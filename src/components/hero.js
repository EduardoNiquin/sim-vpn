
const hero = `
    <div class="container text-center">
        <div class="row">
            <div class="col">
                    <span></span>
                    <h1>Column 1</h1>
                    <p>Some text..</p>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <p>Some text..</p>
            </div>
            <div class="col">
                <img data-src="./assets/stock-photo.png" class="lazyload" alt="Avatar" style="width:100%" />
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