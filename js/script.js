let image1 = document.getElementById('p1-img');
let image2 = document.getElementById('p2-img');
let playButton = document.getElementById('btn-play');
let resetButton = document.getElementById('btn-reset');
let winnerDisplay = document.getElementById('winner-display');

const diceImages = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'];

playButton.addEventListener('click', function() {
    const randomIndex1 = Math.floor(Math.random() * diceImages.length);
    const randomIndex2 = Math.floor(Math.random() * diceImages.length);

    image1.src = diceImages[randomIndex1];
    image2.src = diceImages[randomIndex2];


    if (randomIndex1 + 1 > randomIndex2 + 1) {
        winnerDisplay.innerHTML = '<strong>Player 1 wins!</strong>';
    } else if (randomIndex1 + 1 < randomIndex2 + 1) {
        winnerDisplay.innerHTML = '<strong>Player 2 wins!</strong>';
    } else {
        winnerDisplay.innerHTML = '<strong>It\'s a tie!</strong>';
    }
});

resetButton.addEventListener('click', function() {
    image1.src = '/img/dice1.png';
    image2.src = '/img/dice1.png';
    winnerDisplay.innerHTML = '';
});


