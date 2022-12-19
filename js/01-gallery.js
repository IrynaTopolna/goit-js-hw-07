import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  ""
);

galleryRef.insertAdjacentHTML("beforeend", markup);

galleryRef.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("gallery__image")) {
    const imgOriginalSrc = evt.target.dataset.source;
    console.log(imgOriginalSrc);

    const instance = basicLightbox.create(`
    <img src='${imgOriginalSrc}',>
`);

    instance.show();
  }
}
