var answerWord = "";
var displayedAnswer = "";


$(document).ready(function () {
    answerWord = chooseWord();
    displayedAnswer = blanksforAnswer(answerWord);
    $("<div>").html(displayedAnswer).appendTo($("#instructions"));


    console.log(answerWord);
    console.log(displayedAnswer);
});

function chooseWord() {
    var words = ["fireworks", "hotdog", "hamburger", "flyover", "freedom"];
    return words[Math.floor(Math.random() * words.length)];
}

function blanksforAnswer(computerSelection) {
    var blanks = "";
    for (var i = 0; i < computerSelection.length; i++) {
        blanks = blanks + "_";

    }
    return blanks;

}

function replaceAt(n, c, ogString) {
    return ogString.substring(0, n) + c + ogString.substring(n + 1, ogString.length);
}

function handleuserGuess(event) {
    var letter = event.key
    console.log(letter)
}

function verifyLetter(event, displayedAnswer, answerWord) {
    letter = event.key
    var verify = -1;
    verify = answerWord.indexOf(letter);
    while (verify >= 0) {
        replaceAt(verify, letter, displayedAnswer);
        console.log(displayedAnswer);
    }
}


// function verifyLetter(letter,displayedAnswer,answer) {

//     var verify = -1;
//     verify = answer.indexOf(letter);
//     while (verify >= 0 ) {
//         replaceAt(verify,letter,answer)
//     }
// }

function resetHangman() {
    answerWord = chooseWord();
    displayedAnswer = blanksforAnswer(answerWord);
    $("#instructions").empty()
    $("<div>").html(displayedAnswer).appendTo($("#instructions"));
}



// save this for later 
// var key = event.key;