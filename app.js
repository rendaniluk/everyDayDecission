//the Dom
var initialDeposit = document.querySelector('.P');
var annualInterest = document.querySelector('.r');
var numberOfyears = document.querySelector('.t');
var interestTimes = document.querySelector('.n');
var calculate = document.querySelector('.btn');
var outPut = document.querySelector('.outPut')
  //future value of an investment
var myCalculator = function() {
  var initialDepositValue = initialDeposit.value;
  var annualInterestValue = (annualInterest.value) / 100;
  var numberOfyearsValue = numberOfyears.value;
  var interestTimesValue = interestTimes.value;
  if ((initialDepositValue && annualInterestValue && numberOfyearsValue &&
      interestTimesValue) == 0) {
    var msg = "Add Values to the text box",
      msgColor = msg.fontcolor("red");

    outPut.innerHTML = msgColor;
  } else {
    A = initialDepositValue * Math.pow(1 + (annualInterestValue /
      interestTimesValue), (numberOfyearsValue * interestTimesValue));
    outPut.innerHTML = accounting.formatMoney(A, "R", 2,
      " ", ".");
  }
  initialDeposit.value = '';
  annualInterest.value = '';
  numberOfyears.value = '';
  interestTimes.value = '';
};
calculate.addEventListener('click', myCalculator);
