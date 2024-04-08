function createCard(item, deleteCard, likeCard, openImage) {
  const template = document.getElementById("card-template").content;
  const cardElement = template.querySelector(".card").cloneNode(true);
  const title = cardElement.querySelector(".card__title");
  const image = cardElement.querySelector(".card__image");
  const deleteBtn = cardElement.querySelector(".card__delete-button");
  const likeBtn = cardElement.querySelector(".card__like-button");
  image.src = item.link;
  image.alt = item.name;
  title.textContent = item.name;
  deleteBtn.addEventListener("click", (evt) => {
    deleteCard(evt);
  });
  likeBtn.addEventListener("click", (evt) => {
    likeCard(evt);
  });
  image.addEventListener("click", () => {
    openImage(image.src, image.alt, title.textContent);
  });
  return cardElement;
}

const uploadCard = (item, container, likeCard, deleteCard, openImage, place = "end",
) => {
  const cardElement = createCard(item, deleteCard, likeCard, openImage);
  if (place === "end") {
    container.append(cardElement);
  } else {
    container.prepend(cardElement);
  }
};

export { uploadCard };