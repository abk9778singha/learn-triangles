const sides = document.querySelectorAll('.side-input');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#output');

function useHeronFormula(a, b, c){
 const s = (a + b + c) / 2;
 const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
 return area;
}

function calculateAreaOfTriangle(){
   var areaOfTriangle = useHeronFormula(Number(sides[0].value), Number(sides[1].value), Number(sides[2].value));
   areaOfTriangle = areaOfTriangle.toFixed(4);
//    console.log(areaOfTriangle);
   outputEl.innerText = "Area of a triangle using heron's formula is " + areaOfTriangle + ' units';
}

areaBtn.addEventListener('click',calculateAreaOfTriangle);













