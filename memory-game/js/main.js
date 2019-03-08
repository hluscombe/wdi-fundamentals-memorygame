var cards = [
{
rank: "Queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"	
},
{
rank: "Queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"	
},
{
rank: "King",
suit: "hearts",
cardImage: "images/king-of-hearts.png"	
},
{
rank: "King",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"	
}
];

var cardsInPlay = []

var checkForMatch = function() { 
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
} else {
		alert("Sorry, try again.");
};
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2) {
	checkForMatch();
};
}

var createBoard = function() {
	for (let i = 0; i < cards.length; i++) {
	    var cardElement = document.createElement('img');
			cardElement.setAttribute('src', "images/back.png");
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
}
createBoard();

function reload() {
	location.reload();
}

//alert(cardsInPlay[0] == cardsInPlay [1] ? "You found a match!" : "Sorry, try again");