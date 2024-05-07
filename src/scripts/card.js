const template = document.querySelector("#card-template").content;

function createCard(item, deleteCard, likeCard, openImage, likes, userId, CardId, globalId) {
  const cardElement = template.querySelector('.card').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  if (userId !== globalId) {
    deleteBtn.classList.add('card__delete-button-disabled');
    deleteBtn.disabled = true;
  } 
  const title = cardElement.querySelector(".card__title");
  title.textContent = item.name;
  const likeCount = cardElement.querySelector('.card_like-count');
  likeCount.textContent = likes;
  const image = cardElement.querySelector(".card__image");
  image.src = item.link;
  image.alt = item.name;
  deleteBtn.addEventListener('click', () => deleteCard(CardId, cardElement));
  const liked = cardElement.querySelector('.card__like-button');
  liked.addEventListener('click', () => likeCard(CardId, cardElement, liked));
  image.addEventListener('click', () => openImage(image.src, image.alt, title.textContent));
  return cardElement;
}

export {createCard};