function openModal(modal) {
    modal.classList.add('popup_is-opened');
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
}

function toggleModal(item, modal) {

    item.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('profile__edit-button') || evt.target.classList.contains('profile__add-button') || evt.target.classList.contains('card__image')) {
            openModal(modal);
        }
    });

    modal.addEventListener('click', (evt) => {
        if (evt.target === modal || evt.target.classList.contains('popup__close')) {
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape' && modal.classList.contains('popup_is-opened')) {
            closeModal(modal);
        }
    });

    modal.classList.add('popup_is-animated');
}

export {toggleModal, openModal, closeModal};