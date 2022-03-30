// var happy = document.querySelector("#happy");
// var playBtn1 = document.querySelector("#button1");
// var playBtn2 = document.querySelector("#button2");
// var playBtn3 = document.querySelector("#button3");
// var playBtn4 = document.querySelector("#button4");
// var playBtn5 = document.querySelector("#button5");
var title1 = document.querySelector("#card-title1");
var cardBody1 = document.querySelector("#card-body1");
var cardGenre1 = document.querySelector("#card-genre1");
var cardContainer = document.querySelector(".card-container");
var breaker = document.createElement("br");
var userUrl = "https://freesound.org/apiv2/users/";
var apiKey = "Kn78OtOq7zbbpSf6jlYB9AQI4e9YBu18JuRR2L5B";

// HAPPY
var picUrl1 = "https://freesound.org/apiv2/users/Migfus20/?token=" + apiKey;
var picUrl2 = "https://freesound.org/apiv2/users/Migfus20/?token=" + apiKey;
var picUrl3 = "https://freesound.org/apiv2/users/InspectorJ/?token=" + apiKey;
var picUrl4 = "https://freesound.org/apiv2/users/edtijo/?token=" + apiKey;
var picUrl5 = "https://freesound.org/apiv2/users/cabled_mess/?token=" + apiKey;

// SAD
var picUrl6 = "https://freesound.org/apiv2/users/Migfus20/?token=" + apiKey;
var picUrl7 = "https://freesound.org/apiv2/users/Setuniman/?token=" + apiKey;
var picUrl8 = "https://freesound.org/apiv2/users/PSOVOD/?token=" + apiKey;
var picUrl9 = "https://freesound.org/apiv2/users/edtijo/?token=" + apiKey;
var picUrl10 = "https://freesound.org/apiv2/users/Dasgoat/?token=" + apiKey;

// CONFIDENT
var picUrl11 = "https://freesound.org/apiv2/users/nomadicxxl/?token=" + apiKey;
var picUrl12 = "https://freesound.org/apiv2/users/Cloud-10/?token=" + apiKey;
var picUrl13 = "https://freesound.org/apiv2/users/frankum/?token=" + apiKey;
var picUrl14 = "https://freesound.org/apiv2/users/frankum/?token=" + apiKey;
var picUrl15 = "https://freesound.org/apiv2/users/edtijo/?token=" + apiKey;

//CALM
var picUrl16 = "https://freesound.org/apiv2/users/ValentinSosnitskiy/?token=" + apiKey;
var picUrl17 = "https://freesound.org/apiv2/users/code_box/?token=" + apiKey;
var picUrl18 = "https://freesound.org/apiv2/users/ValentinSosnitskiy/?token=" + apiKey;
var picUrl19 = "https://freesound.org/apiv2/users/lindseysewell/?token=" + apiKey;
var picUrl20 = "https://freesound.org/apiv2/users/frederic.font/?token=" + apiKey;

// HAPPY
var playUrl1 = "https://freesound.org/apiv2/sounds/560446/?token=" + apiKey;
var playUrl2 = "https://freesound.org/apiv2/sounds/609562/?token=" + apiKey;
var playUrl3 = "https://freesound.org/apiv2/sounds/411165/?token=" + apiKey;
var playUrl4 = "https://freesound.org/apiv2/sounds/240376/?token=" + apiKey;
var playUrl5 = "https://freesound.org/apiv2/sounds/335361/?token=" + apiKey;

// SAD
var playUrl6 = "https://freesound.org/apiv2/sounds/559834/?token=" + apiKey;
var playUrl7 = "https://freesound.org/apiv2/sounds/150349/?token=" + apiKey;
var playUrl8 = "https://freesound.org/apiv2/sounds/415186/?token=" + apiKey;
var playUrl9 = "https://freesound.org/apiv2/sounds/238913/?token=" + apiKey;
var playUrl10 = "https://freesound.org/apiv2/sounds/330599/?token=" + apiKey;

