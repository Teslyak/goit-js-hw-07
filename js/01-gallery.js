import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryListItems = document.querySelector('.gallery');
console.log(galleryListItems);

const makeTagsGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
  </a>
</li>`
}).join('');
 console.log(makeTagsGallery);

galleryListItems.insertAdjacentHTML('beforeend', makeTagsGallery);