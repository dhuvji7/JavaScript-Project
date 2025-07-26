function playBat() {
  let computerChoice;
  let randomNo = Math.random() * 3;
  if(randomNo > 0 && randomNo <= 1){
    computerChoice = 'Bat';
  }
  else if(randomNo > 1 && randomNo < 2){
    computerChoice = 'Ball'; 
  }
  else{
    computerChoice = 'Stump';
  }

  let resultMessage;
  if(computerChoice === 'Ball'){
    resultMessage = 'User Won';
  }
  else if(computerChoice === 'Bat'){
    resultMessage = `It's a tie`;
  }
  else if(computerChoice === 'Stump'){
    resultMessage = 'Computer has won';
  }

  alert(`You have chosen Bat.
Computer choice is ${computerChoice}. 
So, ${resultMessage}.`);
}

function playBall() {
  let computerChoice;
  let randomNo = Math.random() * 3;
  if(randomNo > 0 && randomNo <= 1){
    computerChoice = 'Bat';
  }
  else if(randomNo > 1 && randomNo < 2){
    computerChoice = 'Ball'; 
  }
  else{
    computerChoice = 'Stump';
  }

  let resultMessage;
  if(computerChoice === 'Ball'){
    resultMessage = `It's a tie`;
  }
  else if(computerChoice === 'Bat'){
    resultMessage = `Computer has won`;
  }
  else if(computerChoice === 'Stump'){
    resultMessage = 'User Won.';
  }

  alert(`You have chosen Ball.
Computer choice is ${computerChoice}. 
So, ${resultMessage}.`);
}

function playStump() {
  let computerChoice;
  let randomNo = Math.random() * 3;
  if(randomNo > 0 && randomNo <= 1){
    computerChoice = 'Bat';
  }
  else if(randomNo > 1 && randomNo < 2){
    computerChoice = 'Ball'; 
  }
  else{
    computerChoice = 'Stump';
  }

  let resultMessage;
  if(computerChoice === 'Ball'){
    resultMessage = `Computer has won`;
  }
  else if(computerChoice === 'Bat'){
    resultMessage = 'User Won.';
  }
  else if(computerChoice === 'Stump'){
    resultMessage = `It's a tie`;
  }

alert(`You have chosen Stump.
Computer choice is ${computerChoice}. 
So, ${resultMessage}.`);
}