import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  return `
  <li class="gallery__item">
  <a class="gallery__pic" href="${original}">
      <img
      class="gallery__image"
      data-source="${original}"
      src="${preview}"
      alt="${description}"
      />
  </a>
</li>`
}

const galleryMarkup = galleryItems.map(createGalleryItem).join(" ");
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
 new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
