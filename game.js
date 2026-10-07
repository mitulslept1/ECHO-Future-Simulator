/* =========================================
   ECHO - GAME LOGIC
   ========================================= */


/* =========================================
   CHARACTER DATA
   ========================================= */

const characters = {
    mayor: {
        name: "THE MAYOR",
        advantage: "Better influence over city decisions",
        stat: "influence",
        bonus: 10
    },

    scientist: {
        name: "THE SCIENTIST",
        advantage: "Better understanding of environmental consequences",
        stat: "environment",
        bonus: 10
    },

    communityLeader: {
        name: "THE COMMUNITY LEADER",
        advantage: "Stronger public support",
        stat: "support",
        bonus: 10
    },

    entrepreneur: {
        name: "THE ENTREPRENEUR",
        advantage: "Stronger economic opportunities",
        stat: "economy",
        bonus: 10
    }
};


/* =========================================
   MAIN MENU
   ========================================= */

const newGameButton = document.getElementById("new-game-button");
const continueButton = document.getElementById("continue-button");

const howToPlayButton = document.getElementById("how-to-play-button");
const creditsButton = document.getElementById("credits-button");

const howToPlayPanel = document.getElementById("how-to-play-panel");
const creditsPanel = document.getElementById("credits-panel");

const closeHowToPlay = document.getElementById("close-how-to-play");
const closeCredits = document.getElementById("close-credits");


/* NEW SIMULATION */

if (newGameButton) {
    newGameButton.addEventListener("click", () => {

        // Start a completely new simulation.
        localStorage.removeItem("echoPlayer");
        localStorage.removeItem("selectedCharacter");

        window.location.href = "character.html";
    });
}


/* CONTINUE */

if (continueButton) {
    continueButton.addEventListener("click", () => {

        const savedGame = localStorage.getItem("echoPlayer");

        if (savedGame) {
            window.location.href = "game.html";
        } else {
            alert("NO SAVED SIMULATION FOUND.");
        }
    });
}


/* HOW TO PLAY */

if (howToPlayButton) {
    howToPlayButton.addEventListener("click", () => {

        howToPlayPanel.classList.remove("hidden");
    });
}


/* CLOSE HOW TO PLAY */

if (closeHowToPlay) {
    closeHowToPlay.addEventListener("click", () => {

        howToPlayPanel.classList.add("hidden");
    });
}


/* CREDITS */

if (creditsButton) {
    creditsButton.addEventListener("click", () => {

        creditsPanel.classList.remove("hidden");
    });
}


/* CLOSE CREDITS */

if (closeCredits) {
    closeCredits.addEventListener("click", () => {

        creditsPanel.classList.add("hidden");
    });
}


/* CLOSE PANELS WHEN CLICKING OUTSIDE */

if (howToPlayPanel) {
    howToPlayPanel.addEventListener("click", (event) => {

        if (event.target === howToPlayPanel) {
            howToPlayPanel.classList.add("hidden");
        }
    });
}

if (creditsPanel) {
    creditsPanel.addEventListener("click", (event) => {

        if (event.target === creditsPanel) {
            creditsPanel.classList.add("hidden");
        }
    });
}


/* =========================================
   CHARACTER SELECTION
   ========================================= */

const characterCards = document.querySelectorAll(".character-card");

const selectedCharacterText =
    document.getElementById("selected-character");

const advantageText =
    document.getElementById("advantage");

const startButton =
    document.getElementById("start-button");

let selectedCharacter = "mayor";


/* CHARACTER CARDS */

if (characterCards.length > 0) {

    characterCards.forEach(card => {

        card.addEventListener("click", () => {

            characterCards.forEach(character => {
                character.classList.remove("selected");
            });

            card.classList.add("selected");

            selectedCharacter = card.dataset.character;

            const character =
                characters[selectedCharacter];

            selectedCharacterText.textContent =
                character.name;

            advantageText.textContent =
                character.advantage;
        });

    });
}


/* START GAME */

if (startButton) {

    startButton.addEventListener("click", () => {

        const character =
            characters[selectedCharacter];

        const playerState = {

            character: selectedCharacter,

            characterName: character.name,

            startingAdvantage: character.stat,

            bonus: character.bonus,

            year: 2026,

            stats: {
                economy: 0,
                environment: 0,
                support: 0,
                influence: 0
            }
        };


        // Apply the character's starting advantage.
        playerState.stats[character.stat] =
            character.bonus;


        // Save the simulation.
        localStorage.setItem(
            "echoPlayer",
            JSON.stringify(playerState)
        );

        localStorage.setItem(
            "selectedCharacter",
            selectedCharacter
        );


        // Move to the actual game.
        window.location.href = "game.html";
    });
}