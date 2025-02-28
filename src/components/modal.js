function openModal(modal) {
    modal.classList.add('popup_is-opened');
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

function toggleModal(item, modal) {

    item.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('profile__edit-button') || evt.target.classList.contains('profile__add-button') || evt.target.classList.contains('card__image')) {
            openModal(modal);
        }
    });

    modal.addEventListener('mousedown', (evt) => {
        if (evt.target === modal || evt.target.classList.contains('popup__close')) {
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', handleEscape);

    modal.classList.add('popup_is-animated');

}

export {toggleModal, openModal, closeModal};