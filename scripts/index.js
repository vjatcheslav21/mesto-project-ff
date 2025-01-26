// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');

function renderCards({name, link}) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').setAttribute('alt', name);

  deleteButton.addEventListener("click", () => deleteCard(cardElement));
    
  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

initialCards.map(renderCards).forEach(item => cardsContainer.append(item));
  


