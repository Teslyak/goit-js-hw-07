import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    ul: document.querySelector('.gallery'),
}

const createGallery = makeTagsGallery(galleryItems);
refs.ul.addEventListener('click', onClickItemGallery);


function onClickItemGallery(event) {
    if (event.currentTarget) { 
        return;
    };
    
};

function makeTagsGallery(img) {
    return img.map(({ preview, original, description }) => { 
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
   
};
 

refs.ul.insertAdjacentHTML('beforeend', createGallery);


function openModal() {
 const li = document.querySelector('[data-source]');
console.log(li.);

	

};
 

 