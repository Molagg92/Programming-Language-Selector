window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) { surveySubmission(e);});
})
function surveySubmission(e) {
  e.preventDefault();

  const rangeInput = document.querySelector('input[name="range"]:checked').value;
  const defencesInput = document.querySelector('input[name="defences"]:checked').value;
  const roleInput = document.querySelector('input[name="role"]:checked').value;
  // const trainingInput = document.querySelector('input[name="training"]:checked').value;
  // const petInput = document.querySelector('input[name="pet"]:checked').value;


  const pythonMan= document.getElementById('pythonMan');
  const rubyLas = document.getElementById('rubyLas');
  const swiftWoman = document.getElementById('rangerWoman');
  const tryAgain = document.getElementById('tryAgain');

  let result = "undefined"
  
  if (rangeInput === "close" && defencesInput === "tough" && roleInput === "leader") {
    pythonMan.removeAttribute('class');
    result = pythonMan;
    rubyLas.setAttribute("class", "hidden");
    swiftWoman.setAttribute("class", "hidden");
    tryAgain.setAttribute("class", "hidden");
  } 
  else if (rangeInput === "distance" && defencesInput === "smart" && roleInput === "support"){
    rubyLas.removeAttribute('class');
    result = rubyLas;
    pythonMan.setAttribute("class", "hidden");
    swiftWoman.setAttribute("class", "hidden");
    tryAgain.setAttribute("class", "hidden");
  } 
  else if (rangeInput === "50/50" && defencesInput === "slick" && roleInput === "solo"){
    swiftWoman.removeAttribute('class');
    result = swiftWoman;
    pythonMan.setAttribute("class", "hidden");
    rubyLas.setAttribute("class", "hidden");
    tryAgain.setAttribute("class", "hidden");
  } 
  else if(result = "undefined"){
    tryAgain.removeAttribute("class");
    result = tryAgain;
    pythonMan.setAttribute("class", "hidden");
    rubyLas.setAttribute("class", "hidden");
    swiftWoman.setAttribute("class", "hidden");
  }

  console.log(result);
}