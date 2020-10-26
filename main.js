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
var favoritesList = document.querySelector('.favorites-list');
var deleteFav = document.querySelector('.delete');

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

affirmRadio.addEventListener('click', function() {
  affirmRadio.checked = true;
})

mantraRadio.addEventListener('click', function() {
  mantraRadio.checked = true;
})

receiveMessageBtn.addEventListener('click', printMessage);
favoriteBtn.addEventListener('click', favoriteMessage);
viewFavorites.addEventListener('click', showFavoriteMessages);
goBack.addEventListener('click', favoriteMsgsPage);
deleteFav.addEventListener('click', deleteFavMsg);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showButton() {
  favoriteBtn.classList.remove('hidden');
};

function hideImage() {
  meditateImage.classList.add('hidden');
};

function toggle(page) {
  page.classList.toggle('hidden');
};


function printMessage() {
  event.preventDefault();
  if (affirmRadio.checked) {
    hideImage();
    currentMessage = new Message(affirmations[getRandomIndex(affirmations)])
    message.innerText = currentMessage.message;
    showButton();
  }else if (mantraRadio.checked) {
    hideImage();
    currentMessage = new Message(mantras[getRandomIndex(mantras)])
    message.innerText = currentMessage.message;
    showButton();
  }
};

function favoriteMessage() {
  if(!savedMessages.includes(currentMessage.message)) {
    savedMessages.push(currentMessage);
  }
};

function favoriteMsgsPage() {
  toggle(favoriteMsgs);
  toggle(mainPage);
};

function showFavoriteMessages() {
  favoriteMsgsPage();
  favoritesList.innerHTML = '';
  for (var i = 0; i < savedMessages.length; i++) {
    favoritesList.innerHTML += `
    <li class="favorite-message">${savedMessages[i].message}
    <button class="delete">Delete</button></li>`
  }
};

function deleteFavMsg(event) {
  var favMsg = event.target.parentNode;
  for(var i = 0; i < savedMessages.length; i++) {
    if (favMsg === savedMessages[i].message) {
      savedMessages.splice(i, 1);
    }
  }
};
