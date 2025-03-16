//Функция, которая показывает ошибке
const showInputError = (formSelector, inputSelector, errorMessage, validationConfig) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

//Функция, которая скрывает ошибку
const hideInputError = (formSelector, inputSelector, validationConfig) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
};

//Функция, которая проверяет валидность данных
//и переключает отображение span с ошибкой
const isValid = (formSelector, inputSelector, validationConfig) => {
  if (inputSelector.validity.patternMismatch) {
    inputSelector.setCustomValidity(inputSelector.dataset.errorMessage);
  } else {
    inputSelector.setCustomValidity("");
  }

  if (!inputSelector.validity.valid) {
      showInputError(formSelector, inputSelector, inputSelector.validationMessage, validationConfig);
  } else {
      hideInputError(formSelector, inputSelector, validationConfig);
  }
};

//Функция, которая проверяет наличие невалидного поля
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  })
}; 

//Функция, которая переключает активность кнопки
const toggleButtonState = (inputList, submitButtonSelector, validationConfig) => {
  if (hasInvalidInput(inputList)) {
      submitButtonSelector.disabled = true;
      submitButtonSelector.classList.add(validationConfig.inactiveButtonClass);
  } else {
      submitButtonSelector.disabled = false;
      submitButtonSelector.classList.remove(validationConfig.inactiveButtonClass);
  }
}; 

//Функция, которая добавит обработчики сразу всем полям формы
const setEventListeners = (formSelector, validationConfig) => {
  const inputList = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector));
  const submitButtonSelector = formSelector.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, submitButtonSelector, validationConfig);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {
      isValid(formSelector, inputSelector, validationConfig);
      toggleButtonState(inputList, submitButtonSelector, validationConfig);
    });
  });
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formSelector, validationConfig);
  });
}

function clearValidation(formSelector, validationConfig) {
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  const submitButtonSelector = formSelector.querySelector('.popup__button');
  
  //Вызов функции переключения состояния кнопки
  toggleButtonState(inputList, submitButtonSelector, validationConfig);

  //Либо переключения состояния кнопки вручную
  // submitButtonSelector.disabled = true;
  // submitButtonSelector.classList.add(validationConfig.inactiveButtonClass);

  inputList.forEach(inputSelector => {
    hideInputError(formSelector, inputSelector, validationConfig);
  });

}

export {enableValidation, clearValidation};