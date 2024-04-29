//  document.querySelector('#number').textContent ;



// document.querySelector('#input1').value 


let number1 = Math.trunc(Math.random() * 10) + 1;








let score = 20;
let highscore = 0;

document.querySelector('#score1').textContent = `💯 Score: ${score}`;

document.querySelector('#button2').addEventListener('click', function () {

    const userInput = Number(document.querySelector('#input1').value);

    if (!userInput) {
        document.querySelector('#message').textContent = '❌ Not Number';

    }
    else if (userInput > number1) {
        document.querySelector('#message').textContent = '📉 Guess Lower';
        score--;
        document.querySelector('#score1').textContent = `💯 Score: ${score}`;

    }
    else if (userInput < number1) {
        document.querySelector('#message').textContent = '📈 Guess Higher';
        score--;
        document.querySelector('#score1').textContent = `💯 Score: ${score}`;
    }
    else if (userInput === number1) {
        document.querySelector('#message').textContent = '🎉 Correct Number!'
        document.querySelector('body').style.backgroundColor = 'rgb(0, 189, 0)';
        document.querySelector('#number').style.width = '420px';
        document.querySelector('#number').textContent = number1;
        document.querySelector('#number').style.fontSize = '4.5rem';
        if (score > highscore) {

            document.querySelector('#highscore1').textContent = score;
            highscore = score;

        }
        else {
            document.querySelector('#highscore1').textContent = highscore;

        }

    }
})

let chance = 2;
document.querySelector('#button1').addEventListener('click', function () {


    number1 = Math.trunc(Math.random() * 10) + 1;

    document.querySelector('#input1').value = '';

    document.querySelector('#highscore1').textContent = highscore;

    score = 20;
    document.querySelector('#score1').textContent = `💯 Score: ${score}`;
    document.querySelector('body').style.backgroundColor = '#000000e0';
    document.querySelector('#message').textContent = `${chance} Game`;
    document.querySelector('#number').style.width = '150px'
    document.querySelector('#number').textContent = '?'

    ++chance;

})
document.querySelector('#button3').addEventListener('click', function () {
    document.querySelector('#input1').value = '';



})





