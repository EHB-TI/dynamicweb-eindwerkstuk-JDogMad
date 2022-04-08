//ADDITION

// enkele variablenen initializeren
let score = 0;
let plays = 10;
let dummyAnswer1, dummyAnswer2
let answer, opt1, opt2, opt3, num1, num2;
let arr = [];

// Randomizer --> geeft een random getal tussen twee gekozen getallen. 
function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// getCalculating --> doet de bewerking en returnd de antwoord
function getCalculating(int1, int2) {
    return int1 + int2;
}

// generateEquation --> maakt twee getallen dmv de randomizer, haalt het antwoord van 
// de functie getCalculating en zet ze in de html pagina. 
function generateEquation() {
    num1 = randomizer(0, 20);
    num2 = randomizer(0, 20);
    answer = getCalculating(num1, num2)

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("answer").innerHTML = answer;
}

// setDummyAnswers --> maakt twee dummy variabelen aan. 
// Daarna een array met 3 mogelijke antwoorden, met de for-loop kan je het randomizen 
// nadien zetten we de waarden terug naar html.
function setDummyAnswers() {
    dummyAnswer1 = randomizer(0, 20);
    dummyAnswer2 = randomizer(0, 20);

    arr = [dummyAnswer1, dummyAnswer2, answer];
    for (let i = 0; i < arr.length; i++) {
        arr.sort(() => Math.random() - 0.5);
    }

    document.getElementById("opt1").innerHTML = arr[0];
    document.getElementById("opt2").innerHTML = arr[1];
    document.getElementById("opt3").innerHTML = arr[2];
}

// checkForGoodAnswer --> checkt op basis van een click of het de juiste antwoord is 
function checkForGoodAnswer() {
    document.getElementById("opt1").addEventListener("click", function () {
        if (document.getElementById("opt1").innerHTML == answer) {
            console.log("gud");

            score++;

            generateEquation();
            setDummyAnswers();
            keepPlays();
        } else {
            console.log("wrong");

            score--;
        }
    })

    document.getElementById("opt2").addEventListener("click", function () {
        if (document.getElementById("opt2").innerHTML == answer) {
            console.log("gud");

            score++;

            generateEquation();
            setDummyAnswers();
            keepPlays();
        } else {
            console.log("wrong");

            score--;
        }
    })

    document.getElementById("opt3").addEventListener("click", function () {
        if (document.getElementById("opt3").innerHTML == answer) {
            console.log("gud");

            score++;

            generateEquation();
            setDummyAnswers();
            keepPlays();
        } else {
            console.log("wrong");

            score--;
        }
    })
}

// keepPlays --> telt af, en eindigt het spel. 
function keepPlays() {
    plays--;

    if (plays == 0) {
        console.log("Game has ended");
        console.log(score);
    } else {}
}


generateEquation();
setDummyAnswers();
checkForGoodAnswer();