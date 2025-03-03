import '../pages/index.css'
import initialCards from '../components/cards';
import {cardsContainer, renderCard, deleteCard, addLikeCard, openImageModal} from '../components/card';
import {openModal, openEditProfileModal, closeModalByOverlayAndButton} from '../components/modal';
import {handleProfileFormSubmit, handleFormNewCardSubmit} from '../components/form';

const modals = document.querySelectorAll('.popup');
//Кнопки модальных окон
const profileEditBtn = document.querySelector('.profile__edit-button');
const addCardBtn = document.querySelector('.profile__add-button');
//Модальньные окна
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
//Формы
const formProfile = document.forms.profile;
const formPlace = document.forms.place;
//Элементы модального окна для редактирования профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescr = document.querySelector('.profile__description');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileJobInput = document.querySelector('.popup__input_type_description');
//Инпуты формы добавления карточки
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_url');

initialCards.forEach((el) => {    
    cardsContainer.append(renderCard(el, deleteCard, addLikeCard, openImageModal));
});

closeModalByOverlayAndButton(modals);

modals.forEach((modal) => {
    modal.classList.add('popup_is-animated');
});

profileEditBtn.addEventListener('click', () => {
    openEditProfileModal(profileTitle, profileDescr, profileNameInput, profileJobInput, popupProfileEdit);
});

addCardBtn.addEventListener('click', () => openModal(popupNewCard));

formProfile.addEventListener('submit', (evt) => {
    handleProfileFormSubmit(evt, profileTitle, profileDescr, profileNameInput, profileJobInput, popupProfileEdit);
});

formPlace.addEventListener('submit', (evt) => {
    handleFormNewCardSubmit(evt, cardNameInput, cardLinkInput, popupNewCard);
});





