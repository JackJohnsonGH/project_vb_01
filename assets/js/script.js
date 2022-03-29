var happy = document.querySelector("#happy");
var playBtn1 = document.querySelector("#button1");
var playBtn2 = document.querySelector("#button2");
var playBtn3 = document.querySelector("#button3");
var playBtn4 = document.querySelector("#button4");
var playBtn5 = document.querySelector("#button5");
var title1 = document.querySelector("#card-title1");
var cardBody1 = document.querySelector("#card-body1");
var cardGenre1 = document.querySelector("#card-genre1");
var cardContainer = document.querySelector(".card-container");
var userUrl = "https://freesound.org/apiv2/users/";

// HAPPY
var picUrl1 =
  "https://freesound.org/apiv2/users/Migfus20/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var picUrl2 =
  "https://freesound.org/apiv2/users/Migfus20/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var picUrl3 =
  "https://freesound.org/apiv2/users/InspectorJ/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var picUrl4 =
  "https://freesound.org/apiv2/users/edtijo/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var picUrl5 =
  "https://freesound.org/apiv2/users/cabled_mess/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";

// SAD
var picUrl6 =
  "https://freesound.org/apiv2/users/Migfus20/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";

// HAPPY
var playUrl1 =
  "https://freesound.org/apiv2/sounds/560446/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var playUrl2 =
  "https://freesound.org/apiv2/sounds/609562/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var playUrl3 =
  "https://freesound.org/apiv2/sounds/411165/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var playUrl4 =
  "https://freesound.org/apiv2/sounds/240376/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var playUrl5 =
  "https://freesound.org/apiv2/sounds/335361/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";

// SAD
var playUrl6 =
  "https://freesound.org/apiv2/sounds/559834/?token=WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";

var apiKey = "WQG0rpvXpgS6UJ0x1cigSmQIh0rpUThXm0PTZ6ea";
var testUrl =
  "https://freesound.org/apiv2/search/text/?query=happy&token=" + apiKey;

document.addEventListener("DOMContentLoaded", () => {
  moodTabs();

  function moodTabs() {
    document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("click", () => {
        switch (button.id) {
          case "happy":
            getPic1();
            playBtn1.addEventListener("click", playMusic1);
            playBtn2.addEventListener("click", playMusic2);
            playBtn3.addEventListener("click", playMusic3);
            playBtn4.addEventListener("click", playMusic4);
            playBtn5.addEventListener("click", playMusic5);
            break;
          case "sad":
            getPic6();
            playBtn1.addEventListener("click", playMusic6);
            console.log("this");

            break;
        }
      });
    });
  }
});

function getPic1() {
  fetch(picUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content1");
      var pic = document.querySelector("#img1");
      pic.src = data.avatar.large;
      //   document.body.style.backgroudImage = "url('" + data.avatar.large + "')";
      //   document.querySelector(".card").style.backgroudSize = "cover";
      getDets1();
    });
}

function getDets1() {
  fetch(playUrl1)
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
      var pic = document.querySelector("#img2");
      pic.src = data.avatar.large;
      getDets2();
    });
}
function getDets2() {
  fetch(playUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title2").textContent = data.name;
      document.querySelector("#card-body2").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre2").textContent =
        "Genre: " + data.tags[0];
      getPic3();
    });
}

function getPic3() {
  fetch(picUrl3)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content3");
      var pic = document.querySelector("#img3");
      pic.src = data.avatar.large;
      getDets3();
    });
}

function getDets3() {
  fetch(playUrl3)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title3").textContent = data.name;
      document.querySelector("#card-body3").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre3").textContent =
        "Genre: " + data.tags[0];
      getPic4();
    });
}

function getPic4() {
  fetch(picUrl4)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content4");
      var pic = document.querySelector("#img4");
      pic.src = data.avatar.large;
      getDets4();
    });
}

function getDets4() {
  fetch(playUrl4)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title4").textContent = data.name;
      document.querySelector("#card-body4").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre4").textContent =
        "Genre: " + data.tags[0];
      getPic5();
    });
}

function getPic5() {
  fetch(picUrl5)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content5");
      var pic = document.querySelector("#img5");
      pic.src = data.avatar.large;
      getDets5();
    });
}

function getDets5() {
  fetch(playUrl5)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title5").textContent = data.name;
      document.querySelector("#card-body5").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre5").textContent =
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

// THIRD SONG
fetch(playUrl3)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music3 = new Audio(data.previews["preview-hq-mp3"]);
  });

function playMusic3() {
  fetch(playUrl3)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music3.paused) {
        music3.play();
        playBtn3.innerText = "Pause";
      } else {
        music3.pause();
        playBtn3.innerText = "Play";
      }
    });
}

// FOURTH SONG
fetch(playUrl4)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music4 = new Audio(data.previews["preview-hq-mp3"]);
  });

function playMusic4() {
  fetch(playUrl4)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music4.paused) {
        music4.play();
        playBtn4.innerText = "Pause";
      } else {
        music4.pause();
        playBtn4.innerText = "Play";
      }
    });
}

// FIFTH SONG
fetch(playUrl5)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music5 = new Audio(data.previews["preview-hq-mp3"]);
  });

function playMusic5() {
  fetch(playUrl5)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music5.paused) {
        music5.play();
        playBtn5.innerText = "Pause";
      } else {
        music5.pause();
        playBtn5.innerText = "Play";
      }
    });
}

// ******---- END OF HAPPY PAGE ----******

function getPic6() {
  fetch(picUrl6)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content1");
      var pic = document.querySelector("#img1");
      pic.src = data.avatar.large;
      getDets6();
    });
}

function getDets6() {
  fetch(playUrl6)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title1").textContent = data.name;
      document.querySelector("#card-body1").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre1").textContent =
        "Genre: " + data.tags[0];
      console.log(data);
    });
}

// SIXTH SONG

fetch(playUrl6)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music6 = new Audio(data.previews["preview-hq-mp3"]);
  });

function playMusic6() {
  fetch(playUrl6)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music6.paused) {
        music6.play();
        playBtn1.innerText = "Pause";
      } else {
        music6.pause();
        playBtn1.innerText = "Play";
      }
    });
}

// happy.addEventListener("click", getPic1);
// detailsBtn.addEventListener("click", getPic);
// playBtn1.addEventListener("click", playMusic1);
// playBtn2.addEventListener("click", playMusic2);
// playBtn3.addEventListener("click", playMusic3);
// playBtn4.addEventListener("click", playMusic4);
// playBtn5.addEventListener("click", playMusic5);

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
