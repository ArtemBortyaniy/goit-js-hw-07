import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

function renderImage (galleryItems) {
    const imagesGallery = []

    for(const elem of galleryItems) {
        imagesGallery.push(`<a class="gallery__link" href="large-image.jpg">
        <img src='${elem.preview}' alt='${elem.description}' data-source='${elem.original}' style='width: 340px'/>
        </a>`);
    }

    return imagesGallery.join('');
}

listEl.insertAdjacentHTML('beforeend', renderImage(galleryItems));


function openElemGallery (event) {
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    
    const targetImagOrigin = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${targetImagOrigin}" width="800" height="600">
    `);

    instance.show()

    document.addEventListener("keydown", event => {
        if(event.code === 'Escape') {
            instance.close();
        }
    });
}

listEl.addEventListener('click', openElemGallery);


