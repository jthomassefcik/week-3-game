var hangman = {
    results: $("#results"),
    wins: 0,
    losses: 0,
    user_guess: function (event) {
        var key = event.key;
        $("<p>").css("display", "inline").html(key + " ").appendTo(results);
        hangman.computer_selection();

        
    },
    computer_selection: function () {
        var words = ["fireworks", "hotdog", "hamburger", "flyover", "freedom"];
        var current_computer_selection = words[Math.floor(Math.random() * words.length)];
        hangman.print_blanks(current_computer_selection)
        
    },
    print_blanks: function (string) {
        blanks = ""
        for (var index = 0; index < string.length; index++) {
            blanks = blanks + "_"
            console.log(blanks + "_");
            document.getElementById("compchoice").innerHTML = blanks;    
        }
    },
    replaceLetter: function (key) {
        for (var i = 0; i < current_computer_selection.length; i++) {
            var current_computer_selection = blanks.replace(/_/, key) = array[i];
            
        }
    }
    
    



}