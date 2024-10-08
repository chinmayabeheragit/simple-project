"use strict";
/*

console.log(document.querySelector(".message").textContent);
//query selector is a method is available in document object it  s a selector
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //whatever we type in the text box and click in check button it show in the console page

  //when there is no input field
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
    //show 0 in console 0 is false value

    //when the player win
  } else if (guess === secretNumber) {
    //if the guess num is same
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too high";
      score = score - 1;
      document.querySelector(".score").textContent = score;
      //show msg too high
    } else {
      document.querySelector(".message").textContent =
        " Jalde wahna se hatto har gay ho tum";
      document.querySelector(".score").textContent = 0;
    }

    //guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
      //show msg too high
    } else {
      document.querySelector(".message").textContent =
        " Jalde wahna se hatto har gay ho tum";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = " start guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
