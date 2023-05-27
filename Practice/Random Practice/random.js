// let floor = Math.floor(1.8);
// let ceiling = Math.ceil( Math.PI );
// let random = Math.random();

// console.log(floor);
// console.log(ceiling);
// console.log(random);

// function d6() {
//     let roll = Math.random();
//     if (roll > .1 && roll < .2) {
//         roll = 1;
//     }
//     else if (roll > .2 && roll < .3) {
//         roll = 2;
//     }
//     else if (roll > .3 && roll < .4) {
//         roll = 3;
//     }
//     else if (roll > .4 && roll < .5) {
//         roll = 4;
//     }
//     else if (roll > .5 && roll < .6) {
//         roll = 5;
//     }
//     else if (roll > .6 && roll < .7) {
//         roll = 6;
//     }
//     else {
//         roll = "roll again";
//     }
//     return roll;
// }

// let playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

let lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function provideRandomAnswers() {
    // RANDOMLY CHOOSE A NUMBER BETWEEN 0 - 19
    let randomNumber = Math.floor(Math.random() * 20); // 0 - 0.9999 * 20 = 0 - 19.9999999
    // GRAB THE RANDOM ANSWER USING THE RANDOM NUMBER
    let randomAnswer = lifesAnswers[randomNumber]
    console.log(randomAnswer)
    // DISPLAY THE RESPONSE
    // let element = document.querySelector(".output")
    // element.innerText = randomAnswer
}

provideRandomAnswers();

// let blink_speed = 1000; // every 1000 == 1 second, adjust to suit
// let t = setInterval(function () {
//     let ele = document.getElementById('myBlinkingDiv');
//     ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
// }, blink_speed);