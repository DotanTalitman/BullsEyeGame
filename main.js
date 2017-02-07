
$(document).ready(function () {
    var myGuess, computerNumbers = []
        , answer = ""
        , bullsEyes = 0;
    var log = console.log;
    "use strict";
    computerNumbers[0] = Math.floor((Math.random() * 10));
    computerNumbers[1] = Math.floor((Math.random() * 10));
    computerNumbers[2] = Math.floor((Math.random() * 10));
    console.log("your Number is", computerNumbers)
    $(".btn").click(function (e) {
        answer = "";
        bullsEyes = 0;
        myGuess = $(".box input");
        var append = "";
        myGuess.each(function (index, el) {
            append += `${el.value} `
        })
        $("#warp").append(`<div class="guess">${append}</div>`)
        for (var i = 0; i < myGuess.length; i++) {
            var myGuessNum = myGuess[i].value;
            for (var j = 0; j < computerNumbers.length; j++) {
                var num = computerNumbers[j];
                if (num == myGuessNum && i == j) {
                    bullsEyes++;
                    answer += ' <i class="fa fa-times" aria-hidden="true"></i>';
                }
                else if (num == myGuessNum) {
                    answer += '<i class="fa fa-check" aria-hidden="true"></i>'
                }
            }
        }
        $("#warp").append(`<div class="answer">${answer}</div>`)
        $("#warp").append(`<div style="width:100%;"/>`)
        if (bullsEyes == 3) {
            $(".box").addClass("rotate")
        }
    });
});