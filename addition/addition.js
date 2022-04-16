//ADDITION

// enkele variablenen initializeren
let score = 0;
let highscore = localStorage.getItem('highscore_add');
let continueGame = localStorage.getItem('continue');
let plays = 10;
let dummyAnswer1, dummyAnswer2
let answer, opt1, opt2, opt3, num1, num2;
let arr = [];

// START PAGE
// on window reload, omdat de button anders te veel tijd nam en deze moest telkens gebeuren
// wanneer men de page refreshed en dus voor alle andere functies
window.onload = function toggleStartPage() {
    const startpage = document.getElementById('start_page');
    const gamepage = document.getElementById('game_page');

    function showPage() {
        startpage.style.display = "block";
        gamepage.style.display = "none";
    }

    function hidePage() {
        document.getElementById('start').addEventListener('click', function () {
            console.log("button works");
            startpage.style.display = "none";
            gamepage.style.display = "block";
        });
    }

    showPage();
    hidePage();
}



// MAIN PAGE
function resetScore() {
    score = 0;
}

// Randomizer --> geeft een random getal tussen twee gekozen getallen. 
function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// getCalculating --> doet de bewerking en returnd het antwoord
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
    dummyAnswer1 = randomizer(0, 10);
    dummyAnswer2 = randomizer(0, 10);

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

            document.getElementById('wrong_answer').style.display = "none";
            document.getElementById('wrong_answer_text').style.display = "none";

            generateEquation();
            setDummyAnswers();
            keepPlays();
        } else {
            console.log("wrong");
            document.getElementById('wrong_answer').style.display = "block";
            document.getElementById('wrong_answer_text').style.display = "block";

            score--;

        }

    })

    document.getElementById("opt2").addEventListener("click", function () {
        if (document.getElementById("opt2").innerHTML == answer) {
            console.log("gud");

            score++;

            document.getElementById('wrong_answer').style.display = "none";
            document.getElementById('wrong_answer_text').style.display = "none";

            generateEquation();
            setDummyAnswers();
            keepPlays();

        } else {
            console.log("wrong");
            document.getElementById('wrong_answer').style.display = "block";
            document.getElementById('wrong_answer_text').style.display = "block";

            score--;
        }


    })

    document.getElementById("opt3").addEventListener("click", function () {
        if (document.getElementById("opt3").innerHTML == answer) {
            console.log("gud");

            score++;

            document.getElementById('wrong_answer').style.display = "none";
            document.getElementById('wrong_answer_text').style.display = "none";

            generateEquation();
            setDummyAnswers();
            keepPlays();
        } else {
            console.log("wrong");
            document.getElementById('wrong_answer').style.display = "block";
            document.getElementById('wrong_answer_text').style.display = "block";

            score--;

        }


    })
}

// keepPlays --> telt af, en eindigt het spel. 
// Wanneer de plays = 0 dan wordt de score gezet aan score 
//  en wordt ook de highscore geintializeerd
//  als extra wordt er telkens een message output
function keepPlays() {
    plays--;
    if (score < 0) resetScore();

    if (plays == 0) {
        localStorage.setItem('score_add', score);

        console.log("Game has ended");
        console.log(score);

        if (score > highscore) highscore = score;
        localStorage.setItem('highscore_add', highscore);

        switch (score) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                document.getElementById('extra_info').innerHTML = "Try again";
                break;
            case 5:
                document.getElementById('extra_info').innerHTML = "You somehow did it!";
                break;
            case 6:
            case 7:
            case 8:
                document.getElementById('extra_info').innerHTML = "Good job";
                break;
            case 9:
                document.getElementById('extra_info').innerHTML = "You were so close!";
                break;
            case 10:
                document.getElementById('extra_info').innerHTML = "You are a smart Cookie";
                break;
            default:
                document.getElementById('extra_info').innerHTML = "Sorry, there must be an error"
                break;
        }

        stopTheGame()
    }
}


// END PAGE (GAME OVER)
//Stopt de game en toont een soort game over pagina 
//toont de score als de highscore en dan 
// geeft het men 3 keuzes; continue, replay en exit
function stopTheGame() {
    let endpage = document.getElementById('end_page');
    let gamepage = document.getElementById('game_page');
    let endscore = document.getElementById('end_score');
    let high_score = document.getElementById('high_score');

    function showEndPage() {
        endpage.style.display = "block";
        gamepage.style.display = "none";
    }

    function hideEndPage() {
        document.getElementById('start').addEventListener('click', function () {
            console.log("button works");
            endpage.style.display = "none";
            gamepage.style.display = "none";
        });
    }

    endscore.innerHTML = score;
    high_score.innerHTML = highscore;
    showEndPage();
    hideEndPage();
}

generateEquation();
setDummyAnswers();
checkForGoodAnswer();