// CONFIDENT
var playUrl11 = "https://freesound.org/apiv2/sounds/371803/?token=" + apiKey;
var playUrl12 = "https://freesound.org/apiv2/sounds/536250/?token=" + apiKey;
var playUrl13 = "https://freesound.org/apiv2/sounds/382063/?token=" + apiKey;
var playUrl14 = "https://freesound.org/apiv2/sounds/442285/?token=" + apiKey;
var playUrl15 = "https://freesound.org/apiv2/sounds/240028/?token=" + apiKey;

// CALM
var playUrl16 = "https://freesound.org/apiv2/sounds/493672/?token=" + apiKey;
var playUrl17 = "https://freesound.org/apiv2/sounds/595108/?token=" + apiKey;
var playUrl18 = "https://freesound.org/apiv2/sounds/278201/?token=" + apiKey;
var playUrl19 = "https://freesound.org/apiv2/sounds/512929/?token=" + apiKey;
var playUrl20 = "https://freesound.org/apiv2/sounds/130878/?token=" + apiKey;

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
            break;
          case "sad":
            getPic6();
            break;
          case "confident":
            getPic11();
            break;
          case "calm":
            getPic16();
            break;
          case "amped":
            getPic21();
            break;
          case "random":
            pickRandom();
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
      console.log(data.avatar.large);
      //   document.querySelector("#card1").style.backgroundImage =
      //     data.avatar.large;
      //   document.querySelector(".card").style.backgroundSize = "cover";
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
      var player = document.createElement("audio");
      player.src = music1;
      player.classList = "player";
      player.setAttribute("controls", true);
      cardGenre1.append(player);
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
      var player = document.createElement("audio");
      player.src = music2;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre2").append(player);
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
      var player = document.createElement("audio");
      player.src = music3;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre3").append(breaker, player);
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
      var player = document.createElement("audio");
      player.src = music4;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre4").append(breaker, player);
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
      var player = document.createElement("audio");
      player.src = music5;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre5").append(breaker, player);
    });
}

// FIRST SONG
fetch(playUrl1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music1 = data.previews["preview-hq-mp3"];
  });

function playMusic1() {
  fetch(playUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (music1.paused) {
        music1.play();
      } else {
        console.log("pause");
        music1.pause();
      }
    });
}

// SECOND SONG
fetch(playUrl2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music2 = data.previews["preview-hq-mp3"];
  });

function playMusic2() {
  var audios = document.getElementsByTagName("audio");
  console.log(audios);
  fetch(playUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (music2.paused) {
        music1.play();
        console.log(music2.paused);
      } else {
        console.log("pause");
        music1.pause();
      }
    });
}

// THIRD SONG
fetch(playUrl3)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music3 = data.previews["preview-hq-mp3"];
  });

  function playMusic3() {
    var audios = document.getElementsByTagName("audio");
    console.log(audios);
    fetch(playUrl3)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (music3.paused) {
          music1.play();
          console.log(music3.paused);
        } else {
          console.log("pause");
          music3.pause();
        }
      });
  }

// FOURTH SONG
fetch(playUrl4)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music4 = data.previews["preview-hq-mp3"];
  });

function playMusic4() {
  fetch(playUrl4)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music4.paused) {
        music4.play();
      } else {
        music4.pause();
      }
    });
}

// FIFTH SONG
fetch(playUrl5)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music5 = data.previews["preview-hq-mp3"];
  });

function playMusic5() {
  fetch(playUrl5)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music5.paused) {
        music5.play();
      } else {
        music5.pause();
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
      title1.textContent = data.name;
      cardBody1.textContent = "Artist: " + data.username;
      cardGenre1.textContent = "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music6;
      player.classList = "player";
      player.setAttribute("controls", true);
      cardGenre1.append(player);
      getPic7();
    });
}

function getPic7() {
  fetch(picUrl7)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content2");
      var pic = document.querySelector("#img2");
      pic.src = data.avatar.large;
      getDets7();
    });
}

function getDets7() {
  fetch(playUrl7)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title2").textContent = data.name;
      document.querySelector("#card-body2").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre2").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music7;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre2").append(player);
      getPic8();
    });
}

function getPic8() {
  fetch(picUrl8)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content3");
      var pic = document.querySelector("#img3");
      pic.src = data.avatar.large;
      getDets8();
    });
}

function getDets8() {
  fetch(playUrl8)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title3").textContent = data.name;
      document.querySelector("#card-body3").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre3").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music8;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre3").append(breaker, player);
      getPic9();
    });
}

