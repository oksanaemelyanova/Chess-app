// the document listeneer "DOMContentLoaded" - Document Object Model
//to guarantee that all html content loaded
//DOM is created after HTML is read but before CSS and scripts
document.addEventListener("DOMContentLoaded", () => {
    //automate creation of a chessboard
    //blank chessboard
    function createChessboard(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";

        const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
        for (let rank = 8; rank >= 1; rank--) {
            const row = document.createElement("div");
            row.classList.add("row");

            for (let file of files) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.id = file + rank;
                row.appendChild(square);
            }

            container.appendChild(row);
        }
    }

    
    //put pieces, but it's gonna put them on all boards then ...
    //brain loading..
    function placeInitialPieces(containerId) {
        const container = document.getElementById(containerId);
        const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

        //white pawns
        files.forEach(f => {
            const square = container.querySelector(`#${f}2`);
            if (square) {
                square.innerHTML = `&#9817;`;
                //square.innerHTML = `<i class="fa-regular fa-chess-pawn"></i>`;
            }
        });

        //black pawns
        files.forEach(f => {
            const square = container.querySelector(`#${f}7`);
            if (square) {
                square.innerHTML = `&#9823;`;
                //square.innerHTML = `<i class="fa-solid fa-chess-pawn"></i>`;
            }
        });
    }

    //helper for highlighting
    function highlightSquare(containerId, squareId, className) {
        const container = document.getElementById(containerId);
        const square = container.querySelector(`#${squareId}`);
        if (square) square.classList.add(className);
    }

    //function for highlighting possible answers
    function highlightD2Exercise() {
        const board = "exercise-board";
        highlightSquare(board, "d2", "highlight-pawn");
        highlightSquare(board, "d4", "highlight");
        highlightSquare(board, "c3", "highlight");
        highlightSquare(board, "e3", "highlight");
    }

    //function for exercise control
    function setupExerciseListeners() {
        const boardId = "exercise-board";
        const correctSquareId = "d4";
        const wrongSquares = ["c3", "e3"];
        const initPos = "d2"

        const board = document.getElementById(boardId);
        const initPawn = document.getElementById(initPos);

        const correctSquare = board.querySelector(`#${correctSquareId}`);
        if (correctSquare) {
            correctSquare.addEventListener("click", () => {
                correctSquare.style.backgrounColor = "limegreen";
                correctSquare.style.color = "black";
                alert("Correct! Well Done!");
                correctSquare.innerHTML = `&#9817;`;
                initPawn.innerHTML = "";
            });
        }

        //wrong squares click
        wrongSquares.forEach(id => {
            const sq = board.querySelector(`#${id}`);

            if (sq) {
                sq.addEventListener("click", () => {
                    sq.style.backgrounColor = "tomato";
                    sq.style.color = "white";
                    alert("Try again!");
                });
            }
        });
    }

    //function call for exersice section board generation
    createChessboard("exercise-board");
    placeInitialPieces("exercise-board");
    highlightD2Exercise();
    setupExerciseListeners();

    //function call for initial chessboard
    createChessboard("chessboard");
    placeInitialPieces("chessboard");

    //my animation
    const pawnSquare = document.getElementById("d2");
    const startSquare = document.getElementById("d2");
    const oneStep = document.getElementById("d3");
    const twoStep = document.getElementById("d4");

    const showMoveBtn = document.getElementById("animateBtn");
    const restartBtn = document.getElementById("restart");

    startSquare.classList.add("active-square");

    function highlightPath () {
        oneStep.classList.add("valid-move");
        twoStep.classList.add("valid-move");
    }

    function clearHighlights() {
        startSquare.classList.remove("active-square");
        oneStep.classList.remove("valid-move");
        twoStep.classList.remove("valid-move");
    }

    function movePawn() {
        startSquare.innerHTML = "";

        twoStep.innerHTML = `&#9817;`;

        clearHighlights();

        twoStep.classList.add("pawn-new");
    }

    function returnPawn() {
        startSquare.innerHTML = `&#9817;`;
        twoStep.innerHTML = "";
        oneStep.classList.remove("valid-move");
        twoStep.classList.remove("valid-move");
        twoStep.classList.remove("pawn-new");
        startSquare.classList.add("active-square");
    }

    showMoveBtn.addEventListener("click", () => {
        //highlightPath();
        setTimeout(movePawn, 700);
    });

    pawnSquare.addEventListener("click", () => {
        highlightPath();
        //setTimeout(movePawn, 700);
    });

    restartBtn.addEventListener("click", () => {
        returnPawn();
    });
});


document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('click', () => {
        task.classList.toggle('flipped');
    });
});

