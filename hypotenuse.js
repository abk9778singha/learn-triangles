const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfSquares(a, b){
 const sumOfSquares = a*a + b*b ;
 return sumOfSquares;
}

function calculateHypotenuse(){
   const sumOfSquares = calculateSumOfSquares(Number(sides[0].value ),Number(sides[1].value));
   var lengthOfHypotenuse = Math.sqrt(sumOfSquares)
   lengthOfHypotenuse = lengthOfHypotenuse.toFixed(4);
   console.log(sumOfSquares);
   outputEl.innerText = 'The length of hypotenuse is ' + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);