function getPic9() {
  fetch(picUrl9)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content4");
      var pic = document.querySelector("#img4");
      pic.src = data.avatar.large;
      getDets9();
    });
}

function getDets9() {
  fetch(playUrl9)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title4").textContent = data.name;
      document.querySelector("#card-body4").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre4").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music9;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre4").append(breaker, player);
      getPic10();
    });
}

function getPic10() {
  fetch(picUrl10)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content5");
      var pic = document.querySelector("#img5");
      pic.src = data.avatar.large;
      getDets10();
    });
}

function getDets10() {
  fetch(playUrl10)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title5").textContent = data.name;
      document.querySelector("#card-body5").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre5").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music10;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre5").append(breaker, player);
    });
}

// SIXTH SONG

fetch(playUrl6)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music6 = data.previews["preview-hq-mp3"];
  });

function playMusic6() {
  fetch(playUrl6)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music6.paused) {
        music6.play();
      } else {
        music6.pause();
      }
    });
}

// SEVENTH SONG

fetch(playUrl7)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music7 = data.previews["preview-hq-mp3"];
  });

function playMusic7() {
  fetch(playUrl7)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music7.paused) {
        music7.play();
      } else {
        music7.pause();
      }
    });
}

// EIGHTH SONG

fetch(playUrl8)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music8 = data.previews["preview-hq-mp3"];
  });

function playMusic8() {
  fetch(playUrl8)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music8.paused) {
        music8.play();
      } else {
        music8.pause();
      }
    });
}

// NINTH SONG

fetch(playUrl9)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music9 = data.previews["preview-hq-mp3"];
  });

function playMusic9() {
  fetch(playUrl9)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music9.paused) {
        music9.play();
      } else {
        music9.pause();
      }
    });
}

// TENTH SONG

fetch(playUrl10)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music10 = data.previews["preview-hq-mp3"];
  });

function playMusic10() {
  fetch(playUrl10)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (music10.paused) {
        music10.play();
      } else {
        music10.pause();
      }
    });
}

// ******* --- END OF SAD PAGE --- *******

function getPic11() {
  fetch(picUrl11)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content1");
      var pic = document.querySelector("#img1");
      pic.src = data.avatar.large;
      getDets11();
    });
}

function getDets11() {
  fetch(playUrl11)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      title1.textContent = data.name;
      cardBody1.textContent = "Artist: " + data.username;
      cardGenre1.textContent = "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music11;
      player.classList = "player";
      player.setAttribute("controls", true);
      cardGenre1.append(player);
      getPic12();
    });
}

function getPic12() {
  fetch(picUrl12)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content2");
      var pic = document.querySelector("#img2");
      pic.src = data.avatar.large;
      getDets12();
    });
}

function getDets12() {
  fetch(playUrl12)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title2").textContent = data.name;
      document.querySelector("#card-body2").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre2").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music12;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre2").append(player);
      getPic13();
    });
}

function getPic13() {
  fetch(picUrl13)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content3");
      var pic = document.querySelector("#img3");
      pic.src = data.avatar.large;
      getDets13();
    });
}

function getDets13() {
  fetch(playUrl13)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title3").textContent = data.name;
      document.querySelector("#card-body3").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre3").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music13;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre3").append(breaker, player);
      getPic14();
    });
}

function getPic14() {
  fetch(picUrl14)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content4");
      var pic = document.querySelector("#img4");
      pic.src = data.avatar.large;
      getDets14();
    });
}

function getDets14() {
  fetch(playUrl14)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title4").textContent = data.name;
      document.querySelector("#card-body4").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre4").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music14;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre4").append(breaker, player);
      getPic15();
    });
}

function getPic15() {
  fetch(picUrl15)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content5");
      var pic = document.querySelector("#img5");
      pic.src = data.avatar.large;
      getDets15();
    });
}

function getDets15() {
  fetch(playUrl15)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title5").textContent = data.name;
      document.querySelector("#card-body5").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre5").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music15;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre5").append(breaker, player);
    });
}

