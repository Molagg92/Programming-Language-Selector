window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", surveySubmition);
})

function surveySubmition(e) {
   e.preventDefault();
  let check = console.log("hello?");
  return check;



  
}




//----------------^^^^^^^^^^^^^^^ third try^^^^^^^^----------

// const range = document.querySelector("range");
// const defences = document.getElementById('defences');
// const role = document.getElementById('role');
// const training = document.getElementById('training');
// const pet = document.getElementById('pet');

// const pythonMan= document.getElementById('pythonMan');
// const rubyLas = document.getElementById('rubyLas');
// const swiftWoman = document.getElementById('rangerWoman');

// const rangeChoice = range.querySelector("input:checked").id;
// const defenceChoice = defences.querySelector("input:checked").id;
// const roleChoice = role.querySelector("input:checked").id;
// const trainingChoice = training.querySelector("input:checked").id;
// const petChoice = pet.querySelector("input:checked").id;

// let result;

// if (rangeChoice === 'close' && defenceChoice === 'tough' && roleChoice === 'leader') {
//   let result = pythonMan;
// } else if (rangeChoice === 'distance' && defenceChoice === 'smart' && roleChoice === 'support') {
//   let result = rubyLas;
// } else if (rangeChoice === '50/50' && defenceChoice === 'slick' && roleChoice === 'slick') {
//   let result = swiftWoman;
// }



// if (result === pythonMan) {
//   pythonMan.removeAttribute('class');
// } else if (result === rubyLas) {
//   rubyLas.removeAttribute('class');
// } else if (result === swiftWoman) {
//   swiftWoman.removeAttribute('class')
// }
// window.addEventListener("load", function() {
//   const  form = document.querySelector("form");
//   form.addEventListener("submit", surveySubmition)
// });


// ---------^^^^^^secod try^^^^^^----------

//   // determine the result based on the user's choices
//   let result;
//   if (rangeChoice === 'close' && defencesChoice === 'slick' && roleChoice === 'leader' && trainingChoice === 'dojo' && petChoice === 'owl') {
//     result = 'ruby';
//   } else if (rangeChoice === 'distance' && defencesChoice === 'tough' && roleChoice === 'solo' && trainingChoice === 'aim' && petChoice === 'snake') {
//     result = 'swift';
//   } else {
//     result = 'python';
//   }

//   // hide all results
//   pythonResult.classList.add('hidden');
//   rubyResult.classList.add('hidden');
//   swiftResult.classList.add('hidden');

//   // show the corresponding result
//   if (result === 'python') {
//     pythonResult.classList.remove('hidden');
//   } else if (result === 'ruby') {
//     rubyResult.classList.remove('hidden');
//   } else {
//     swiftResult.classList.remove('hidden');
//   }
// });




// window.addEventListener("load", function() {
//   const  form = this.document.querySelector("form");
//   form.addEventListener("submit", surveySubmition)
// });

// function surveySubmition(e) {
//   e.preventDefault();
//   const close = document.getElementById("close").value;
//   const distance = document.getElementById("distance").value;
//   const dual = document.getElementById("50/50").value;

//   const slick = document.getElementById("slick").value;
//   const tough = document.getElementById("tough").value;
//   const smart = document.getElementById("smart").value;

//   const leader = document.getElementById("leader").value;
//   const support = document.getElementById("support").value;
//   const solo = document.getElementById("solo").value;

//   const library = document.getElementById("library").value;
//   const dojo = document.getElementById("dojo").value;
//   const aim = document.getElementById("aim").value;

//   const boar = document.getElementById("boar").value;
//   const owl = document.getElementById("owl").value;
//   const snake = document.getElementById("snake").value;

// } 
//-------------------^^^^^^^^^^^^^ first try^^^^^^^^^^^^----------------