import '../pages/index.css'
import initialCards from '../components/cards';
import {cardsContainer, renderCard, deleteCard, addLikeCard} from '../components/card';
import {openModal, closeModal, closeModalByOverlayAndButton} from '../components/modal';
// import {handleProfileFormSubmit, handleFormNewCardSubmit} from '../components/form';

const modals = document.querySelectorAll('.popup');
//Кнопки модальных окон
const profileEditBtn = document.querySelector('.profile__edit-button');
const addCardBtn = document.querySelector('.profile__add-button');
//Изображение и его название
const popImage = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');
//Модальньные окна
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
//Формы
const formProfile = document.forms.profile;
const formPlace = document.forms.place;
//Имя пользователя и его место работы
const profileTitle = document.querySelector('.profile__title');
const profileDescr = document.querySelector('.profile__description');
//Инпуты формы редактирования профиля
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileJobInput = document.querySelector('.popup__input_type_description');
//Инпуты формы добавления карточки
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_url');

//Вывод карточек на экран
initialCards.forEach((el) => {    
    cardsContainer.append(renderCard(el, deleteCard, addLikeCard, openImageModal));
});

//Вызов функции закрытия модальных окон по оверлею и крестику
closeModalByOverlayAndButton(modals);

//Добавление плавной анимации открытия и закрытия модальных окон
modals.forEach((modal) => {
    modal.classList.add('popup_is-animated');
});

//Функция открытия модального окна редактировая профиля
function openEditProfileModal(profileTitle, profileDescr, profileNameInput, profileJobInput) {
    profileNameInput.value = profileTitle.textContent;
    profileJobInput.value = profileDescr.textContent;
    openModal(popupProfileEdit);
}

//Вызов функции открытия модального окна редактирования профиля
profileEditBtn.addEventListener('click', () => {
    openEditProfileModal(profileTitle, profileDescr, profileNameInput, profileJobInput, popupProfileEdit);
});

//Функция обработки формы профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = profileNameInput.value;
    profileDescr.textContent = profileJobInput.value;
    closeModal(popupProfileEdit);
}

//Функция, которая добавляет новую карточку в массив
function addCard(cardNameInput, cardLinkInput) {
  const newCardObj = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  cardsContainer.prepend(renderCard(newCardObj, deleteCard, addLikeCard, openImageModal));
}

//Функция, которая добавляет на страницу новую карточку
function handleFormNewCardSubmit(evt, cardNameInput, cardLinkInput) {
  evt.preventDefault();
  addCard(cardNameInput, cardLinkInput);
  closeModal(popupNewCard);
  evt.target.reset();
}

//Вызов функции открытия модального окна добавления карточки
addCardBtn.addEventListener('click', () => openModal(popupNewCard));

//Вызов функций по обработке форм
formProfile.addEventListener('submit', (evt) => {
    handleProfileFormSubmit(evt, profileTitle, profileDescr, profileNameInput, profileJobInput, popupProfileEdit);
});

formPlace.addEventListener('submit', (evt) => {
    handleFormNewCardSubmit(evt, cardNameInput, cardLinkInput);
});

//Функция открытия модального окна с изображением
function openImageModal(evt) {
    const parent = evt.target.closest('.places__item');
    const titleImage = parent.querySelector('.card__title').textContent;
    popImage.src = evt.target.src;
    popImage.alt = titleImage;
    caption.textContent = titleImage;
    openModal(popupImage);
}

