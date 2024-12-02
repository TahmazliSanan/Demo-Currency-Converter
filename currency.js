class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_c0GWQrRJlQiOWjuqieRZToarUtUb1NgbURIHZpUh&base_currency=";
  }

  async exchange(amount, firstCurrencyOption, secondCurrencyOption) {
    const response = await fetch(`${this.url}${firstCurrencyOption}`);
    const result = await response.json();
    const finalResult = amount * result.data[secondCurrencyOption];
    return finalResult;
  }
}
