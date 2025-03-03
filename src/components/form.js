import {closeModal} from "./modal";
import {cardsContainer, renderCard, deleteCard, addLikeCard, openImageModal } from "./card";

function handleProfileFormSubmit(evt, profileTitle, profileDescr, profileNameInput, profileJobInput, modal) {
    evt.preventDefault(); 

    profileTitle.textContent = profileNameInput.value;
    profileDescr.textContent = profileJobInput.value;

    closeModal(modal);
}

function addCard(cardNameInput, cardLinkInput) {
  const newCardObj = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  
  cardsContainer.prepend(renderCard(newCardObj, deleteCard, addLikeCard, openImageModal));
}

function handleFormNewCardSubmit(evt, cardNameInput, cardLinkInput, modal) {
  evt.preventDefault();
  addCard(cardNameInput, cardLinkInput);
  closeModal(modal);
  evt.target.reset();
}

export {handleProfileFormSubmit, handleFormNewCardSubmit};