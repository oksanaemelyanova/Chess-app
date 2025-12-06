// branching story data
const storyBranches = {
    "e4": [
        "Ron pushes his pawn to E4. The pawn squeaks proudly: 'Forward, lads!'. Harry grins — the battle begins!",
        "Ron plays E4. Harry instantly replies with ...c5! 'The Sicilian Defence?!' Ron gasps as the board vibrates."
    ],

    "d4": [
        "Ron gently moves pawn to D4. 'A gentleman’s opening,' whispers the bishop. A strategic duel begins.",
        "Ron plays D4. Harry answers with ...Nf6. Mysterious energy glows over the board."
    ],

    "c4": [
        "Ron slides his pawn to C4. 'Stylish and clever,' it says proudly. Harry nods, impressed.",
        "Ron plays C4. Harry strikes with ...e5! 'Hey!' Ron yells. The pieces brace for impact."
    ]
};

// add event listeners AFTER the page loads
window.onload = () => {
    const buttons = document.querySelectorAll(".choice");
    const rightPanel = document.getElementById("quest-right");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const move = btn.dataset.next;   // "e4", "d4", "c4"
            const options = storyBranches[move];

            // pick random story from two
            const text = options[Math.floor(Math.random() * options.length)];

            // insert into right panel
            rightPanel.innerHTML = `<p>${text}</p>`;
        });
    });
};
