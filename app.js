const amount = document.querySelector("#amount");
const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const result = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amount.addEventListener("input", exchange);
}

function exchange() {
  const amountValue = Number(amount.value.trim());
  const firstCurrencyOptionValue =
    firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;
  const secondCurrencyOptionValue =
    secondCurrencyOption.options[secondCurrencyOption.selectedIndex]
      .textContent;
  currency
    .exchange(amountValue, firstCurrencyOptionValue, secondCurrencyOptionValue)
    .then((finalResult) => (result.value = finalResult.toFixed(2)))
    .catch((error) => console.log(error));
}
