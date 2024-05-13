import "./index.css";
import { createCard, likeCards, deleteCard} from "./scripts/card";
import { openPopup, closePopup, closeByOverlay } from "./scripts/modal.js";
import { enableValidation, clearValidation } from './scripts/validation.js';
import { getUserInfo, getCards, postUserProfile, postNewCard, deleteCardByApi, updateAvatar } from './scripts/api.js';

const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button-disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};
enableValidation(configValidation);

const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const newCardButton = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardForm = document.forms["new-place"];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");
const popupProfileForm = document.forms["edit-profile"];
const buttonLoading = document.querySelector('.button');
const closeBtns = document.querySelectorAll(".popup__close");
const popupImageElement = document.querySelector(".popup_type_image");
const popupImage = popupImageElement.querySelector(".popup__image");
const popupCaption = popupImageElement.querySelector(".popup__caption");
const popupCardDelete = document.querySelector('.popup_card_delete');
const popupButtonDelete = document.querySelector('.popup__button-delete');
const popupAvatar = document.querySelector('.popup_card_update-avatar');
const popupAvatarForm = document.forms['update-avatar'];
const avatarInput = popupAvatarForm.elements.avatar;
const cardName = popupNewCardForm.elements.placeName;
const cardLink = popupNewCardForm.elements.link;
const nameInput = popupProfileForm.elements.name;
const descrInput = popupProfileForm.elements.description;

let globalId;

Promise.all([getUserInfo(), getCards()])
  .then(([userData, cardData]) => {
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
    cardData.forEach((item) => {
      const card = createCard(item, deleteCardPopup, likeCards, openImageCard, item.likes.length, item.owner._id, item._id, globalId);
      placesList.append(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  descrInput.value = profileDescription.textContent;
  clearValidation(popupProfile, configValidation);
  openPopup(popupProfile);
});

newCardButton.addEventListener("click", () => {
  cardName.value = '';
  cardLink.value = '';
  clearValidation(popupNewCard, configValidation);
  openPopup(popupNewCard);
});

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  buttonLoading.textContent = 'Сохранение...';
  postUserProfile(nameInput.value, descrInput.value)
    .then((result) => {
      profileTitle.textContent = result.name;
      profileDescription.textContent = result.about;
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonLoading.textContent = 'Сохранить';
    });

}
popupProfileForm.addEventListener('submit', handleFormSubmitProfile);

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  buttonLoading.textContent = 'Сохранение...';
  postNewCard(popupNewCardForm.elements.placeName.value, popupNewCardForm.elements.link.value)
    .then((result) => {
      const placeInput = result.name;
      const linkInput = result.link;
      const card = createCard({ name: placeInput, link: linkInput }, deleteCardPopup, likeCards, openImageCard, result.likes.length, result.owner._id, result._id, globalId);
      placesList.prepend(card);
      popupNewCardForm.reset();
      closePopup(popupNewCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonLoading.textContent = 'Сохранить';
    });
}

popupNewCardForm.addEventListener('submit', handleFormSubmitCard);

function openImageCard(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImageElement);
}


function deleteCardPopup(cardId, card) {
  openPopup(popupCardDelete);
  popupButtonDelete.onclick = () => {
    deleteCardByApi(cardId)
      .then((result) => {
        console.log(result);
        card.remove();
        closePopup(popupCardDelete);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}


profileImage.addEventListener('click', () => {
  openPopup(popupAvatar);
  avatarInput.value = '';
  clearValidation(popupAvatar, configValidation);
});



function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  buttonLoading.textContent = 'Сохранение...';
  updateAvatar(avatarInput.value)
    .then((result) => {
      profileImage.style.backgroundImage = `url(${result.avatar})`;
      closeByOverlay(popupAvatar)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonLoading.textContent = 'Сохранить';
    });
}

popupImageElement.addEventListener("click", (event) => {
  closeByOverlay(event);
});

popupAvatar.addEventListener("click", (event) => {
  closeByOverlay(event);
});

popupNewCard.addEventListener("click", (event) => {
  closeByOverlay(event);
});

popupProfile.addEventListener("click", (event) => {
  closeByOverlay(event);
});

closeBtns.forEach((button) => {
  button.addEventListener("click", handleClose);
});

function handleClose(event) {
  const popup = event.target.closest(".popup");
  closePopup(popup);
}

popupAvatarForm.addEventListener('submit', handleFormSubmitAvatar)