const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const convertedAmount = document.getElementById('convertedAmount');

// Fetch available currencies from the API
fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.rates);

        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.innerText = currency;
            option1.value = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.innerText = currency;
            option2.value = currency;
            toCurrency.appendChild(option2);
        });
    });

// Function to convert currency
function convert() {
    const from = fromCurrency.value;
    const to = toCurrency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[to];
            const result = amount.value * rate;
            convertedAmount.value = result.toFixed(2); // Display result with 2 decimal places
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
