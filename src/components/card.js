import { openModal, closeModal } from "./modal";

const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');

function deleteCard(card) {
  card.remove();
}

function addLikeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

function renderCard({name, link}) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;

  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  likeButton.addEventListener('click', addLikeCard);

  cardElement.querySelector('.card__image').addEventListener('click', () => openImage(link, name));
    
  return cardElement;
}

function addCard(name, link) {
  const newCardElement = renderCard({name, link});
  cardsContainer.insertBefore(newCardElement, cardsContainer.firstChild);
}

function handleFormNewCardSubmit(evt) {
  evt.preventDefault();
  addCard(cardName.value, cardLink.value);
  closeModal(popupNewCard);
  cardName.value = '';
  cardLink.value = '';
}

function openImage(link, name) {
  openModal(popupImage);
  popupImage.querySelector('.popup__image').src = link;
  popupImage.querySelector('.popup__caption').textContent = name;
}

export {cardsContainer, renderCard, handleFormNewCardSubmit};

