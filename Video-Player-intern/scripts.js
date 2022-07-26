let counter = 0,
  counter1 = 0;
const player = document.querySelector(".player");
const volumeBtn = document.querySelector(".volume");
const speedBtn = document.querySelector(".speed");
const myvid = document.getElementById("myvideo");

function oneVideoToAnother() {
  var activesource = document.querySelector("#myvideo source.active");
  var nextsource =
    document.querySelector("#myvideo source.active + source") ||
    document.querySelector("#myvideo source:first-child");
  activesource.className = "";
  nextsource.className = "active";
  myvid.src = nextsource.src;

  myvid.volume = 0;
  myvid.pause();

  setTimeout(function () {      
    myvid.play();
  }, 150);
  // myvid.play();
}

myvid.addEventListener("ended", oneVideoToAnother);
