// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
let url = "https://cdn.glitch.global/";
let cards = [
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/img1.jpg?v=1710435866372",
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/img2.jpg?v=1710436052224",
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/img3.jpg?v=1710436109509",
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/Img4.jpg?v=1710436341861",
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/img5.jpg?v=1710436352892",
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/img6.jpg?v=1710436391066",
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/img7.jpg?v=1710436398429",
    "https://cdn.glitch.global/1f7f1aea-aa0c-4016-9162-772a46094bf0/img8.jpg?v=1710436406980"


];

// Button to Show Deck
buttonShow.onclick = function() {
    console.log("Showing the deck...");
    game.innerHTML = "";

    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }

};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" +
                card +
                ")' class='card'>");
        }
    }

};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let count = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' id='" + count + "' class='card'>");
        count = count + 1;
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (let card of cards) {
        document.getElementById(i).style = "";
        i = i + 1;
    }
};


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    // If a card was clicked...
    if (clickedId !== "") {

        // Make the background image appear!
        document.getElementById(clickedId).style.backgroundImage =
            "url('" + cards[clickedId] + "’)";
        // Also add the id to an array

        clickedIds.push(clickedId);
        console.log(clickedIds);
        // If 1 card was clicked...
        if (clickedIds.length === 2) {
            // Get both image URLs (and log them)
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            // If they are the same, just empty the array!

            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            }
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedIds);
            console.log(clickedIds);

        }
    }
});