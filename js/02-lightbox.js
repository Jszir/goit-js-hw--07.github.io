import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = galleryItems
  .map(({ preview, original, description }) => `
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
  )
  .join("");
  
    galleryContainer.style.marginTop =  '100px'


galleryContainer.addEventListener("click", (e) => {
  e.preventDefault(); new SimpleLightbox(".gallery a", {
    captionsData: "alt",
});
})
