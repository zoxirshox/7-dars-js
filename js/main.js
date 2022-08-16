var elForm = document.querySelector("[data-money-form]")
var elMoney = document.querySelector("[data-input-amount]")
var elCurrency = document.querySelector("[data-select-currency]")
var elcalculatedMoney = document.querySelector("[data-text-count-the-money]")

var ONE_USD = 10910.53;
var ONE_RUBL = 176.97;
var ONE_EURO = 11121.76;


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault()

  var moneyAmount = +elMoney.value;
  var currency = elCurrency.value;
  var calculatedMoney;

  if (currency === "USD") {
    calculatedMoney = moneyAmount / ONE_USD;
  } 
  if(currency === "RUBL") {
    calculatedMoney = moneyAmount / ONE_RUBL;
  }
  if(currency === "EURO") {
      calculatedMoney = moneyAmount / ONE_EURO
  }

  console.log(calculatedMoney)
  calculatedMoney.textContent = `${calculatedMoney} ${currency}`
  //console.log(moneyAmount, currency)
}
)
