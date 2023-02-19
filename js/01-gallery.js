import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');

const galleryMarkap = galleryItems.map(({preview, description, original}) => {
    return `<a class="gallery__link" href="${original}">
        <img src='${preview}' alt='${description}' data-source='${original}' style='width: 340px'/>
            </a>`;
}).join('');

listEl.insertAdjacentHTML('beforeend', galleryMarkap);

listEl.addEventListener('click', clickOnContainer);

function clickOnContainer (event) {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') {
        return;
    }

    const closeModal = event => {
        if(event.code === 'Escape') {
            lightboxInstance.close();
        }
    }

    const largeImgUrl = event.target.dataset.source;

    const lightboxInstance = basicLightbox.create(`
    <img src="${largeImgUrl}">`, {
        onShow: () => {
            document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
            document.removeEventListener('keydown', closeModal);
        }
    })

    lightboxInstance.show();
}


// const listEl = document.querySelector('.gallery');

// let instance = basicLightbox.create(`
//     <img src="" width="800" height="600">`, { 
//         closable: true, 
//     });

// function renderElImages (galleryItems) {
//     const imagesGallery = []

//     for(const {preview, description, original} of galleryItems) {
//         imagesGallery.push(`<a class="gallery__link" href="${original}">
//         <img src='${preview}' alt='${description}' data-source='${original}' style='width: 340px'/>
//         </a>`);
//     }

//     return imagesGallery.join('');
// }

// listEl.insertAdjacentHTML('beforeend', renderElImages(galleryItems));

// function openElGallery (event) {
//     event.preventDefault();

//     if(event.target.nodeName !== 'IMG') {
//         return;
//     }
    
//     const targetImgOrigin = event.target.dataset.source;

//     instance = basicLightbox.create(`
//     <img src="${targetImgOrigin}" width="800" height="600">`, { 
//         closable: true, 
//     });

//     instance.show();
// }

// listEl.addEventListener('click', openElGallery);

// function closeElGallery (event) {
//     if(event.code === 'Escape') {
//         instance.close();
//     }
// }

// document.addEventListener('keydown', closeElGallery);



