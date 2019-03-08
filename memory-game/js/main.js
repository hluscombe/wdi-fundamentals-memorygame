//console.log("Up and Running!");

var cards = [
{
rank: "Queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",	
},
{
rank: "Queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",	
},
{
rank: "King",
suit: "hearts",
cardImage: "images/king-of-hearts.png",	
},
{
rank: "King",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",	
},
];

var cardsInPlay = []

var checkForMatch = function() { 
	if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
};
}

var flipCard = function(cardId) {
	if (cardsInPlay.length === 2) {
	checkForMatch(); 
};
console.log("User flipped" + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
}

flipCard(0);
flipCard(2);

checkForMatch();

//alert(cardsInPlay[0] == cardsInPlay [1] ? "You found a match!" : "Sorry, try again");