//Кофиг с данными, которые удобно переиспользовать
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-34',
    headers: {
      authorization: 'f6e14b62-7ca7-405c-be33-7e7af4f9d67f',
      'Content-Type': 'application/json'
    }
}

//Универсальная функция получения данных в json формате
function checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

//Получение данных пользователя с сервера
function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(checkResponse)
}

//Получение массива карточек с сервера
function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(checkResponse)
}

//Отправка на сервер обновленного имени и описания
function updateProfileInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ name, about })
  })
  .then(checkResponse)
}

//Загрузка новой карточки на сервер
function uploadNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ name, link }),
  })
  .then(checkResponse)
}

//Удаление карточки из массива на сервере
function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
}

//Функция, которая добавляет пользователя в список тех, кто поставил лайк карточке
function addLikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(checkResponse)
}

//Функция, которая удаляет пользователя из списка тех, кто поставил лайк карточке
function deleteLikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
}

//Отправка на сервер обновленного аватара
function uploadNewAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ avatar }),
  })
  .then(checkResponse)
}

export {
  getInitialCards, 
  getUserInfo, 
  updateProfileInfo, 
  uploadNewCard, 
  deleteCard, 
  addLikeCard, 
  deleteLikeCard, 
  uploadNewAvatar
};
