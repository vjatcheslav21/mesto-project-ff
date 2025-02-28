const cardsContainer = document.querySelector('.places__list');
const popImage = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');


function renderCard(card, deleteCard, addLikeCard, openModalImage) {
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

  cardImage.addEventListener('click', openModalImage);

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function addLikeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

function openModalImage(evt) {
  const parent = evt.target.closest('.places__item');
  const titleImage =parent.querySelector('.card__title').textContent;
  popImage.src = evt.target.src;
  popImage.alt = titleImage;
  caption.textContent= titleImage;
}

export {cardsContainer, renderCard, deleteCard, addLikeCard, openModalImage};

