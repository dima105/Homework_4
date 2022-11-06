let userScore = 0;
let computerScore = 0;
const count = 3;

let userAnswer = '';
let computerAnswer = '';

let confirmToPlay = true;
const arrayOfAnswers = ['rock', 'scissors', 'paper'];

while( confirmToPlay === true ){
  userScore = 0;
  computerScore = 0;
  let userName = prompt("Please, enter your name : ");

  if( userName === null || userName === '' ){
    userName = 'User';
  }

  while( userScore < count && computerScore < count ){
    userAnswer = prompt("Rock, Scissors, Paper...Please make your move : ");
  
    if( userAnswer === null ){
      alert("You aborted this game. To start new game just refresh the page.");
    }
  
    userAnswer = userAnswer.toLowerCase();
  
    if( arrayOfAnswers.includes(userAnswer) === true ){
      const randomIndex = Math.round(Math.random() * (arrayOfAnswers.length - 1));
      computerAnswer = arrayOfAnswers[randomIndex];
    
      alert("Computer move is : " + computerAnswer);
    
      if(( computerAnswer === 'rock' && userAnswer === 'scissors' ) || ( computerAnswer === 'scissors' && userAnswer === 'paper' ) || ( computerAnswer === 'paper' && userAnswer === 'rock' )){
        computerScore += 1;
        alert( "Computer won this round. Current count is " + userName + " " + userScore + " : Computer " + computerScore  );
      }else if( computerAnswer === userAnswer ){
      }else{
        userScore += 1;  
        alert( userName + " won this round. Current count is " + userName + " " + userScore + " : Computer " + computerScore );
      } 
    } 
  }
  
  if( computerScore > userScore ){
    alert( "Sorry. Computer won this game. Count -  You " + userName + " " + userScore + " : Computer " + computerScore  );
  }else{
    alert( "Congratulations. You won this game. Count -  You " + userName + " " + userScore + " : Computer " + computerScore  );
  }
  
  confirmToPlay = confirm("Do you want to start new game?")
}

