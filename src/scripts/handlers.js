import { closePopup } from "./modal.js";
import { addCard } from "../index.js";
const formEdit = document.forms["edit-profile"];
const formAdd = document.forms["new-place"];
const newCardPopup = document.querySelector(".popup_type_new-card");
const editPopup = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".profile__title");
const descriptionInput = document.querySelector(".profile__description");
const nameEdit = formEdit.elements.name;
const description = formEdit.elements.description;
const nameAdd = formAdd.elements["place-name"];
const linkAdd = formAdd.elements.link;
function loadCurrentProfileInfo() {
  nameEdit.value = nameInput.textContent;
  description.value = descriptionInput.textContent;
}
function handleAddCard(event) {
  event.preventDefault();
  const name = nameAdd.value;
  const link = linkAdd.value;
  const newCard = { name, link };
  addCard(newCard, true);
  resetFormAndClosePopup(formAdd, newCardPopup);
}

function handleEditFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = nameEdit.value;
  descriptionInput.textContent = description.value;
  resetFormAndClosePopup(formEdit, editPopup);
}

function resetFormAndClosePopup(form, popup) {
  form.reset();
  closePopup(popup);
}

export {
  loadCurrentProfileInfo,
  handleAddCard,
  handleEditFormSubmit,
  formAdd,
  formEdit,
  newCardPopup,
  editPopup,
};