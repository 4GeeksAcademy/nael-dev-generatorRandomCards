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
  let randomCenterNumber = numberCard(randomNumber);


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
  let suit = joinIconNumber(randomSuit);


  function classBySuit(number) {
    if (number === 1 || number === 2) {
      return 'black';
    }

    return 'red';
  }

  let color = classBySuit(randomSuit);

  setInterval(generateCardRandom, 10000); 
    



document.getElementById('card').textContent = randomCenterNumber;
document.getElementById('icon-up').textContent = suit;
document.getElementById('icon-down').textContent = suit;
document.getElementById('icon-up').className = color;
document.getElementById('icon-down').className = color;

}


window.onload = function () {
  //write your code here
  generateCardRandom()
 
  document.getElementById('but-generate').addEventListener('click',()=>{
    generateCardRandom()
    const width = document.getElementById('card-width').value;
   
    const height = document.getElementById('card-height').value;
    document.querySelector('.card').style.height = height + "px";
    
  });

  
};
