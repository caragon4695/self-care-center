var receiveMessageBtn = document.querySelector('.receive-message');
var meditateImage = document.querySelector('.meditate-image');
var message = document.querySelector('.message');
var affirmRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var favoriteBtn = document.querySelector('.favorite');
var viewFavorites = document.querySelector('.view-favorites');
var favoriteMsgs = document.querySelector('.favorite-messages');

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

affirmRadio.addEventListener('click', function() {
  affirmRadio.checked = true;
})

mantraRadio.addEventListener('click', function() {
  mantraRadio.checked = true;
})

receiveMessageBtn.addEventListener('click', printMessage);
favoriteBtn.addEventListener('click', favoriteMessage);
viewFavorites.addEventListener('click', favoriteMsgsPage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var mantra = mantras[getRandomIndex(mantras)];
var affirmation = affirmations[getRandomIndex(affirmations)];

function showButton() {
  favoriteBtn.classList.remove('hidden');
};

function hideImage() {
  meditateImage.classList.add('hidden');
};

function toggle(form) {
  favoriteMsgs.classList.toggle('hidden');
}

function printMessage() {
  event.preventDefault();
  if (affirmRadio.checked === true) {
    hideImage();
    message.innerText = affirmation;
    showButton();
  } else if (mantraRadio.checked === true) {
    hideImage();
    message.innerText = mantra;
    showButton();
  } else {
  }
};


function favoriteMessage() {
  if(message.innerText === affirmation
    && !savedMessages.includes(affirmation)) {
    savedMessages.push(affirmation);
  } else if (message.innerText === mantra
    && !savedMessages.includes(mantra)) {
    savedMessages.push(mantra);
  }
};

function favoriteMsgsPage() {
  toggle();
}
