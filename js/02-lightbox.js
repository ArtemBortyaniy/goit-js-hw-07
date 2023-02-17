import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');

console.log(galleryItems);

function renderGallery (gallery) {
    let str = `<a class="gallery__item" href="${gallery.original}" >
        <img class="gallery__image" src="${gallery.preview}" alt="${gallery.description}" title="${gallery.description}"/>
        </a>`;

    return str;
}

const dataGallery = galleryItems.map(renderGallery).join('');

listEl.insertAdjacentHTML('beforeend', dataGallery);

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });




