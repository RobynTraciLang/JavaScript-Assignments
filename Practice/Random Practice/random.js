// var floor = Math.floor(1.8);
// var ceiling = Math.ceil( Math.PI );
// var random = Math.random();

// console.log(floor);
// console.log(ceiling);
// console.log(random);

// function d6() {
//     var roll = Math.random();
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

// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

// Another way:
function d6() {
    var roll = Math.random();
    let numbers = [1, 2, 3, 4, 5, 6];
    for (i = 0; i < numbers.length; i++) {
        roll = Math.ceil(Math.random(numbers[i]*10));
    }
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
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

function answerQuestions() {

}