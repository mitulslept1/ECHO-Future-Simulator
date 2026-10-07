const startButton =
    document.getElementById("start-button");

const continueButton =
    document.getElementById("continue-button");

const aboutButton =
    document.getElementById("about-button");

const message =
    document.getElementById("menu-message");


/* ========================================
   START GAME
======================================== */

startButton.addEventListener("click", () => {

    message.textContent =
        "Your future begins in 2026...";

});


/* ========================================
   CONTINUE
======================================== */

continueButton.addEventListener("click", () => {

    message.textContent =
        "No timeline found. Begin your first future.";

});


/* ========================================
   ABOUT
======================================== */

aboutButton.addEventListener("click", () => {

    message.textContent =
        "Every decision you make shapes the world you inherit.";

});