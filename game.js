// ==========================================
// ECHO CHARACTER / ROLE SYSTEM
// ==========================================

const characters = {

    mayor: {

        name: "THE MAYOR",

        advantage:
            "Better influence over city decisions",

        stat: "influence",

        bonus: 10
    },


    scientist: {

        name: "THE SCIENTIST",

        advantage:
            "Better understanding of environmental consequences",

        stat: "environment",

        bonus: 10
    },


    communityLeader: {

        name: "THE COMMUNITY LEADER",

        advantage:
            "Stronger public support",

        stat: "support",

        bonus: 10
    },


    entrepreneur: {

        name: "THE ENTREPRENEUR",

        advantage:
            "Stronger economic opportunities",

        stat: "economy",

        bonus: 10
    }

};


// ==========================================
// HTML ELEMENTS
// ==========================================

const characterCards =
    document.querySelectorAll(".character-card");

const selectedCharacterText =
    document.getElementById("selected-character");

const advantageText =
    document.getElementById("advantage");

const startButton =
    document.getElementById("start-button");


// ==========================================
// DEFAULT CHARACTER
// ==========================================

let selectedCharacter = "mayor";


// ==========================================
// CHARACTER SELECTION
// ==========================================

characterCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove selection from all cards

        characterCards.forEach(character => {

            character.classList.remove("selected");

        });


        // Select clicked card

        card.classList.add("selected");


        // Get character ID

        selectedCharacter =
            card.dataset.character;


        // Get character information

        const character =
            characters[selectedCharacter];


        // Update screen

        selectedCharacterText.textContent =
            character.name;

        advantageText.textContent =
            character.advantage;

    });

});


// ==========================================
// START GAME
// ==========================================

startButton.addEventListener("click", () => {

    const character =
        characters[selectedCharacter];


    // Create player's starting state

    const playerState = {

        character:
            selectedCharacter,

        characterName:
            character.name,

        startingAdvantage:
            character.stat,

        bonus:
            character.bonus,

        year: 2026,

        stats: {

            economy: 0,

            environment: 0,

            support: 0,

            influence: 0

        }

    };


    // Apply starting bonus

    playerState.stats[character.stat] =
        character.bonus;


    // Save player data

    localStorage.setItem(
        "echoPlayer",
        JSON.stringify(playerState)
    );


    // Also keep the old key for compatibility

    localStorage.setItem(
        "selectedCharacter",
        selectedCharacter
    );


    // Go to game

    window.location.href = "game.html";

});