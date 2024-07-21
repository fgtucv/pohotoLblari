import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from "./imeges.js";

const list = document.querySelector(".gallery");

const gallery = images.map((img) => {
  return `<li class="gallery-item">
<a class="gallery-link" href="${img.original}">
  <img
    class="gallery-image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"
  />
</a>
</li>`
}).join("");

list.innerHTML = gallery;


list.addEventListener("click", showModal);

function showModal(event) {
    event.preventDefault();

    const element = event.target

    if (!element.classList.contains("gallery-image")) {
        return;
    }

    new SimpleLightbox('.gallery-item a', { captionsData:"alt",
      captionDelay: 500
     });a

    
}