// ELEVENTH SONG
fetch(playUrl11)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music11 = data.previews["preview-hq-mp3"];
  });

  function playMusic11() {
    fetch(playUrl11)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music11.paused) {
          music11.play();
        } else {
          music11.pause();
        }
      });
}

// TWELTH SONG
fetch(playUrl12)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music12 = data.previews["preview-hq-mp3"];
  });

  function playMusic12() {
    fetch(playUrl12)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music12.paused) {
          music12.play();
        } else {
          music12.pause();
        }
      });
}

// THIRTEENTH SONG
fetch(playUrl13)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music13 = data.previews["preview-hq-mp3"];
  });

  function playMusic13() {
    fetch(playUrl13)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music13.paused) {
          music13.play();
        } else {
          music13.pause();
        }
      });
}

// FOURTTEENTH SONG
fetch(playUrl14)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music14 = data.previews["preview-hq-mp3"];
  });

  function playMusic14() {
    fetch(playUrl14)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music14.paused) {
          music14.play();
        } else {
          music14.pause();
        }
      });
}

// FIFTEENTH SONG
fetch(playUrl15)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music15 = data.previews["preview-hq-mp3"];
  });

  function playMusic15() {
    fetch(playUrl15)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music15.paused) {
          music15.play();
        } else {
          music15.pause();
        }
      });
}
// ****** --- END OF CONFIDENT PAGE --- *****

function getPic16() {
  fetch(picUrl16)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content1");
      var pic = document.querySelector("#img1");
      pic.src = data.avatar.large;
      getDets16();
    });
}

function getDets16() {
  fetch(playUrl16)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      title1.textContent = data.name;
      cardBody1.textContent = "Artist: " + data.username;
      cardGenre1.textContent = "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music16;
      player.classList = "player";
      player.setAttribute("controls", true);
      cardGenre1.append(player);
      getPic17();
    });
}

function getPic17() {
  fetch(picUrl17)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content2");
      var pic = document.querySelector("#img2");
      pic.src = data.avatar.large;
      getDets17();
    });
}

function getDets17() {
  fetch(playUrl17)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title2").textContent = data.name;
      document.querySelector("#card-body2").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre2").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music17;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre2").append(player);
      getPic18();
    });
}

function getPic18() {
  fetch(picUrl18)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content3");
      var pic = document.querySelector("#img3");
      pic.src = data.avatar.large;
      getDets18();
    });
}

function getDets18() {
  fetch(playUrl18)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title3").textContent = data.name;
      document.querySelector("#card-body3").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre3").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music18;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre3").append(breaker, player);
      getPic19();
    });
}

function getPic19() {
  fetch(picUrl19)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content4");
      var pic = document.querySelector("#img4");
      pic.src = data.avatar.large;
      getDets19();
    });
}

function getDets19() {
  fetch(playUrl19)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title4").textContent = data.name;
      document.querySelector("#card-body4").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre4").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music19;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre4").append(breaker, player);
      getPic20();
    });
}

function getPic20() {
  fetch(picUrl20)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var picContent = document.querySelector("#card-content5");
      var pic = document.querySelector("#img5");
      pic.src = data.avatar.large;
      getDets20();
    });
}

function getDets20() {
  fetch(playUrl20)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#card-title5").textContent = data.name;
      document.querySelector("#card-body5").textContent =
        "Artist: " + data.username;
      document.querySelector("#card-genre5").textContent =
        "Genre: " + data.tags[0];
      var player = document.createElement("audio");
      player.src = music20;
      player.classList = "player";
      player.setAttribute("controls", true);
      document.querySelector("#card-genre5").append(breaker, player);
    });
}

// SIXTEENTH SONG
fetch(playUrl16)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music16 = data.previews["preview-hq-mp3"];
  });

  function playMusic16() {
    fetch(playUrl16)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music16.paused) {
          music16.play();
        } else {
          music16.pause();
        }
      });
}

// SEVENTEENTH SONG
fetch(playUrl17)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music17 = data.previews["preview-hq-mp3"];
  });

  function playMusic12() {
    fetch(playUrl17)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music17.paused) {
          music17.play();
        } else {
          music17.pause();
        }
      });
}

