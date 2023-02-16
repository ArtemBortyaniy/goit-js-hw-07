import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

function renderImage (galleryItems) {
    const imagesGallery = []

    for(const elem of galleryItems) {
        imagesGallery.push(`<img src='${elem.preview}' alt='${elem.description}' style='width: 340px'/>`);
        console.log(elem.original);
    }

    return imagesGallery.join('');
}

listEl.insertAdjacentHTML('beforeend', renderImage(galleryItems));

import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
