// function openModal(item, modal) {
//     item.addEventListener('click', () => {
//         modal.classList.add('popup_is-opened');
//     })
// }

// function closeModal(modal) {
//     modal.classList.remove('popup_is-opened');
//         modal.addEventListener('click', (evt) => {
//                 if (evt.target === modal || evt.target.classList.contains('popup__close')) {
//                     closeModal(modal);
//                 }
//             });
        
//             document.addEventListener('keydown', (evt) => {
//                 if (evt.code === 'Escape' && modal.classList.contains('popup_is-opened')) {
//                     closeModal(modal);
//                 }
//             });
// }

function openModal(modal) {
    modal.classList.add('popup_is-opened');
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
}

function toggleModal(item, modal) {

    item.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains('card__delete-button')) {
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
    
}

export default toggleModal;
export {closeModal};