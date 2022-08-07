// Add imports above this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const imgCardMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgCardMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
      `;
    })
    .join(' ');
}

const gallery = new SimpleLightbox('.gallery  a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: 250,
});

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const imgNodeName = evt.target.nodeName;
  if (!imgNodeName) {
    return;
  } else {
    gallery;
  }
}
