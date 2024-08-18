function play() {
    document.getElementById('first').classList.add('hidden');
    document.getElementById('second').classList.remove('hidden');
    randomNumber()
}

function randomNumber() {
    const word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '/'];
    const randomNum = Math.floor(Math.random() * 27);
    document.getElementById('word').innerText = word[randomNum];
}



function Click(alphabet) {
    const word = document.getElementById('word').innerText
    if (word === alphabet) {
        const score = document.getElementById('score').innerText;
        const scoreNum = parseInt(score);
        const totalScore = scoreNum + 10;
        document.getElementById('score').innerText = totalScore;
        randomNumber()
    } else {
        const life = document.getElementById('life').innerText;
        const lifeNum = parseInt(life);
        const totalLife = lifeNum - 1;
        document.getElementById('life').innerText = totalLife;
        randomNumber()
        if (totalLife === 0) {
            document.getElementById('second').classList.add('hidden')
            document.getElementById('third').classList.remove('hidden')
            const score = document.getElementById('score').innerText;
            document.getElementById('new-score').innerText = score;
        }
    }

}

function playAgain() {
    document.getElementById('third').classList.add('hidden')
    document.getElementById('second').classList.remove('hidden')
    document.getElementById('life').innerText = 5
    randomNumber()
}

