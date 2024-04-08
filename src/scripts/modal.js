function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
}

function closeByEsc(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closePopup(popup);
  }
}

function closeByOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

export { closePopup, openPopup, closeByOverlay };