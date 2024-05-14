import { putLike, deleteLike, deleteCardByApi } from './api';
const template = document.querySelector("#card-template").content;



function createCard(item, deleteCard, likeCard, openImage, likes, userId, cardId, globalUserId) {
  const cardElement = template.querySelector('.card').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  if (userId !== globalUserId) {
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
  deleteBtn.addEventListener('click', () => deleteCard(cardId, cardElement));
  const liked = cardElement.querySelector('.card__like-button');
  liked.addEventListener('click', () => likeCard(cardId, cardElement, liked));
  image.addEventListener('click', () => openImage(image.src, image.alt, title.textContent));
  

  if (item.likes.some((like) => like._id === userId)) {
    liked.classList.add("card__like-button_is-active");
  }

  return cardElement;
}




function likeCards(cardId, card, liked) {
  if (liked.classList.contains('card__like-button_is-active')) {
    deleteLike(cardId)
      .then((result) => {
        card.querySelector('.card_like-count').textContent = result.likes.length;
        liked.classList.remove('card__like-button_is-active');
      })
      .catch((err) => {
        liked.classList.add('card__like-button_is-active');
        console.log(err);
      });
  } else {
    putLike(cardId)
      .then((result) => {
        card.querySelector('.card_like-count').textContent = result.likes.length;
        liked.classList.add('card__like-button_is-active');
      })
      .catch((err) => {
        liked.classList.remove('card__like-button_is-active');
        console.log(err);
      });
  };
}


function deleteCard(cardId, card) {
  deleteCardByApi(cardId)
    .then((result) => {
      console.log(result);
      card.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}





export { createCard, likeCards, deleteCard };