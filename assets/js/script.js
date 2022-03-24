var happy = document.querySelector("#happy");
var playBtn1 = document.querySelector("#button1");
var playBtn2 = document.querySelector("#button2");
// var detailsBtn = document.querySelector(".");
var title1 = document.querySelector("#card-title1");
var cardBody1 = document.querySelector("#card-body1");
var cardGenre1 = document.querySelector("#card-genre1");
var cardContainer = document.querySelector(".card-container");
var userUrl = "https://freesound.org/apiv2/users/";
var apiUrl1 =
  "https://freesound.org/apiv2/sounds/560446/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var apiUrl2 =
  "https://freesound.org/apiv2/sounds/609562/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var picUrl1 =
  "https://freesound.org/apiv2/users/Migfus20/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var picUrl2 =
  "https://freesound.org/apiv2/users/Migfus20/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";

var playUrl1 =
  "https://freesound.org/apiv2/sounds/560446/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var playUrl2 =
  "https://freesound.org/apiv2/sounds/609562/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var apiKey = "WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var testUrl =
  "https://freesound.org/apiv2/search/text/?query=happy&token=" + apiKey;

function getPic1() {
  fetch(picUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var stockPic = document.querySelector(".card").style.backgroudImage;
      var picContent = document.querySelector("#card-content1");
      var pic = document.createElement("img");
      pic.src = data.avatar.large;
      picContent.append(pic);
      document.querySelector(".card").style.backgroudImage =
        "url(" + data.avatar.large + ")";
      document.querySelector(".card").style.backgroudSize = "cover";
      getDets1();
    });
}

function getDets1() {
  fetch(apiUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      title1.textContent = data.name;
      cardBody1.textContent = "Artist: " + data.username;
      cardGenre1.textContent = "Genre: " + data.tags[0];
      getPic2();
    });
}

function getPic2() {
  fetch(picUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content2");
      var pic = document.createElement("img");
      pic.src = data.avatar.large;
      picContent.append(pic);
      getDets2();
    });
}
function getDets2() {
  fetch(apiUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title2").textContent = data.name;
      document.querySelector("#card-body2").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre2").textContent =
        "Genre: " + data.tags[0];
    });
}

// FIRST SONG
fetch(playUrl1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music1 = new Audio(data.previews["preview-hq-mp3"]);
  });

function playMusic1() {
  console.log("play");
  fetch(playUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (music1.paused) {
        music1.play();
        playBtn1.innerText = "Pause";
        console.log(music1.paused);
      } else {
        console.log("pause");
        music1.pause();
        playBtn1.innerText = "Play";
      }
    });
}

// SECOND SONG
fetch(playUrl2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music2 = new Audio(data.previews["preview-hq-mp3"]);
  });

function playMusic2() {
  console.log("play");
  fetch(playUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (music2.paused) {
        music2.play();
        playBtn2.innerText = "Pause";
        console.log(music2.paused);
      } else {
        console.log("pause");
        music2.pause();
        playBtn2.innerText = "Play";
      }
    });
}
// function similarSounds() {
//   console.log("similar");
//   fetch(playUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       fetch(data.similar_sounds + "?token=" + apiKey)
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           console.log(data);

//         //   for (var i = 1; i < 5; i++) {
//         //     var card = document.createElement("div");
//         //     card.classList = "card";
//         //     var titleH2 = document.createElement("h2");
//         //     titleH2.classList = "card-title";
//         //     var cardBodyLoop = document.createElement("p");
//         //     cardBodyLoop.classList = "card-body";
//         //     titleH2.textContent = data.results[i].name;
//         //     cardBodyLoop.textContent = "Artist: " + data.results[i].username;
//         //     var cardGenreLoop = document.createElement("p");
//         //     cardGenreLoop.classList = "card-genre";
//         //     cardGenreLoop.textContent = "Genre: " + data.results[i].tags[0];
//         //     cardContainer.append(card);
//         //     card.append(titleH2);
//         //     titleH2.append(cardBodyLoop);
//         //     cardBodyLoop.append(cardGenreLoop);

//             // fetch(userUrl + data.results[i].username + "/?token=" + apiKey)
//             //   .then(function (response) {
//             //     return response.json();
//             //   })
//             //   .then(function (data) {
//             //     var card = document.createElement("div");
//             //     card.classList = "card";
//             //     var avatar = document.createElement("img");
//             //     avatar.src = data.avatar.large;
//             //     cardContainer.append(card);
//             //     card.append(avatar);
//             //   });

//             // var card = document.createElement("div");
//             // card.classList = "card";
//             // var titleH2 = document.createElement("h2");
//             // titleH2.textContent = data.results[i].name;
//             // cardContainer.append(title);

//             // var list = document.querySelector(".list");
//             // var fact = document.createElement("li");
//             // var fact2 = document.createElement("li");
//             // var fact3 = document.createElement("li");
//             // var blank = document.createElement("li");
//             // fact.textContent = data.results[i].username;
//             // fact2.textContent = data.results[i].name;
//             // fact3.textContent = data.results[i].tags[0];
//             // list.append(fact);
//             // list.append(fact2);
//             // list.append(fact3);
//             // list.append(blank);
//           }
//         });
//     });
// }

happy.addEventListener("click", getPic1);
// detailsBtn.addEventListener("click", getPic);
playBtn1.addEventListener("click", playMusic1);
playBtn2.addEventListener("click", playMusic2);
