const cardsContainer = document.querySelector('.places__list');

function renderCard(card, deleteCard, addLikeCard, openImageModal) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  deleteButton.addEventListener('click', () => deleteCard(cardElement));
  likeButton.addEventListener('click', addLikeCard);
  cardImage.addEventListener('click', openImageModal);
  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function addLikeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export {cardsContainer, renderCard, deleteCard, addLikeCard};

