//console.log("Up and running!");
/*console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds",
  }
];
//var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  }else{
    console.log("Sorry, try again.");
  }
}
//checkForMatch();

var flipCard = function(cardID){
  console.log("User flipped" + " " + cards[cardID].rank);
  cardsInPlay.push(cards[cardID].rank);{
    console.log(cards[cardID].cardImage);
  }
  {
    console.log(cards[cardID].suit);
  }
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
