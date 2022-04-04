const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Invalid input');
    }
  }
  
  const getComputerChoice = () => {
    choices = ['rock', 'paper', 'scissors']
    random = Math.floor(Math.random() * 3)
    return choices[random];
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!"
    } else if (userChoice === 'rock') {
         if (computerChoice === 'paper') {
          return 'Computer won!'
        } else {
          return 'You have won!'
        }
    } else if (userChoice === 'paper') {
         if (computerChoice === 'scissors') {
          return 'Computer won!'
        } else {
          return 'You have won!'
        } 
    } else if (userChoice === 'scissors') {
         if (computerChoice === 'rock') {
          return 'Computer won!'
        } else {
          return 'You have won!'
        }
    }
      else if (userChoice === 'bomb') {
          return 'You have won!'
        }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}`)
    console.log(`Computer: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame();