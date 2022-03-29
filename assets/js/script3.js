const body = document.querySelector("body");
const categoryContainer = document.createElement("div");
const cardContainer = document.createElement("div");

let categorySelection = "Happy";

const API_KEY = "OU8ysrSIuv6GIneyfOOSZVqsOByDM0jZFkUC5Pca";

const moodCategories = [
  {
    name: "Happy",
    cards: [
      {
        name: "Happy card1",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
      {
        name: "Happy card2",
        songUrl: `https://freesound.org/data/previews/609/609562_12295155-lq.mp3`,
      },
      {
        name: "Happy card3",
        songUrl: `https://freesound.org/data/previews/609/609562_12295155-lq.mp3`,
      },
      {
        name: "Happy card4",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
      {
        name: "Happy card5",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
    ],
  },
  {
    name: "Sad",
    cards: [
      {
        name: "Sad card1",
        songUrl: `https://freesound.org/data/previews/609/609562_12295155-lq.mp3`,
      },
      {
        name: "Sad card2",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
      {
        name: "Sad card3",
        songUrl: `https://freesound.org/data/previews/609/609562_12295155-lq.mp3`,
      },
      {
        name: "Sad card4",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
      {
        name: "Sad card5",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
    ],
  },
  {
    name: "Bored",
    cards: [
      {
        name: "Bored card1",
        songUrl: `https://freesound.org/data/previews/609/609562_12295155-lq.mp3`,
      },
      {
        name: "Bored card2",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
      {
        name: "Bored card3",
        songUrl: `https://freesound.org/data/previews/609/609562_12295155-lq.mp3`,
      },
      {
        name: "Bored card4",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
      {
        name: "Bored card5",
        songUrl: `https://freesound.org/data/previews/560/560446_12295155-lq.mp3`,
      },
    ],
  },
];

const createCardEl = (cardDetails) => {
  const cardEl = document.createElement("div");
  const cardName = document.createElement("h3");
  const audioEl = document.createElement("audio");

  cardName.textContent = cardDetails.name;
  audioEl.src = cardDetails.songUrl;
  audioEl.setAttribute("controls", true);

  cardEl.append(cardName, audioEl);
  return cardEl;
};

const createCategoriesAndCards = (categories) => {
  categoryContainer.textContent = "";
  categories.forEach((category) => {
    const categoryEl = document.createElement("button");
    categoryEl.id = category.name;
    categoryEl.innerText = category.name;
    categoryContainer.append(categoryEl);

    if (category.name === categorySelection) {
      cardContainer.textContent = "";
      category.cards.forEach((cardInfo) =>
        cardContainer.append(createCardEl(cardInfo))
      );
    }
  });
  categoryContainer.append(cardContainer);
  body.append(categoryContainer);
};

createCategoriesAndCards(moodCategories);

categoryContainer.addEventListener("click", function (e) {
  if (e.target.id !== categorySelection && e.target.id === "Sad")
    categorySelection = "Sad";
  if (e.target.id !== categorySelection && e.target.id === "Happy")
    categorySelection = "Happy";
  if (e.target.id !== categorySelection && e.target.id === "Bored")
    categorySelection = "Bored";

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
