//console.log("Up and running!");
/*console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  }else{
    console.log("Sorry, try again.");
  }
}
checkForMatch();

var flipCard = function(cardID){
  console.log("User flipped" + " " + cards[cardID]);
  cardsInPlay.push(cards[cardID]);
    if (cardsInPlay.length === 2){
      if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
      }else{
        alert("Sorry, try again!");
      }
    }
}

flipCard(0);
flipCard(2);

/*var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push[0];
console.log("User flipped" + " " + cards[0]);
var cardTwo = cards[2];
cardsInPlay.push[2];
console.log("User flipped" + " " + cards[3]);
if (cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }else{
    alert("Sorry, try again!");
  }
}*/
