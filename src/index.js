import "./index.css";
import { initialCards } from "./scripts/cards.js";
import { deleteCard, likeCard, createCard } from "./scripts/card";
import { openPopup, closePopup, closeByOverlay } from "./scripts/modal.js";

const popupProfileForm = document.forms["edit-profile"];
const popupNewCardForm = document.forms["new-place"];
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupProfile = document.querySelector(".popup_type_edit");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const newCardButton = document.querySelector(".profile__add-button");
const popupImageElement = document.querySelector(".popup_type_image");
const popupImage = popupImageElement.querySelector(".popup__image");
const popupCaption = popupImageElement.querySelector(".popup__caption");
const nameInput = document.querySelector(".profile__title");
const descriptionInput = document.querySelector(".profile__description");
const closeBtns = document.querySelectorAll(".popup__close");
const avatar = new URL('./images/avatar.jpg', import.meta.url);
document.querySelector(
  ".profile__image"
).style.backgroundImage = `url(${avatar})`;

const uploadCard = (item, container, likeCard, deleteCard, openImage, place = "end",
) => {
  const cardElement = createCard(item, deleteCard, likeCard, openImage);
  if (place === "end") {
    container.append(cardElement);
  } else {
    container.prepend(cardElement);
  }
};

const openImagePopup = (imageURL, imageAlt, title) => {
  popupImage.src = imageURL;
  popupImage.alt = imageAlt;
  popupCaption.textContent = title;
  openPopup(popupImageElement);
};

function handleEditFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = popupProfileForm.name.value;
  descriptionInput.textContent = popupProfileForm.description.value;
  closePopup(popupProfile);
};

const loadCurrentProfileInfo = (form, name, description) => {
  form.elements.name.value = name;
  form.elements.description.value = description;
};

popupImageElement.addEventListener("click", (event) => {
  closeByOverlay(event);
});

newCardButton.addEventListener("click", () => {
  openPopup(popupNewCard);
});

popupNewCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = popupNewCardForm.elements["place-name"].value;
  const link = popupNewCardForm.elements.link.value;
  const description = name;
  const newCard = {name, link, description,};
  uploadCard( newCard, placesList, likeCard, deleteCard, openImagePopup, "start",);
  closePopup(popupNewCard);
  popupNewCardForm.reset();
});

popupNewCard.addEventListener("click", (event) => {
  closeByOverlay(event);
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

profileEditButton.addEventListener("click", () => {
  loadCurrentProfileInfo(
    popupProfileForm,
    profileTitle.textContent,
    profileDescription.textContent,
  );
  openPopup(popupProfile);
});
popupProfileForm.addEventListener("submit", handleEditFormSubmit);
popupProfile.addEventListener("click", (event) => {
  closeByOverlay(event);
});

initialCards.forEach((card) =>
uploadCard(card, placesList, likeCard, deleteCard, openImagePopup),
);