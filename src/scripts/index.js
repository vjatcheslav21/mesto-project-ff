import '../pages/index.css'
// import initialCards from '../components/cards';
import {cardsContainer, renderCard, deleteMyCard, toggleLike} from '../components/card';
import {openModal, closeModal, closeModalByOverlayAndButton} from '../components/modal';
import {enableValidation, clearValidation} from '../components/validation';
import {getInitialCards, getUserInfo, updateProfileInfo, uploadNewCard, uploadNewAvatar} from '../components/api';

const modals = document.querySelectorAll('.popup');
const profileAvatar = document.querySelector('.profile__image');
const popupButtons = document.querySelectorAll('.popup__button');
//Кнопки модальных окон
const avatarBtn = document.querySelector('.profile__image-button');
const profileEditBtn = document.querySelector('.profile__edit-button');
const addCardBtn = document.querySelector('.profile__add-button');
//Изображение и его название
const popImage = document.querySelector('.popup__image');
const captionImage = document.querySelector('.popup__caption');
//Модальньные окна
const popupProfileAvatar = document.querySelector('.popup_type_avatar');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
//Формы
const formAvatar = document.forms.avatar;
const formProfile = document.forms.profile;
const formPlace = document.forms.place;
//Имя пользователя и его место работы
const profileTitle = document.querySelector('.profile__title');
const profileDescr = document.querySelector('.profile__description');
let userId;
//Инпут формы редактирования аватара профиля
const profileAvatarInput = document.querySelector('.popup__input_type_avatar-url');
//Инпуты формы редактирования профиля
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileJobInput = document.querySelector('.popup__input_type_description');
//Инпуты формы добавления карточки
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_url');
//Переменные связанные с валидацией
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}; 

//API. Вызов карточек с сервера и отображение их на странице
Promise.all([getUserInfo(), getInitialCards()])
  .then(([user, arr]) => {
    profileTitle.textContent = user.name;
    profileDescr.textContent = user.about;
    userId = user._id;

    renderAvatar(user.avatar);

    arr.forEach((card) => {    
        cardsContainer.append(renderCard(card, userId, deleteMyCard, toggleLike, openImageModal));
    });
  })
  .catch((err) => {
    console.log(`Ошибка: ${err} в функции добавления всех карточек на страницу`);
  });

//Функция, которая добавляет ссылку на аварат профиля в стили
function renderAvatar(avatarLink) {
  profileAvatar.style.background = `url(${avatarLink}) center center/cover no-repeat`;
}

//Функция, которая сообщяет пользователю о загрузке данных
function renderLoading(isLoading) {
  popupButtons.forEach(btn => {
    if (isLoading) {
      btn.textContent = 'Сохранение...'
    } else if (!isLoading) {
      btn.textContent = 'Сохранить';
    }
  })
}

//Вызов функции закрытия модальных окон по оверлею и крестику
closeModalByOverlayAndButton(modals);

//Добавление плавной анимации открытия и закрытия модальных окон
modals.forEach((modal) => {
    modal.classList.add('popup_is-animated');
});

//Функция открытия модального окна для аватара
function openAvatarModal() {
  formAvatar.reset();
  openModal(popupProfileAvatar);
  clearValidation(formAvatar, validationConfig);
}
//Вызов функции открытия модального окна для аватара
avatarBtn.addEventListener('click', openAvatarModal);

//Функция обработки формы аватара
function handleFormNewAvatarSubmit(evt) {
  evt.preventDefault();
  renderLoading(true);
  uploadNewAvatar(profileAvatarInput.value)
  .then((data) => {
    renderAvatar(data.avatar);
    closeModal(popupProfileAvatar);
    evt.target.reset();
  })
  .catch((err) => {
    console.log(`Ошибка: ${err} в функции обработки добавления нового аватара`)
  })
  .finally(() => {
    renderLoading(false)
  })
}

//Функция открытия модального окна редактировая профиля
function openEditProfileModal(profileTitle, profileDescr, profileNameInput, profileJobInput) {
  profileNameInput.value = profileTitle.textContent;
  profileJobInput.value = profileDescr.textContent;
  clearValidation(formProfile, validationConfig);
  openModal(popupProfileEdit);
}

//Вызов функции открытия модального окна редактирования профиля
profileEditBtn.addEventListener('click', () => {
  openEditProfileModal(profileTitle, profileDescr, profileNameInput, profileJobInput, popupProfileEdit);
});

//Функция обработки формы профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  renderLoading(true);
  updateProfileInfo(profileNameInput.value, profileJobInput.value)
  .then(() => {
    profileTitle.textContent = profileNameInput.value;
    profileDescr.textContent = profileJobInput.value;
    closeModal(popupProfileEdit);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err} в функции обработки редактирования профиля`)
  })
  .finally(() => {
    renderLoading(false)
  })
}

//Функция, которая добавляет новую карточку на страницу
function handleFormNewCardSubmit(evt, cardNameInput, cardLinkInput) {
  evt.preventDefault();
  renderLoading(true);
  uploadNewCard(cardNameInput.value, cardLinkInput.value)
  .then((data) => {
    cardsContainer.prepend(renderCard(data, userId, deleteMyCard, toggleLike, openImageModal));
    closeModal(popupNewCard);
    evt.target.reset();
  })
  .catch((err) => {
    console.log(`Ошибка: ${err} в функции обработки добавления новой карточки`)
  })
  .finally(() => {
    renderLoading(false)
  })
}

//Функция открытия модального окна для добавления карточки
function openFormNewCardModal() {
  formPlace.reset();
  openModal(popupNewCard);
  clearValidation(formPlace, validationConfig);
}

//Вызов функции открытия модального окна добавления карточки
addCardBtn.addEventListener('click', openFormNewCardModal);

//Вызов функций по обработке форм
formAvatar.addEventListener('submit', (evt) => handleFormNewAvatarSubmit(evt));

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
    captionImage.textContent = titleImage;
    openModal(popupImage);
}

//Вызов функции валидации всех форм
enableValidation(validationConfig); 
