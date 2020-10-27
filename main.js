class Message {
  constructor(message) {
    this.message = message;
  }
};

var receiveMessageBtn = document.querySelector('.receive-message');
var meditateImage = document.querySelector('.meditate-image');
var message = document.querySelector('.message');
var affirmRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var favoriteBtn = document.querySelector('.favorite');
var viewFavorites = document.querySelector('.view-favorites');
var favoriteMsgs = document.querySelector('.favorite-messages');
var mainPage = document.querySelector('.main-page');
var goBack = document.querySelector('button.favorites');
var favoritesList = document.querySelector('.favorite-messages-list');
var clearBtn = document.querySelector('.clear');
document
  .querySelector(".favorites-list")
  .addEventListener(
    "click", deleteFavMessage);

var affirmations = [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.'
]
var mantras = [
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.'
]
var savedMessages = [];
var currentMessage;

receiveMessageBtn.addEventListener('click', receiveMessage);
favoriteBtn.addEventListener('click', favoriteMessage);
viewFavorites.addEventListener('click', showFavoriteMessages);
goBack.addEventListener('click', favoriteMessagesPage);
clearBtn.addEventListener('click', clearMessage);

affirmRadio.addEventListener('click', function() {
  affirmRadio.checked = true;
  if (affirmRadio.checked) {
    receiveMessageBtn.removeAttribute('disabled');
  }
});

mantraRadio.addEventListener('click', function() {
  mantraRadio.checked = true;
  if (mantraRadio.checked) {
    receiveMessageBtn.removeAttribute('disabled');
  }
});

function removeHidden(button) {
  button.classList.remove('hidden');
};

function addHidden(image) {
  image.classList.add('hidden');
};

function toggle(page) {
  page.classList.toggle('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function printMessage() {
  if (affirmRadio.checked) {
    addHidden(meditateImage);
    currentMessage = new Message(affirmations[getRandomIndex(affirmations)])
    message.innerText = currentMessage.message;
    removeHidden(favoriteBtn);
  }else if (mantraRadio.checked) {
    addHidden(meditateImage);
    currentMessage = new Message(mantras[getRandomIndex(mantras)])
    message.innerText = currentMessage.message;
    removeHidden(favoriteBtn);
  }
};

function receiveMessage() {
  removeHidden(clearBtn);
  removeHidden(message);
  event.preventDefault();
  printMessage();
};

function favoriteMessage() {
  if(!savedMessages.includes(currentMessage)) {
    savedMessages.push(currentMessage);
  }
};

function favoriteMessagesPage() {
  toggle(favoriteMsgs);
  toggle(mainPage);
};

function showFavoriteMessages() {
  favoriteMessagesPage();
  favoritesList.innerHTML = '';
  for (var i = 0; i < savedMessages.length; i++) {
    favoritesList.innerHTML += `
    <li class="favorite-message">${savedMessages[i].message}
    <button class="delete">Delete</button></li>`
  }
};

function deleteFavMessage(event) {
  var favMsg = favoritesList.innerText
  favMsg = event.target.innerText;
  for(var i = 0; i < savedMessages.length; i++) {
    if (favMsg === savedMessages[i].message) {
      savedMessages.splice(i, 1);
    }
  }
};

function clearMessage() {
    addHidden(message);
    removeHidden(meditateImage);
    addHidden(favoriteBtn);
    addHidden(clearBtn);
    affirmRadio.checked = false;
    mantraRadio.checked = false;
};
