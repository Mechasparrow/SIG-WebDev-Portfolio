
window.addEventListener("load", function(){

  var cardsWrapper = document.querySelector("#cards");

  var newCard = createCard("JIMRR");
  cardsWrapper.appendChild(newCard);
  
  newCard = createCard("Ries");
  cardsWrapper.appendChild(newCard);

});

function createCard(cardTitle) {
    var templateCard = document.querySelector("#template-card");

    var cardPrime = templateCard.cloneNode(true);
    cardPrime.classList.remove("hidden")

    var cardHeader = cardPrime.querySelector(".card-content");
    cardHeader.innerHTML = "<h1>" + cardTitle + "</h1>";

    return cardPrime;
}
