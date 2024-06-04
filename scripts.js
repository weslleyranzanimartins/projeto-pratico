const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function covertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.7
    const bitcoinToday = 300000/1

    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
         // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-BT", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    console.log("trocou de moeda")
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assests/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assests/Euro.png"
    }
    

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "£ libra"
        currencyImage.src = "./assests/libra.png"
    }

    
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "₿ bitcoin"
        currencyImage.src = "./assests/bitcoin.png"
    }





    covertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", covertValues)