import { deleteCard, addLikeCard, deleteLikeCard } from "./api";

const cardsContainer = document.querySelector('.places__list');

function renderCard(card, userId, deleteMyCard, toggleLike, openImageModal) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__like-count');
  const cardId = card._id;
  const cardOwnerId = card.owner._id;
    if (userId !== cardOwnerId) {   
      deleteButton.remove();
    } 
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
    likeCount.textContent = card.likes.length;
    deleteButton.addEventListener('click', () => deleteMyCard(cardElement, cardOwnerId, userId, cardId));
    likeButton.addEventListener('click', (evt) => toggleLike(evt, cardId, likeCount));
    cardImage.addEventListener('click', openImageModal);
    return cardElement;
}

function deleteMyCard(cardElement, cardOwnerId, userId, cardId) {
  if(cardOwnerId === userId) {
    cardElement.remove();
    deleteCard(cardId)
  }
}

function toggleLike(evt, cardId, likeCount) {
  const btnLikeActive = evt.target.classList.contains('card__like-button_is-active');
  if (!btnLikeActive) {
    addLikeCard(cardId)
      .then(data => {
        evt.target.classList.add('card__like-button_is-active');
        likeCount.textContent = data.likes.length;
      })
  } else {
    deleteLikeCard(cardId)
      .then(data => {
        evt.target.classList.remove('card__like-button_is-active');
        likeCount.textContent = data.likes.length;
      })
  }
}

export {
        cardsContainer,
        renderCard,
        deleteMyCard,
        toggleLike
      };

