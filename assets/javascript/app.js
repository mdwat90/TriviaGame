$(document).ready(function () {

    // gameInfo (questions, answers, and gifs)

    // function that generates questions

    // function that generates answers into each HTML button

    // function that generates gifs

    // setInterval function

    // startGame function: contains setInterval, and question/answer/gif functions

    // when timer === 0, clearInterval, setTimeOut(for 5 seconds), text("times up!", correct answer) and gif

    // after 5 seconds, call setInteval function and question/answer/gif functions

    // When all questions have been asked and all gifs displayed, function that shows how many
    // questions were answered correctly and how many they got wrong

    // button that allows player to start game over without reloading the page

    console.log("ready!");


    var gameInfo = {
        questions: ["Peter Parker is a photographer for:",
            "Captain America was frozen in which war?",
            "Edwin Jarvis is the butler to:",
            "The Thing has how many fingers on both hands, including his thumbs?",
            " Silver Surfer's 'surfboard' is composed of:",
            "Nick Fury has a brother who became the villain:",
            "What vehicle is the Avengers primary mode of transport?",
            "What is Captain America's shield made out of?",
            "What was Natalia Romanova before she became a Russian spy?",
            "What is the name of Thors Hammer?",
        ],


        answers: {
            answerChoices: {
                a: [{answer: "The Daily Bugle", iscorrect: "true"}, {answer: "World War I",iscorrect: "false"}, {answer: "Bruce Wayne", iscorrect: "false"}, {answer: "8", iscorrect: "true"}, {answer: "Adamantium", iscorrect: "false"}, {answer: "Venom", iscorrect: "false"}, {answer: "A bus", iscorrect: 'false'}, {answer: "Indium", iscorrect: 'false'}, {answer: "A thief", iscorrect: 'false'}, {answer: "Silje", iscorrect: 'false'}],
                b: [{answer: "The Daily Planet", iscorrect: "false"}, {answer: "World War II",iscorrect: "true"}, {answer: "Charles Xavier", iscorrect: "false"}, {answer: "6", iscorrect: "false"}, {answer: "Silver", iscorrect: "false"}, {answer: "Viper", iscorrect: 'false'}, {answer: "The Quinjet", iscorrect: 'true'}, {answer: "Thallium", iscorrect: 'false'}, {answer: "A ballet dancer", iscorrect: 'true'}, {answer: "Sigrid", iscorrect: 'false'}],
                c: [{answer: "The New York Times", iscorrect: "false"}, {answer: "Cold War", iscorrect: "false"}, {answer: "Tony Stark", iscorrect: "true"}, {answer: "10", iscorrect: "false"}, {answer: "The same material as his body", iscorrect: "true"}, {answer: "The Red Skull", iscorrect: 'false'}, {answer: "The Blackbird", iscorrect: 'false'}, {answer: "Vibranium",iscorrect: 'true'}, {answer: "A lawyer", iscorrect: 'false'}, {answer: "Eero", iscorrect: 'false'}],
                d: [{answer:"The Rolling Stone", iscorrect: "false"}, {answer: "American Civil War",iscorrect: "false"}, {answer: "Brian Braddock", iscorrect: "false"}, {answer: "4",iscorrect: "false"}, {answer: "Ice", iscorrect: "false"}, {answer: "Scorpio", iscorrect: 'true'}, {answer: "The Blackhawk", iscorrect: 'false'}, {answer: "Aluminum", iscorrect: 'false'}, {answer: "A politician", iscorrect: 'false'}, {answer: "Mjolnir", iscorrect: 'true'}],
            },
            correctAnswers: {
                correct: ["The Daily Bugle","World War II","Tony Stark","8","The same material as his body","Scorpio","The Quinjet","Vibranium","A ballet dancer","Mjolnir"]
            },
        },


        gifs: [
            '<img src="https://media.giphy.com/media/3CGD3FtKx6Zpu/giphy.gif" width="350" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/eI4LekQoZUElW/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/WJZdOtltegO76/giphy.gif" width="350" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/gVHdWaV7V5KXS/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/ksIjcjPao6OVq/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/Oj8SHfNt9w6Gc/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/qzTqP13pJqAKI/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/8xHpZTacWUREs/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/WhpXq4eUMC0Uw/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/Nmmb3MW2tABiw/giphy.gif" width="325" height="200" alt="loading..." />',
        ],

        correctGifs: [
            '<img src="https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/14udF3WUwwGMaA/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/1136UBdSNn6Bu8/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/tyxovVLbfZdok/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/u33BcMbqQmJGg/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/YXpp9YxWhyWBy/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/xTiTnw6Yg5nzWwQh5C/giphy.gif" width="325" height="200" alt="loading..." />',
            '<img src="https://media.giphy.com/media/PTrmNrpCfGBUY/giphy.gif" width="325" height="225" alt="loading..." />',
            '<img src="https://media.giphy.com/media/yoJC2COHSxjIqadyZW/giphy.gif" width="325" height="200" alt="loading..." />',
        ]
    };

    $(".answers").hide();
    $("#playAgain").hide();

    var counter = 0;
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var counter5 = 0;
    var counter6 = 0;
    var correct = 0;
    var wrong = 0;
    var intervalID;


    function question() {
        $("#question").text(gameInfo.questions[counter]);
        counter++;
        counter1++;
        // console.log(counter1);
        if(counter1 === 11) {
            endGame();
        }
    }

    function answers() {
        $("#answer1").text(gameInfo.answers.answerChoices.a[counter2].answer).val(gameInfo.answers.answerChoices.a[counter2].iscorrect);
        $("#answer2").text(gameInfo.answers.answerChoices.b[counter2].answer).val(gameInfo.answers.answerChoices.b[counter2].iscorrect);
        $("#answer3").text(gameInfo.answers.answerChoices.c[counter2].answer).val(gameInfo.answers.answerChoices.c[counter2].iscorrect);
        $("#answer4").text(gameInfo.answers.answerChoices.d[counter2].answer).val(gameInfo.answers.answerChoices.d[counter2].iscorrect);
        counter2++;
    }

    
    // function that says "Wrong!" if wrong answer is selected
    function wrongAnswerAlert() {
        $("#question").text("Wrong!");
        $("#correctAnswer").show().text("Correct Answer: " + gameInfo.answers.correctAnswers.correct[counter3]);
        clearInterval(intervalID);
        $("#gif").show().html(gameInfo.gifs[counter4]);
        $(".answers").hide();
        $("#answerChoices").hide();
        setTimeout(game, 5000);
    }

    // function that says "Correct!" if correct answer is selected
    function correctAnswerAlert() {
        $("#question").text("You Got It!");
        clearInterval(intervalID);
        $("#gif").show().html(gameInfo.correctGifs[counter5]);
        $(".answers").hide();
        $("#answerChoices").hide();
        setTimeout(game, 5000);
    }

    $("#answer1").click(function() {
        if($("#answer1").val() === "true") {
            intervalID2 = setInterval(correctAnswerAlert(), 5000);
            correct = correct++;
        } else {
            intervalID2 = setInterval(wrongAnswerAlert(), 5000);
            wrong = wrong++;
        }
   });
    $("#answer2").click(function() {
        if($("#answer2").val() === "true") {
            intervalID2 = setInterval(correctAnswerAlert(), 5000);
            correct = correct++;
        } else {
            intervalID2 = setInterval(wrongAnswerAlert(), 5000);
            wrong = wrong++;
        }
   });
    $("#answer3").click(function() {
        if($("#answer3").val() === "true") {
            intervalID2 = setInterval(correctAnswerAlert(), 5000);
            correct = correct++;
        } else {
            intervalID2 = setInterval(wrongAnswerAlert(), 5000);
            wrong = wrong++;
        }
   });
    $("#answer4").click(function() {
        if($("#answer4").val() === "true") {
            intervalID2 = setInterval(correctAnswerAlert(), 5000);
            correct = correct++;
        } else {
            intervalID2 = setInterval(wrongAnswerAlert(), 5000);
            wrong = wrong++;
        }
   });

    // function that displays correct answer after time is up
    function timesUp() {
        clearInterval(intervalID);
        $("#question").text("Time's Up!");
        $("#correctAnswer").show().text("Correct Answer: " + gameInfo.answers.correctAnswers.correct[counter3]);
        $("#gif").show().html(gameInfo.gifs[counter6]);
        $(".answers").hide();
        $("#answerChoices").hide();
    }

    // timer function; displays timesUp() after timer hits 0
    function timer() {
        time--;
        $("#timer").text("00 : " + time);
        if (time < 10) {
            $("#timer").text("00 : 0" + time);
        }
        if (time === 0) {
            timesUp();
            setTimeout(game, 5000);
            wrong = wrong++;
        }
    }

    // sets interval for timer; clears interval for timer === 0 interval; 
    // resets time, question, answers, and gifs for each right/wrong answer
    function game() {
        intervalID = setInterval(timer, 1000);
        time = 21;
        $("#startGame").hide();
        $("#correctAnswer").hide();
        $("#gif").hide();
        $(".answers").show();
        $("#answerChoices").show();
        timer();
        question();
        answers();
        counter3++;
        counter4++;
        counter5++;
        counter6++;
    }

    // code is correct
    $("#startGame").show().on("click", function () {
        game();
        counter3 = 0;
        counter5 = 0;
        counter4 = 0;
        counter6 = 0;
    });

    function endGame() {
        $("#timer").hide();
        clearInterval(intervalID);
        $("#question").text("Game Over!");
        // $(".answers").hide();
        // $("#answerChoices").hide();
        $("#playAgain").show();   
    }

});