var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

var rand1diceimage = "images/dice" + rand1 + ".png";
var rand2diceimage = "images/dice" + rand2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", rand1diceimage);
document.querySelectorAll("img")[1].setAttribute("src", rand2diceimage);
if (rand1 == rand2) {
  document.querySelectorAll("h1")[0].innerHTML = "Draw";
} else if (rand1 < rand2) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 is Winner";
} else {
  document.querySelectorAll("h1")[0].innerHTML = "Player 1 is Winner";
}
// t[0].setAttribute(rand1diceimage);
