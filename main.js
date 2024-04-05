// main.js

function init(){
    console.log("hello world!");
  }
  
  init()
  


let currentState = 0
drawScreen()
// if (currentState == 0){
// document.getElementById('nextButton').style.visibility="hidden";
// }




function drawScreen(){
  if (currentState === 0){
    document.getElementById('topTextBox').textContent="I can read your mind...";
    document.getElementById('nextButton').style.visibility="hidden";
    document.getElementById('bottomTextBox').textContent="";
    document.getElementById('goButton').textContent="go";
    
  }
  else if (currentState === 1){
    document.getElementById('topTextBox').textContent="Pick a number from 01 - 99";
    document.getElementById('nextButton').style.visibility="visible";
    document.getElementById('bottomTextBox').textContent="when you have your number click next";
    document.getElementById('goButton').textContent="return";
    
    
  }
  else if(currentState === 2){
    document.getElementById('topTextBox').textContent="Add both digits together to get a new number";
    document.getElementById('nextButton').style.visibility="visible";
    document.getElementById('bottomTextBox').textContent="Ex: 13 is 1 + 4 = 5, click next to proceed";
    document.getElementById('goButton').textContent="return";
    
  }
  else if(currentState === 3){
    document.getElementById('topTextBox').textContent="Subtract your new number from the original number";
    document.getElementById('nextButton').style.visibility="visible";
    document.getElementById('bottomTextBox').textContent="Ex: 14 - 5 = 9, click next to proceed";
    document.getElementById('goButton').textContent="return";
    
  }
  else if(currentState === 4){
    document.getElementById('topTextBox').textContent="";
    document.getElementById('nextButton').style.visibility="visible";
    document.getElementById('bottomTextBox').textContent="find your new number. Note the symbol beside the number";
    document.getElementById('goButton').textContent="return";

    
    let list = document.createElement("ul");
    list.classList.add("listFunc");
    list.id="symbolsList"
    

    let ttb = document.getElementById('appBody');
    
    function addItems(character, parent){
      let li = document.createElement("li")
      li.textContent = character;
      parent.appendChild(li);
    }


    for (i = 0; i < 11; i++){
      addItems("!", list)
      addItems("@", list)
      addItems("#", list)
      addItems("$", list)
      addItems("%", list)
      addItems("^", list)
      addItems("&", list)
      addItems("*", list)
      addItems("?", list)
    }
    console.log(list)
    ttb.appendChild(list)
  }

  else if(currentState === 5){
    document.getElementById('topTextBox').textContent="Your symbol is... \"?\" ";
    document.getElementById('nextButton').style.visibility="hidden";
    document.getElementById('bottomTextBox').textContent="Your symbol is: ";
    document.getElementById('goButton').textContent="return";
    let ttb = document.getElementById('symbolsList');
    ttb.remove();
    console.log(ttb);

  }

}



// BUTTONS:
// this is the NEXT button.
function onNextClick(){
    currentState++;
    drawScreen();
    // debugger;
  // }
} 
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', onNextClick);

// this is the GO/.
function onGoClick(){   
  // alert("GoReset button clicked");
  if (currentState == 0){
  currentState++;
  
  drawScreen();
}
  else {
    currentState = 0;
    drawScreen()
  }
}

const lowerButton = document.getElementById('goButton');
lowerButton.addEventListener('click', onGoClick);

// this is the reset button.

