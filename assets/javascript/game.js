$(document).ready(resetHangman)
var answerWord = "";
var displayedAnswer = "";




function chooseWord() {
    var words = ["fireworks", "hotdog", "hamburger", "flyover", "freedom"];
    return words[Math.floor(Math.random() * words.length)];
}

function blanksforAnswer(answerWord) {
    var answerWord = answerWord
    var blanks = "";
    for (var i = 0; i < answerWord.length; i++) {
        blanks = blanks + "_";
    }
    
}

function resetHangman() {
    answerWord = chooseWord();
    displayedAnswer = blanksforAnswer(answerWord);
    $("<div>").html(blanks).appendTo($("#current-word"));
}
        




})








// save this for later 
// var key = event.key;