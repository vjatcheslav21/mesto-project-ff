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

function openEditProfileModal(profileTitle, profileDescr, profileNameInput, profileJobInput, modal) {

    profileNameInput.value = profileTitle.textContent
    profileJobInput.value = profileDescr.textContent;

    openModal(modal);
}

function openImageModal(evt, popImage, caption, modal) {
    const parent = evt.target.closest('.places__item');
    const titleImage = parent.querySelector('.card__title').textContent;
    popImage.src = evt.target.src;
    popImage.alt = titleImage;
    caption.textContent= titleImage;
    openModal(modal);
}

function closeModalByOverlayAndButton(popups) {
    //Я не уверен, что это лучшее название для функции :(
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

export {openModal, closeModal, openEditProfileModal, openImageModal, closeModalByOverlayAndButton};