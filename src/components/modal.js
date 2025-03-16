// import { hideInputError } from "../scripts";

function openModal(modal) {
    modal.classList.add('popup_is-opened');
    // hideInputError(formSelector, inputSelector);
    document.addEventListener('keydown', handleEscape); 
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscape); 
}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
}

function closeModalByOverlayAndButton(popups) {
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_is-opened')) {
                closeModal(popup);
            }
            if (evt.target.classList.contains('popup__close')) {
              closeModal(popup);
            }
        });
    });
}

export {openModal, closeModal, closeModalByOverlayAndButton};