const characterCards = document.querySelectorAll(".character-card");
const selectedCharacterText = document.getElementById("selected-character");
const startButton = document.getElementById("start-button");

let selectedCharacter = "warrior";

characterCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove selection from every character
        characterCards.forEach(character => {
            character.classList.remove("selected");
        });

        // Select clicked character
        card.classList.add("selected");

        // Store selected character
        selectedCharacter = card.dataset.character;

        // Update text
        selectedCharacterText.textContent =
            selectedCharacter.toUpperCase();

    });

});


startButton.addEventListener("click", () => {

    console.log("Selected character:", selectedCharacter);

    // Store character so the next game screen can access it
    localStorage.setItem(
        "selectedCharacter",
        selectedCharacter
    );

    // Move to game screen
    window.location.href = "game.html";

});