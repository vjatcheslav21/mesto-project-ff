import {closeModal} from "./modal";

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescr = document.querySelector('.profile__description');
const placeInput = document.querySelector('.popup__input_type_card-name');
const placeURLInput = document.querySelector('.popup__input_type_url');

nameInput.value = profileName.innerHTML;
jobInput.value = profileDescr.innerHTML;


function handleFormSubmit(evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileDescr.textContent = jobInput.value;

    console.log('Отправка!')
    closeModal();
}

export {handleFormSubmit};