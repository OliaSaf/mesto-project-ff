// @todo: Темплейт карточки

const container = document.querySelector(".content");
const cardsContainer = container.querySelector(".places__list");

// @todo: DOM узлы

const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки

function addCard(element, deleteCard) {
  let cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  cardElement.querySelector(".card__title").textContent = element.name;
  cardElement.querySelector(".card__image").src = element.link;
  cardElement.querySelector(".card__image").alt = element.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (element) {
  const cardElement = addCard(element, deleteCard);
  cardsContainer.append(cardElement);
});
