// we are going to refacter some key things in our code to make the code cleaner!

// first we will create an object with key elements what we are importing from HTML

const p1 = {
    score: 0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1Btn"),
}

const p2 = {
    score: 0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2Btn"),
}

// linking all the elements what we will use from index.html

const rstBtn = document.querySelector("#rst");
const selectTo = document.querySelector("#selectTo");

let winningScore = 1;
let isGameOver = false;

// functions

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function resetProcess() {
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
        isGameOver = false;
    }
}

// event listeners

selectTo.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    resetProcess();
})

p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
});

rstBtn.addEventListener("click", resetProcess);

