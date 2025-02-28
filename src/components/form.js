import {closeModal} from "./modal";
import { cardsContainer, openModalImage, renderCard, deleteCard, addLikeCard } from "./card";

const profileName = document.querySelector('.profile__title');
const profileDescr = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const popupNewCard = document.querySelector('.popup_type_new-card');

nameInput.value = profileName.textContent
jobInput.value = profileDescr.textContent;

function handleFormSubmit(evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileDescr.textContent = jobInput.value;

    closeModal(popupProfileEdit);
}

function addCard() {
  const newCardObj = {
    name: cardName.value,
    link: cardLink.value,
  };
  cardsContainer.prepend(renderCard(newCardObj, deleteCard, addLikeCard, openModalImage));
}

function handleFormNewCardSubmit(evt) {
  evt.preventDefault();
  addCard(cardName, cardLink);
  closeModal(popupNewCard);
  evt.target.reset();
}

export {handleFormSubmit, handleFormNewCardSubmit};