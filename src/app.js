import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


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
  if (suit === 1) {
    return '♠';
  }
  if (suit === 2) {
    return '♣';
  }
  if (suit === 3) {
    return '♥';
  }
  return '♦';
}

let palo = joinIconNumber(randomSuit);

document.getElementById('card').textContent = numberCard(randomNumber);
document.getElementById('arriba').textContent = palo;



window.onload = function () {
  //write your code here

};
