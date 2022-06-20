function StartGame() {
  if (card == 0){
    card = Math.floor(Math.random() * 11);
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 20) {
    message = "Wohoo! You`ve got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Sorry, you`re out of the game!";
    isAlive = false;
  }
  console.log(message);
  document.getElementById("sum-el").textContent =  sum;
  document.getElementById("message-el").textContent = message;
  document.getElementById("cards-el").textContent += " " + card;
}
function NewCard() {
  card = Math.floor(Math.random() * 11);
  sum += card;
  console.log(sum);
  StartGame();
}
let card = Math.floor(Math.random() * 11), hasBlackJack = false, isAlive = true, 
message = "", sum = card;
