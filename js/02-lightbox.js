import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');
const dataGallery = galleryItems.map(renderGallery).join('');


function renderGallery ({original, preview, description}) {
    return`
    <li>
        <a class="gallery__item" href="${original}" >
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a>
    </li>
    `;
}

listEl.insertAdjacentHTML('beforeend', dataGallery);

new SimpleLightbox('.gallery a', { captionDelay:250});




