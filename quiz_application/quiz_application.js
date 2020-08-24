function question(text, choices, answer) {
    this.text = text,
        this.choices = choices,
        this.answer = answer
}

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionsIndex = 0
}

//quiz prototype
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionsIndex];
}

question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

//quiz isfinished
Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionsIndex;
}

//quiz guess
Quiz.prototype.guess = function(answer) {
    var question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionsIndex++;
}


var q1 = new question("what is the best programming ?", ["c#", "phyton", "asp.net", "javascript"], "javascript");
var q2 = new question("what is the most popular programming ?", ["c++", "phyton", "jquery", "javascript"], "javascript");
var q3 = new question("what is the  best modern programming ?", ["c#", "angularjs", "asp.net", "javascript"], "javascript");

var questions = [q1, q2, q3];

//start quiz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
    if (quiz.isFinish()) {
        showscore();
        i
    } else {
        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector('#question').innerHTML = `<div class=quests>${question.text}</div>`;
        var buton = document.querySelectorAll('.button');
        for (var i = 0; i < choices.length; i++) {
            buton[i].innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }
        sayacYazdir();
    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function() {
        quiz.guess(guess);
        loadQuestion();
    }
}



function showscore() {
    var score = `<div style=margin-left:40px><h2>Score</h2><h4>${quiz.score}</h4></div>`;
    document.querySelector('.content').innerHTML = score;
}

function sayacYazdir() {
    var total = quiz.questions.length;
    var sayac = quiz.questionsIndex + 1;
    console.log(sayac);
    document.querySelector('.sayac').innerHTML = `${sayac}. question, total: ${total}`;
}