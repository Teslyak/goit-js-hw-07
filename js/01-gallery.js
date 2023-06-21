import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    ul: document.querySelector('.gallery'),
}

const createGallery = makeTagsGallery(galleryItems);
refs.ul.addEventListener('click', onClickItemGallery);


function onClickItemGallery(event) {
  if (event.target.classList.contains('gallery')) { 
      return;
  };
  openModalImgOriginal(event);
 
};

function makeTagsGallery(img) {
    return img.map(({ preview, original, description }) => { 
        return `<li class="gallery__item">
  <a class="gallery__link" href="#">
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

function openModalImgOriginal(event) {
  const { alt } = event.target;
  const dataSource = event.target.dataset.source;
  const instance = basicLightbox.create(`<img
      class="gallery__image"
      src="${dataSource}"
      data-source="${dataSource}"
      alt="Image ${alt}"
    />`
  )
  instance.show();
};
 