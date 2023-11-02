// Game function
const game = () => {
    // Setting scores and elements
    let playerScore = 0;
    let computerScore = 0;
    let playerScoreboard = 0;
    let computerScoreboard = 0;

    const buttons = document.querySelectorAll('.options button');
    const showIconMove = document.querySelector('.show i');
    const computerShowIconMove = document.querySelector('.computer i');
    const pScore = document.getElementById('p-score');
    const cScore = document.getElementById('c-score');
    const pScoreboard = document.getElementById('p-scoreboard');
    const cScoreboard = document.getElementById('c-scoreboard');
    // Font Awesome Icons for computer options
    const computerOptions = ['fa-regular fa-hand-back-fist', 'fa-regular fa-hand', 'fa-regular fa-hand-scissors'];
    const firstToText = document.getElementById('first-to-text');
    // Checks winner
    const checkScore = () => {
        if (playerScore === 10 || computerScore === 10) {
            if (playerScore === 10) {
                firstToText.innerHTML = 'Player won the game!';
                firstToText.style.color = 'green';
                firstToText.style.fontSize = firstToText;
            } else {
                firstToText.innerHTML = 'Computer won the game!';
                firstToText.style.color = 'red';
                firstToText.style.fontSize = firstToText;
            }
            playerScore = 0;
            computerScore = 0;
            pScore.innerHTML = playerScore;
            cScore.innerHTML = computerScore;
        }
    };
    // Updates the display of scores and scoreboard
    const updateScoreDisplay = () => {
        pScore.innerHTML = playerScore;
        cScore.innerHTML = computerScore;
        pScoreboard.innerHTML = playerScoreboard;
        cScoreboard.innerHTML = computerScoreboard;
    };
    // Increases the score and scoreboard
    const incrementScore = (ScoreType) => {
        if (playerScore >= 10 || computerScore >= 10) {
            return;
        }

        if (ScoreType === 'player') {
            playerScore++;
        } else if (ScoreType === 'computer') {
            computerScore++;
        }
        if (playerScore === 10) {
            playerScoreboard++;
        } else if (computerScore === 10) {
            computerScoreboard++;
        }
        updateScoreDisplay();
    };
    // Checks choices and scores of player and computer, setting forEach function for player buttons and computer options
    const startGame = () => {
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let clickedBtn = e.target.className;
                showIconMove.className = clickedBtn;
                let computerChoice = Math.floor(Math.random() * computerOptions.length);
                computerShowIconMove.className = computerOptions[computerChoice];
                // Tie
                if (showIconMove.className === computerShowIconMove.className) {
                    firstToText.innerHTML = 'Tie!';
                    firstToText.style.color = 'goldenrod';
                    firstToText.style.fontSize = firstToText;
                } 
                // If not a tie
                else if (
                    (showIconMove.className === computerOptions[0] && computerShowIconMove.className === computerOptions[2]) ||
                    (showIconMove.className === computerOptions[1] && computerShowIconMove.className === computerOptions[0]) ||
                    (showIconMove.className === computerOptions[2] && computerShowIconMove.className === computerOptions[1])
                ) {
                    incrementScore('player');
                    firstToText.innerHTML = 'Player won';
                    firstToText.style.color = 'green';
                    firstToText.style.fontSize = firstToText;
                } else {
                    incrementScore('computer');
                    firstToText.innerHTML = 'Computer won';
                    firstToText.style.color = 'red';
                    firstToText.style.fontSize = firstToText;
                }
                // Check scores
                checkScore();
            });
        });
    };
// Start game
    startGame();
};
// Calling game
game();