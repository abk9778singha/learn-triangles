const quizForm =document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAnswers =[
'90°',
'right angled',
'one right angle' ,
'12, 16, 20' ,
'a + b > c' ,
'45°' ,
'41°' ,
'a + b + c' ,
'no' ,
'45°'
];

function calculateScore() {
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    // console.log(formResults);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index =index + 1;
    }
//  console.log(score, index);
 outputEl.innerText = 'Your score is ' + score;
}


submitAnswerBtn.addEventListener('click', calculateScore)











