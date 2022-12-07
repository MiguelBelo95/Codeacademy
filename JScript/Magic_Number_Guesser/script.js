let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  //Generate secret target Number
  let secretNum = Math.floor(Math.random() * 9);
  return secretNum;
};

console.log(generateTarget());

const compareGuesses = (humanNum, computerNum, secretNum) => {
  let humanGuess = Math.abs(secretNum - humanNum);
  let computerGuess = Math.abs(secretNum - computerNum);
  if (humanGuess > computerGuess) {
    //Computer wins
    return false;
  } else if (humanGuess <= computerGuess) {
    //Human wins
    return true;
  }
};

console.log(compareGuesses(3, 8, 5));

function updateScore(winner) {
  switch (winner) {
    case "human":
      humanScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};