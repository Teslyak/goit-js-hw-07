import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  ul: document.querySelector('.gallery'),
  
}

const createGallery = makeTagsGallery(galleryItems);

function makeTagsGallery(img) {
    return img.map(({ preview, original, description }) => { 
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="Image ${description}"
    />
  </a>
  </li>
`
    }).join('');
   
};
 
refs.ul.insertAdjacentHTML('beforeend', createGallery);

let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});


