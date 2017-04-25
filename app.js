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
  var annualInterestValue = (annualInterest.value)/100;
  var numberOfyearsValue = numberOfyears.value;
  var interestTimesValue = interestTimes.value;
  A = initialDepositValue * Math.pow(1 + (annualInterestValue/interestTimesValue), (numberOfyearsValue*interestTimesValue));
  outPut.innerHTML = accounting.formatMoney(A,"R", 2, " ", ".");
};
calculate.addEventListener('click', myCalculator);
