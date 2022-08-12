// mouse click

var noOfDrums = document.querySelectorAll(".drum");

for (var i = 0; i < noOfDrums.length; i++) {
  noOfDrums[i].addEventListener("click", (event) => {
    // check which button got clicked
    var key_clicked = event.target.innerText;
    playSound(key_clicked);
  });
}
// =====================






function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}
