const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('.options button');
    const showIconMove = document.querySelector('.show i');
    const computerShowIconMove = document.querySelector('.computer i');
    const pScore = document.getElementById('p-score');
    const cScore = document.getElementById('c-score');

    const computerOptions = ['fa-regular fa-hand-back-fist', 'fa-regular fa-hand', 'fa-regular fa-hand-scissors'];
    const firstToText = document.getElementById('first-to-text');

    const checkScore = () => {
        if (playerScore === 10 || computerScore === 10) {
            if (playerScore === 10) {
                firstToText.innerHTML = 'Player won the game!';
                firstToText.style.color = 'green';
            } else {
                firstToText.innerHTML = 'Computer won the game!';
                firstToText.style.color = 'red';
            }
            playerScore = 0;
            computerScore = 0;
            pScore.innerHTML = playerScore;
            cScore.innerHTML = computerScore;
        }
    };

    const startGame = () => {
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let clickedBtn = e.target.className;
                showIconMove.className = clickedBtn;
                let computerChoice = Math.floor(Math.random() * computerOptions.length);
                computerShowIconMove.className = computerOptions[computerChoice];

                if (showIconMove.className === computerShowIconMove.className) {
                    pScore.innerHTML = playerScore;
                    cScore.innerHTML = computerScore;
                    firstToText.innerHTML = 'Tie!';
                    firstToText.style.color = 'goldenrod';
                } else if (showIconMove.className === computerOptions[0] && computerShowIconMove.className === computerOptions[2]) {
                    playerScore++;
                    pScore.innerHTML = playerScore;
                    firstToText.innerHTML = 'Player wins';
                    firstToText.style.color = 'green';
                } else if (showIconMove.className === computerOptions[0] && computerShowIconMove.className === computerOptions[1]) {
                    computerScore++;
                    cScore.innerHTML = computerScore;
                    firstToText.innerHTML = 'Computer wins';
                    firstToText.style.color = 'red';
                } else if (showIconMove.className === computerOptions[1] && computerShowIconMove.className === computerOptions[2]) {
                    computerScore++;
                    cScore.innerHTML = computerScore;
                    firstToText.innerHTML = 'Computer wins';
                    firstToText.style.color = 'red';
                } else if (showIconMove.className === computerOptions[1] && computerShowIconMove.className === computerOptions[0]) {
                    playerScore++;
                    pScore.innerHTML = playerScore;
                    firstToText.innerHTML = 'Player wins';
                    firstToText.style.color = 'green';
                } else if (showIconMove.className === computerOptions[2] && computerShowIconMove.className === computerOptions[0]) {
                    computerScore++;
                    cScore.innerHTML = computerScore;
                    firstToText.innerHTML = 'Computer wins';
                    firstToText.style.color = 'red';
                } else if (showIconMove.className === computerOptions[2] && computerShowIconMove.className === computerOptions[1]) {
                    playerScore++;
                    pScore.innerHTML = playerScore;
                    firstToText.innerHTML = 'Player wins';
                    firstToText.style.color = 'green';
                }

                checkScore();
            });
        });
    };

    startGame();
};

game();