var happy = document.querySelector("#happy");
var playBtn = document.querySelector(".btn");
// var detailsBtn = document.querySelector(".");
var title = document.querySelector("#card-title");
var cardBody = document.querySelector("#card-body");
var userUrl = "https://freesound.org/apiv2/users/";
var apiUrl =
  "https://freesound.org/apiv2/sounds/560446/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var picUrl =
  "https://freesound.org/apiv2/users/Migfus20/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var playUrl =
  "https://freesound.org/apiv2/sounds/560446/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var apiKey = "WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var testUrl =
  "https://freesound.org/apiv2/search/text/?query=happy&token=" + apiKey;

var audio = fetch();

function getPic() {
  fetch(picUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var stockPic = document.querySelector(".card").style.backgroudImage;
      var picContent = document.querySelector(".card-content");
      var pic = document.createElement("img");
      pic.src = data.avatar.large;
      picContent.append(pic);
      document.getElementById("card1").style.backgroudImage =
        "url(" + data.avatar.large + ")";
      getDets();
    });
}

function getDets() {
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      title.textContent = data.username;
      cardBody.textContent = "Title: " + data.name + " Genre: " + data.tags[0];

      //   var list = document.querySelector(".list");
      //   var fact = document.createElement("li");
      //   var fact2 = document.createElement("li");
      //   var fact3 = document.createElement("li");
      //   var blank = document.createElement("li");
      //   fact.textContent = data.username;
      //   fact2.textContent = data.name;
      //   fact3.textContent = data.tags[0];
      //   list.append(fact);
      //   list.append(fact2);
      //   list.append(fact3);
      //   list.append(blank);
      //   similarSounds();
    });
}

var music;

function switchPlayer() {
  var sounds = document.getElementsByTagName("audio");
  sounds.pause();
  fetch(playUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      music = new Audio(data.previews["preview-hq-mp3"]);

      if (music.paused) {
        music.play();
        playBtn.innerText = "Pause";
        console.log(music.paused);
      } else {
        console.log("pause");
        music.pause();
        playBtn.innerText = "Play";
      }
    });
}

function playMusic() {
  console.log("play");
  fetch(playUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      switchPlayer();
    });
}

function similarSounds() {
  console.log("similar");
  fetch(playUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.similar_sounds);
      fetch(data.similar_sounds + "?token=" + apiKey)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          for (var i = 1; i < data.results.length; i++) {
            fetch(userUrl + data.results[i].username + "/?token=" + apiKey)
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                var list = document.querySelector(".list");
                var pic = document.createElement("img");
                pic.src = data.avatar.large;
                list.append(pic);
              });
            var list = document.querySelector(".list");
            var fact = document.createElement("li");
            var fact2 = document.createElement("li");
            var fact3 = document.createElement("li");
            var blank = document.createElement("li");
            fact.textContent = data.results[i].username;
            fact2.textContent = data.results[i].name;
            fact3.textContent = data.results[i].tags[0];
            list.append(fact);
            list.append(fact2);
            list.append(fact3);
            list.append(blank);
          }
        });
    });
}

happy.addEventListener("click", getPic);
// detailsBtn.addEventListener("click", getPic);
playBtn.addEventListener("click", playMusic);
