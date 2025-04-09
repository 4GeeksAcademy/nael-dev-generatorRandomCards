import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCardRandom() {
  let randomSuit = Math.floor((Math.random() * 4) + 1);
  let randomNumber = Math.floor(Math.random() * 13);


  function numberCard(randomNum) {

    if (randomNum === 0) return "A";
    if (randomNum === 10) return "J";
    if (randomNum === 11) return "Q";
    if (randomNum === 12) return "K";
    return (randomNum + 1).toString();

  }



  function joinIconNumber(suit) {
    if (suit === 1) return '♠';
    if (suit === 2) return '♣';
    if (suit === 3) return '♥';
    return '♦';
  }



  function classBySuit(number) {
    return (number === 1 || number === 2) ? 'black' : 'red';
  }


  let randomCenterNumber = numberCard(randomNumber);
  let suit = joinIconNumber(randomSuit);
  let color = classBySuit(randomSuit);

  let iconUp = document.querySelector('.icon-up');
  let iconDown = document.querySelector('.icon-down');

  document.getElementById('card').textContent = randomCenterNumber;
  iconUp.textContent = suit;
  iconDown.textContent = suit;
  document.querySelector('.icon-up').classList.add(color);
  document.querySelector('.icon-down').classList.add(color);

  const oppositeColor = color === 'black' ? 'red' : 'black';
  document.querySelector('.icon-up').classList.remove(oppositeColor);
  document.querySelector('.icon-down').classList.remove(oppositeColor);

}


window.onload = function () {
  //write your code here
  generateCardRandom()

  let timerInterval;
  timerInterval = setInterval(generateCardRandom, 10000);


  document.getElementById('but-generate').addEventListener('click', () => {

    clearInterval(timerInterval);

    generateCardRandom()

    const width = document.getElementById('card-width').value;
    document.querySelector('.card').style.width = width + "px";

    const height = document.getElementById('card-height').value;
    document.querySelector('.card').style.height = height + "px";
    timerInterval = setInterval(generateCardRandom, 10000);
  });


};