// EIGHTEENTH SONG
fetch(playUrl18)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music18 = data.previews["preview-hq-mp3"];
  });

  function playMusic18() {
    fetch(playUrl18)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music18.paused) {
          music18.play();
        } else {
          music18.pause();
        }
      });
}

// NINETEENTH SONG
fetch(playUrl19)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music19 = data.previews["preview-hq-mp3"];
  });

  function playMusic19() {
    fetch(playUrl19)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music19.paused) {
          music19.play();
        } else {
          music19.pause();
        }
      });
}

// TWENTIETH SONG
fetch(playUrl20)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    music20 = data.previews["preview-hq-mp3"];
  });

  function playMusic20() {
    fetch(playUrl20)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (music20.paused) {
          music20.play();
        } else {
          music20.pause();
        }
      });
}
// ****** --- END OF CALM PAGE --- ******

// ****** --- END OF AMPED PAGE --- *******

// RANDOM FUNCTION

function pickRandom() {
  console.log("Random");
  var arrayEmo = new Array("happy", "sad", "confident", "calm", "amped");
  var random = arrayEmo[Math.floor(Math.random() * arrayEmo.length)];
  console.log(random);
  if (random === "happy") {
    getPic1();
  }
  if (random === "sad") {
    getPic6();
  }
  if (random === "confident") {
    getPic11();
  }
  if (random === "calm") {
    getPic16();
  }
  if (random === "amped") {
    getPic21();
  } else {
    console.log("try again");
  }
}

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

// happy.addEventListener("click", getPic1);
// detailsBtn.addEventListener("click", getPic);
// playBtn1.addEventListener("click", playMusic1);
// playBtn2.addEventListener("click", playMusic2);
// playBtn3.addEventListener("click", playMusic3);
// playBtn4.addEventListener("click", playMusic4);
// playBtn5.addEventListener("click", playMusic5);
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

var elem1 = document.getElementById("card1");
var elem2 = document.getElementById("card2");
var elem3 = document.getElementById("card3");
var elem4 = document.getElementById("card4");
var elem5 = document.getElementById("card5");

