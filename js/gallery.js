import gallery from "./gallery-items.js";
let modalWindow = document.querySelector(".lightbox");
gallery.forEach(({ preview, description, original }) => {
  let li = document.querySelector(".gallery");
  li.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
  </li>`
  );
});
modalWindow.addEventListener("click", openModalWindow);
function openModalWindow(event) {
  event.preventDefault();

  let modalWindow = event.target;
  modalWindow.classList.add("is-open");
}
