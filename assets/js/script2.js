var body = document.querySelector("body");
var moodContainer = document.querySelector("#buttons");
var cardContainer = document.createElement("div");
var categorySelection = "Happy";
var apiKey = "ELptJk3uxFNf0EIbrCQTL6C3nalxj50aJCQ312on";

var picUrl1 = "https://freesound.org/apiv2/users/Migfus20/?token=" + apiKey;
var picUrl2 = "https://freesound.org/apiv2/users/Migfus20/?token=" + apiKey;

var moodCategories = [
  {
    name: "Happy",
    cards: [
      {
        name: "Happy Background Music",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
        artist: "Migfus 20",
        genre: "Happy",
        avatar: fetch(picUrl1)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            data.avatar.large;
          }),
      },
      {
        name: "Background Music",
        songUrl: `https://freesound.org/data/previews/609/609562_12295155-lq.mp3`,
        artist: "Migfus 20",
        genre: "Piano",
        avatar: fetch(picUrl2)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            return data.avatar.large;
          }),
      },
    ],
    name: "Sad",
    cards: [
      {
        name: "Sad Music",
        songUrl: `https://freesound.org/data/previews/559/559834_12295155-lq.mp3`,
        artist: "Migfus 20",
        genre: "Sad",
        avatar: fetch(picUrl2)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            return data.avatar.large;
          }),
      },
    ],
  },
];

var createCardEl = (cardDetails) => {
  var cardEl = document.createElement("div");
  var cardName = document.querySelectorAll(".card-title");
  var cardUser = document.querySelectorAll(".card-body");
  var cardGenre = document.querySelectorAll(".card-genre");
  var audioEl = document.createElement("audio");
  var breaker = document.createElement("br");
  var cardImage = document.createElement("img");
  cardEl.classList.add("card", "card:hover", "card:focus-within");
  for (var i = 0; i < cardName.length; i++) {
    console.log(cardImage);
    console.log(cardDetails.avatar.data);
    var songTitle = cardName[i].innerHTML;
    var songArtist = cardUser[i].innerHTML;
    var songGenre = cardGenre[i].innerHTML;
    var songAvatar = cardImage;
    cardImage.src = cardDetails.avatar;
    songTitle = cardDetails.name;
    songArtist = cardDetails.artist;
    songGenre = cardDetails.genre;
    songAvatar.src = cardDetails.avatar;
    audioEl.src = cardDetails.songUrl;
    console.log(cardDetails.avatar);

    audioEl.setAttribute("controls", true);

    cardEl.append(
      songTitle,
      breaker,
      songArtist,
      breaker,
      songGenre,
      songAvatar,
      audioEl
    );
    return cardEl;
  }
};

var createCategoriesAndCards = (categories) => {
  categories.forEach((category) => {
    var categoryEl = document.querySelectorAll(".button");

    if (category.name === categorySelection) {
      category.cards.forEach((cardInfo) =>
        cardContainer.append(createCardEl(cardInfo))
      );
    } else {
      console.log("bunt");
    }
  });
  moodContainer.append(cardContainer);
};

// createCategoriesAndCards(moodCategories);

moodContainer.addEventListener("click", function (e) {
  if (e.target.id !== categorySelection && e.target.id === "Happy")
    categorySelection = "Happy";
  if (e.target.id !== categorySelection && e.target.id === "Sad")
    categorySelection = "Sad";
  if (e.target.id !== categorySelection && e.target.id === "Confident")
    categorySelection = "Confident";
  if (e.target.id !== categorySelection && e.target.id === "Calm")
    categorySelection = "Calm";
  if (e.target.id !== categorySelection && e.target.id === "Amped")
    categorySelection = "Amped";
  if (e.target.id !== categorySelection && e.target.id === "Random")
    categorySelection = "Random";

  createCategoriesAndCards(moodCategories);
});

document.addEventListener(
  "play",
  function (e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);

//
//
//
//
//
// DAVON's JS

const targetDiv = document.getElementById("container");
const btnHappy = document.getElementById("happy");
const btnSad = document.getElementById("sad");
const btnConfident = document.getElementById("confident");
const btnCalm = document.getElementById("calm");
const btnAmped = document.getElementById("amped");
const btnRandom = document.getElementById("random");

function showHappy() {
  targetDiv.classList.remove("hide");
}

function showSad() {
  targetDiv.classList.remove("hide");
}

function showConfident() {
  targetDiv.classList.remove("hide");
}

function showCalm() {
  targetDiv.classList.remove("hide");
}

function showAmped() {
  targetDiv.classList.remove("hide");
}

function showRandom() {
  targetDiv.classList.remove("hide");
}
