const lettersList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
// let variables allow you to change their values and data type in reassignment, so 'let guesses = 10' can change to 'let guesses = [one, two]'
// if const variables have immutable data types like integer, boolean as values, you won't be able to change these values
// this is why 'guesses' is a let variable b/c we will be changing/decreasing this integer value througout the code
// if const variables have mutable data types like array, object(dictionary) as values, you can append/remove these value's items
// but not reassign const variables to another different value

let guesses = 10;
const guessesList = [];
const snowmanLetter = lettersList[Math.floor(Math.random() * lettersList.length)];

const resetGame = () => {
    guesses = 10;
    guessesList = [];
    snowmanLetter = lettersList[Math.floor(Math.random() * lettersList.length)];
}

const endGame = (status) => {
    document.querySelector("#game-status").innerHTML = `${status} The letter is <h2>${snowmanLetter.toUpperCase()}</h2>`;
    document.removeEventListener("keydown", playGame);
}
/*
    1. make guesses show up in page

    2. handle key presses: a key event triggers populating a guess
        - creating the key event handler function
            - this describes the behavior of when a key is pressed (a key is a letter presssed from our keyboard)
                - the behavior is: if key is a letter
                    - we add to currentLetter
                    - add to guessesList
                    - decrease guesses
                - if the key is not letter
                    - display alertbox
            - also describe how to stop playing the game

    3. add an eventlistener to trigger event handler to run

*/

// 1. make guesses show up in page
document.getElementById("remaining").textContent = ` ${guesses}`;

// 2. handle key presses

// arrow functions are part of 'javascript es6', this event parameter is needed to determine/keep track of which specific key we pressed
const playGame = (event) => {
    let playerLetter = event.key; // the data type of 'event' is an object, & data type of 'key' is a string(which is mutable)

    if (lettersList.includes(playerLetter)) {
        if (playerLetter === snowmanLetter) {
            endGame("You won!")

        } else if (playerLetter != snowmanLetter) {
            --guesses; // this pre decrement '--' decreases guesses by one
            guessesList.push(playerLetter)
            console.log(guesses);
        }

    } else {
        alert("You must choose a letter!")
    }

    if (guesses < 1) {
        endGame("You lose!")
    }

    document.getElementById("player-guess").textContent = ` ${playerLetter}`;
    document.getElementById("guessed").textContent = `${guessesList},`;
    document.getElementById("remaining").textContent = ` ${guesses}`;

}

document.addEventListener("keydown", playGame); // playGame is a 'callback function', which is a function that gets passed in as an argument







