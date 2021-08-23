const guessingGame = () => {
    let randNum = Math.floor(Math.random() * 100) + 1;
    let gameOver = false;
    return function (num) {
        while (!gameOver) {
            if (randNum === num) {
                if (gameOver) {
                    return "The game is over";
                }
                gameOver = true;
                return `${num} was the correct guess!`;
            } else if (randNum > num) {
                return `${num} is too low`;
            } else {
                return `${num} is too high`;
            }
        }
    };
};

console.log(guessingGame(1));
console.log(guessingGame(25));
console.log(guessingGame(80));
