const game = () => {
    let playerScore = 0;
    let computerScore = 0;


    const btns = document.querySelectorAll('.options button');
    const showIconMove = document.querySelector('.show i');
    const computerShowIconMove = document.querySelector('.computer i');
    const pScore = document.getElementById('p-score');
    const cScore = document.getElementById('c-score');

    const computerOptions = ['fa-regular fa-hand-back-fist', 'fa-regular fa-hand', 'fa-regular fa-hand-scissors'];
    
    const firstToText = document.getElementById('first-to-text');
    

    const startGame = () => {
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let clickedBtn = e.target.className;
                showIconMove.className = clickedBtn;
                let computerChoice = Math.floor(Math.random() * computerOptions.length);
                computerShowIconMove.className = computerOptions[computerChoice];

                if (showIconMove.className === computerShowIconMove.className) {
                    pScore.innerHTML = pScore.innerHTML;
                    cScore.innerHTML = cScore.innerHTML;
                    firstToText.innerHTML = 'Tie';
                    firstToText.style.color = 'goldenrod';

                } else if (showIconMove.className === computerOptions[0] && computerShowIconMove.className === computerOptions[2]) {
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    firstToText.innerHTML = 'Player win';
                    firstToText.style.color = 'green';
                } else if (showIconMove.className === computerOptions[0] && computerShowIconMove.className === computerOptions[1]) {
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    firstToText.innerHTML = 'Computer wins'
                    firstToText.style.color = 'red';
                } else if (showIconMove.className === computerOptions[1] && computerShowIconMove.className === computerOptions[2]) {
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    firstToText.innerHTML = 'Computer wins'
                    firstToText.style.color = 'red';
                } else if (showIconMove.className === computerOptions[1] && computerShowIconMove.className === computerOptions[0]) {
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    firstToText.innerHTML = 'Player win';
                    firstToText.style.color = 'green';
                } else if (showIconMove.className === computerOptions[2] && computerShowIconMove.className === computerOptions[0]) {
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    firstToText.innerHTML = 'Computer wins'
                    firstToText.style.color = 'red';
                } else if (showIconMove.className === computerOptions[2] && computerShowIconMove.className === computerOptions[1]) {
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    firstToText.innerHTML = 'Player win';
                    firstToText.style.color = 'green';
                }
            }) 
        }
    )}

    startGame();
}

game();