var randomWord;

var winCount = 0;

var main = function (input) {
  var myOutputValue;

  var remainingWins = 2 - winCount;

  myOutputValue =
    "You guessed incorrectly! You need " +
    remainingWins +
    " correct guesses to win";

  var randomNumber = function () {
    var randomDecimal = Math.random() * 3;
    var randomInt = Math.floor(randomDecimal);
    var randomNo = randomInt + 1;
    return randomNo;
  };

  randomNo = randomNumber();

  if (randomNo == 1) randomWord = "banana";
  if (randomNo == 2) randomWord = "chisel";
  if (randomNo == 3) randomWord = "faucet";
  console.log(randomWord);
  console.log(input);

  if (input == randomWord) {
    winCount = winCount + 1;
    remainingWins = 2 - winCount;
    myOutputValue =
      "You guessed correctly! You need " +
      remainingWins +
      " correct guesses to win";
    return myOutputValue;
  }

  if (remainingWins == 0) {
    myOutputValue = "You win!";
    return myOutputValue;
  }
  return myOutputValue;
};
