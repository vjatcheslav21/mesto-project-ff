import {closeModal} from "./modal";

const profileName = document.querySelector('.profile__title');
const profileDescr = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const popupProfileEdit = document.querySelector('.popup_type_edit');

nameInput.value = profileName.innerHTML;
jobInput.value = profileDescr.innerHTML;

function handleFormSubmit(evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileDescr.textContent = jobInput.value;

    closeModal(popupProfileEdit);
}

export {handleFormSubmit};