function showHappy() {
  targetDiv.classList.remove("hide");

  elem1.animate([
     {transform: 'scale(1)', background: 'black', opacity: 1},
     {transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5},
     {transform: 'scale(1) rotate(0deg)', background: 'yellow', opcaity: 1},
  ], {
    duration: 3000,
    easing: 'linear',
    delay: 10,
    iterations: 1,
    direction: 'normal',
    fill: 'forwards'
  });

  elem2.animate([
    {transform: 'scale(1)', background: 'black', opacity: 1},
    {transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5},
    {transform: 'scale(1) rotate(0deg)', background: 'yellow', opcaity: 1},
 ], {
   duration: 4000,
   easing: 'linear',
   delay: 10,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
 });

 elem3.animate([
  {transform: 'scale(1)', background: 'black', opacity: 1},
  {transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5},
  {transform: 'scale(1) rotate(0deg)', background: 'yellow', opcaity: 1},
], {
 duration: 5000,
 easing: 'linear',
 delay: 10,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem4.animate([
  {transform: 'scale(1)', background: 'black', opacity: 1},
  {transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5},
  {transform: 'scale(1) rotate(0deg)', background: 'yellow', opcaity: 1},
], {
 duration: 6000,
 easing: 'linear',
 delay: 10,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem5.animate([
  {transform: 'scale(1)', background: 'black', opacity: 1},
  {transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5},
  {transform: 'scale(1) rotate(0deg)', background: 'yellow', opcaity: 1},
], {
 duration: 7000,
 easing: 'linear',
 delay: 10,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});
}

function showSad() {
  targetDiv.classList.remove("hide");

  elem1.animate([
    {transform: 'translate(0px, 0px)', background: 'black', opacity: 1},
    {transform: 'translate(100px, 100px) rotate(-200deg)', background: 'gray', opacity: .5},
    {transform: 'translate(0px, 0px', background: 'blue', opcaity: 1},
 ], {
   duration: 2500,
   easing: 'linear',
   delay: 10,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
 });

 elem2.animate([
  {transform: 'translate(0px, 0px)', background: 'black', opacity: 1},
  {transform: 'translate(100px, 100px) rotate(-200deg)', background: 'gray', opacity: .5},
  {transform: 'translate(0px, 0px', background: 'blue', opcaity: 1},
], {
  duration: 2500,
  easing: 'linear',
  delay: 10,
  iterations: 1,
  direction: 'normal',
  fill: 'forwards'
});

elem3.animate([
  {transform: 'translate(0px, 0px)', background: 'black', opacity: 1},
  {transform: 'translate(100px, 100px) rotate(-200deg)', background: 'gray', opacity: .5},
  {transform: 'translate(0px, 0px', background: 'blue', opcaity: 1},
], {
duration: 2500,
easing: 'linear',
delay: 10,
iterations: 1,
direction: 'normal',
fill: 'forwards'
});

elem4.animate([
  {transform: 'translate(0px, 0px)', background: 'black', opacity: 1},
  {transform: 'translate(100px, 100px) rotate(-200deg)', background: 'gray', opacity: .5},
  {transform: 'translate(0px, 0px', background: 'blue', opcaity: 1},
], {
duration: 2500,
easing: 'linear',
delay: 10,
iterations: 1,
direction: 'normal',
fill: 'forwards'
});

elem5.animate([
  {transform: 'translate(0px, 0px)', background: 'black', opacity: 1},
  {transform: 'translate(100px, 300px) rotate(-200deg)', background: 'gray', opacity: .5},
  {transform: 'translate(0px, 0px', background: 'blue', opcaity: 1},
], {
duration: 2500,
easing: 'linear',
delay: 10,
iterations: 1,
direction: 'normal',
fill: 'forwards'
});
}

function showConfident() {
  targetDiv.classList.remove("hide");

  elem1.animate([
    {transform: 'skew(0deg,0deg)', background: 'black', opacity: 1},
    {transform: 'skew(50deg, 55deg)', background: 'gray', opacity: .5},
    {transform: 'skew(0deg, 0deg)', background: 'pink', opcaity: 1},
 ], {
   duration: 1500,
   easing: 'linear',
   delay: 0,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
 });

 elem2.animate([
  {transform: 'skew(0deg,0deg)', background: 'black', opacity: 1},
  {transform: 'skew(50deg, 55deg)', background: 'gray', opacity: .5},
  {transform: 'skew(0deg, 0deg)', background: 'pink', opcaity: 1},
], {
 duration: 1500,
 easing: 'linear',
 delay: 1500,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem3.animate([
  {transform: 'skew(0deg,0deg)', background: 'black', opacity: 1},
  {transform: 'skew(50deg, 55deg)', background: 'gray', opacity: .5},
  {transform: 'skew(0deg, 0deg)', background: 'pink', opcaity: 1},
], {
 duration: 1500,
 easing: 'linear',
 delay: 3000,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem4.animate([
  {transform: 'skew(0deg,0deg)', background: 'black', opacity: 1},
  {transform: 'skew(50deg, 55deg)', background: 'gray', opacity: .5},
  {transform: 'skew(0deg, 0deg)', background: 'pink', opcaity: 1},
], {
 duration: 1500,
 easing: 'linear',
 delay: 4500,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem5.animate([
  {transform: 'skew(0deg,0deg)', background: 'black', opacity: 1},
  {transform: 'skew(50deg, 55deg)', background: 'gray', opacity: .5},
  {transform: 'skew(0deg, 0deg)', background: 'pink', opcaity: 1},
], {
 duration: 1500,
 easing: 'linear',
 delay: 7000,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});
}

function showCalm() {
  targetDiv.classList.remove("hide");

  elem1.animate([
    {opacity: .2, background: 'gray'},
    {opacity: .4},
    {opacity: .6},
    {opacity: .8},
    {opcaity: 1, background: 'green'},
 ], {
   duration: 4000,
   easing: 'linear',
   delay: 0,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
 });

 elem2.animate([
  {opacity: .2, background: 'gray'},
    {opacity: .4},
    {opacity: .6},
    {opacity: .8},
    {opcaity: 1, background: 'green'},
], {
 duration: 4000,
 easing: 'linear',
 delay: 0,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem3.animate([
  {opacity: .2, background: 'gray'},
    {opacity: .4},
    {opacity: .6},
    {opacity: .8},
    {opcaity: 1, background: 'green'},
], {
 duration: 4000,
 easing: 'linear',
 delay: 0,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem4.animate([
  {opacity: .2, background: 'gray'},
    {opacity: .4},
    {opacity: .6},
    {opacity: .8},
    {opcaity: 1, background: 'green'},
], {
 duration: 4000,
 easing: 'linear',
 delay: 0,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem5.animate([
  {opacity: .2, background: 'gray'},
  {opacity: .4},
  {opacity: .6},
  {opacity: .8},
  {opcaity: 1, background: 'green'},
], {
 duration: 4000,
 easing: 'linear',
 delay: 0,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});  
}

function showAmped() {
  targetDiv.classList.remove("hide");

  elem1.animate([
    {transform: 'scale(1))', background: 'black', opacity: 1},
    {transform: 'scale(1.5)', background: 'gray', opacity: .5},
    {transform: 'scale(1)', background: 'purple', opcaity: 1},
  ], {
   duration: 1000,
   easing: 'linear',
   delay: 0,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
  });

  elem2.animate([
    {transform: 'scale(1))', background: 'black', opacity: 1},
    {transform: 'scale(1.5)', background: 'gray', opacity: .5},
    {transform: 'scale(1)', background: 'purple', opcaity: 1},
  ], {
   duration: 1000,
   easing: 'linear',
   delay: 0,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
  });

  elem3.animate([
    {transform: 'scale(1))', background: 'black', opacity: 1},
    {transform: 'scale(1.5)', background: 'gray', opacity: .5},
    {transform: 'scale(1)', background: 'purple', opcaity: 1},
  ], {
   duration: 1000,
   easing: 'linear',
   delay: 0,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
  });

  elem4.animate([
    {transform: 'scale(1))', background: 'black', opacity: 1},
    {transform: 'scale(1.5)', background: 'gray', opacity: .5},
    {transform: 'scale(1)', background: 'purple', opcaity: 1},
  ], {
   duration: 1000,
   easing: 'linear',
   delay: 0,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
  });

  elem5.animate([
    {transform: 'scale(1))', background: 'black', opacity: 1},
    {transform: 'scale(1.5)', background: 'gray', opacity: .5},
    {transform: 'scale(1)', background: 'purple', opcaity: 1},
  ], {
   duration: 1000,
   easing: 'linear',
   delay: 0,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
  });


}

function showRandom() {
  targetDiv.classList.remove("hide");

  elem1.animate([
    {transform: 'translate(0px, 0px)', background: 'black', opacity: 1},
    {transform: 'translate(100px, 100px) rotate(-200deg)', background: 'gray', opacity: .5},
    {transform: 'translate(0px, 0px', background: 'black', opcaity: 1},
 ], {
   duration: 2500,
   easing: 'linear',
   delay: 10,
   iterations: 1,
   direction: 'normal',
   fill: 'forwards'
 });

 elem2.animate([
  {opacity: .2, background: 'gray'},
    {opacity: .4},
    {opacity: .6},
    {opacity: .8},
    {opcaity: 1, background: 'black'},
], {
 duration: 2500,
 easing: 'linear',
 delay: 0,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem3.animate([
  {transform: 'scale(1)', background: 'black', opacity: 1},
  {transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5},
  {transform: 'scale(1) rotate(0deg)', background: 'black', opcaity: 1},
], {
 duration: 2500,
 easing: 'linear',
 delay: 10,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem4.animate([
  {transform: 'scale(1)', background: 'black', opacity: 1},
  {transform: 'scale(1.5)', background: 'gray', opacity: .5},
  {transform: 'scale(1)', background: 'black', opcaity: 1},
], {
 duration: 2500,
 easing: 'linear',
 delay: 0,
 iterations: 1,
 direction: 'normal',
 fill: 'forwards'
});

elem5.animate([
  {transform: 'translate(0px, 0px)', background: 'black', opacity: 1},
  {transform: 'translate(100px, 300px) rotate(-200deg)', background: 'gray', opacity: .5},
  {transform: 'translate(0px, 0px', background: 'black', opcaity: 1},
], {
duration: 2500,
easing: 'linear',
delay: 10,
iterations: 1,
direction: 'normal',
fill: 'forwards'
});
}
