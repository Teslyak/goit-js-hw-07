import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  ul: document.querySelector('.gallery'),
  
}

const createGallery = makeTagsGallery(galleryItems);

function makeTagsGallery(img) {
    return img.map(({ preview, original, description }) => { 
        return `<li class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      alt="Image ${description}"
    />
  </a>
</li>`
    }).join('');
   
};
 
refs.ul.insertAdjacentHTML('beforeend', createGallery);

refs.ul.addEventListener('click', onClickItemGallery);


function onClickItemGallery(event) {
  if (event.target.classList.contains('gallery')) { 
      return;
  };
    
};

let galleryNew = new SimpleLightbox('.gallery__item a');

