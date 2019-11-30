var questions = [
    prompt: "Where do we link our style sheets on a HTML page? \n(a) header\n\ (b) Body\n (c) Footer", 

    answer: "a"



]
var score = 0; 

for(var i=0, i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++
        alert("Correct!");
    }

    else{
        alert("Nope try again!");
    }

alert("You got" + score + "/" + questions.length)


}