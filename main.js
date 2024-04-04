// main.js

function init(){
    console.log("hello world!");
  }
  
  init()


// make states to switch between.

const state1 = {
  textbox : "I can read your mind.",
}

const state2 = {
  textbox : "Pick a number from 01-99",
}

const state3 = {
  textbox : "Add both digits together to get a new number.",
}

// function stateUpdater(){
// if next button is clicked, id="topTextBox changes from state2 to state 3"
  // if(lowerButton)
// }




// BUTTONS:
// this is the NEXT button.
function onNextClick(){
  alert("Next button clicked");
}

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', onNextClick);

// this is the GO/RESET button.
function onGoResetClick(){
  alert("GoReset button clicked");
}

const lowerButton = document.getElementById('goReturnButton');
lowerButton.addEventListener('click', onGoResetClick);