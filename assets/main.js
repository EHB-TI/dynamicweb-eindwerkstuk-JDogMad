var answer = 0;

function generateQuestions() {
    //Question generation complete
    var numero_1 = Math.floor(Math.random() * 10);
    var numero_2 = Math.floor(Math.random() * 10);

    //answer to question 
    answer = numero_1 + numero_2;

    //Fakes generation complete
    var fake_numero1 = Math.floor(Math.random() * 12 + 1);
    var fake_numero2 = Math.floor(Math.random() * 10 + 1);

    if (fake_numero1 == fake_numero2 || fake_numero2 == answer || fake_numero1 == answer) {
        fake_numero1 = fake_numero1 + 2;
        fake_numero1 = fake_numero2 + 1;
    } else if (fake_numero1 < 0 || fake_numero2 < 0) {
        fake_numero1 = fake_numero1 + 2;
        fake_numero2 = fake_numero2 + 1;
    }

    //making the array with the possible answer
    var array = [answer, fake_numero2, fake_numero1];
    for (let i = 0; i < array.length; i++) {
        array.sort(() => Math.random() - 0.5);
    }

    console.log(numero_1 + " + " + numero_2 + " = " + answer);
    console.log(fake_numero1);
    console.log(fake_numero2);
    console.log(array);
}

generateQuestions();