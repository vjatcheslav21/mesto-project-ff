import '../pages/index.css'
import initialCards from '../components/cards';
import {cardsContainer, renderCard, handleFormNewCardSubmit} from '../components/card';
import {toggleModal} from '../components/modal';
import {handleFormSubmit} from '../components/form';

const profileEditBtn = document.querySelector('.profile__edit-button');
const addCardBtn = document.querySelector('.profile__add-button');
const openImageBtn = document.querySelector('.places__list');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const formProfile = document.forms.profile;
const formPlace = document.forms.place;

initialCards.map(renderCard).forEach(item => cardsContainer.append(item));

toggleModal(profileEditBtn, popupProfileEdit);
toggleModal(addCardBtn, popupNewCard);
toggleModal(openImageBtn, popupImage);

formProfile.addEventListener('submit', handleFormSubmit);

formPlace.addEventListener('submit', handleFormNewCardSubmit);


