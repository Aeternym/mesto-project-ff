import "./index.css";
import { initialCards } from "./scripts/cards.js";
import { deleteCard, likeCard, createCard } from "./scripts/card.js";
import { openPopup, closePopup } from "./scripts/modal.js";
import {
  loadCurrentProfileInfo,
  handleAddCard,
  handleEditFormSubmit,
  formAdd,
  formEdit,
  newCardPopup,
  editPopup,
} from "./scripts/handlers.js";

const avatar = new URL('./images/avatar.jpg', import.meta.url);
document.querySelector(
  ".profile__image"
).style.backgroundImage = `url(${avatar})`;

const cardContainer = document.querySelector(".places__list");
const imageContainer = document.querySelector(".popup__image");
const textContainer = document.querySelector(".popup__caption");
const imagePopup = document.querySelector(".popup_type_image");
const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");
const closeBtns = document.querySelectorAll(".popup__close");

initialCards.forEach(addCard);

function addCard(item, isNew) {
  const card = createCard(item, deleteCard, likeCard, openImage);
  if (isNew) {
    cardContainer.prepend(card);
  } else {
    cardContainer.append(card);
  }
}

function openImage(event, name, link) {
  if (!event.target.classList.contains("card__delete-button")) {
    textContainer.textContent = name;
    imageContainer.src = link;
    imageContainer.alt = name;

    openPopup(imagePopup);
  }
}

addBtn.addEventListener("click", () => {
  openPopup(newCardPopup);
});
editBtn.addEventListener("click", () => {
  loadCurrentProfileInfo();
  openPopup(editPopup);
});
closeBtns.forEach((button) => {
  button.addEventListener("click", handleClose);
});
document.addEventListener("click", closeByClick);
function handleClose(event) {
  const popup = event.target.closest(".popup");
  closePopup(popup);
}
function closeByClick(event) {
  const popup = event.target.closest(".popup");
  event.stopPropagation();
  if (event.target.classList.contains("popup")) {
    closePopup(popup);
  }
}

formEdit.addEventListener("submit", handleEditFormSubmit);
formAdd.addEventListener("submit", handleAddCard);

export { addCard };