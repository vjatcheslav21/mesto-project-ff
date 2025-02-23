import '../pages/index.css'
import initialCards from '../components/cards';
import {cardsContainer, renderCard} from '../components/card';
// import {openModal, closeModal} from "../components/modal";
import toggleModal from '../components/modal';
import {handleFormSubmit} from '../components/form';

const profileEditBtn = document.querySelector('.profile__edit-button');
const addCardBtn = document.querySelector('.profile__add-button');
const openImageBtn = document.querySelector('.places__list');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const formElement = document.querySelector('.popup__form');

initialCards.map(renderCard).forEach(item => cardsContainer.append(item));

// openModal(profileEditBtn, popupProfileEdit);
// openModal(addCardBtn, popupNewCard);
// openModal(openImageBtn, popupImage);

// closeModal(popupProfileEdit);
// closeModal(popupNewCard);
// closeModal(popupImage);

toggleModal(profileEditBtn, popupProfileEdit);
toggleModal(addCardBtn, popupNewCard);
toggleModal(openImageBtn, popupImage);

formElement.addEventListener('submit', handleFormSubmit);

