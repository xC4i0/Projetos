/*
    en-US -> USD -> Dolar

    de-DE -> EUR -> Euro

    en-GB -> GBP -> Libra

    pt-BR -> BRL -> Real
*/


const currencyValue = document.getElementById("currency-value")
const currencyResultValue = document.getElementById("currency-result-value")
const currencyText = document.getElementById("currency-text")
const imgValue = document.getElementById("flag")
const imgResult = document.getElementById("flag-result")

function result() {
    const currencyConvert = document.getElementById("select1").value
    const currencyFor = document.getElementById("select2").value
    const currencyInput = document.getElementById("result").value
    const currencyDolar = 5
    const currencyLibra = 6.12
    const currencyEuro = 5.34

   
    if(currencyConvert == "real" && currencyFor == "dolar") {
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat (USADO PARA FORMATAR AS MOEDAS)
        currencyResultValue.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(currencyInput / currencyDolar) 
        imgResult.src = "./assets/img/Paises/eua.png"
        currencyText.innerHTML = "Dólar Americano"
    } 

    if(currencyConvert == "real" && currencyFor == "libra") {
        currencyResultValue.innerHTML = new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(currencyInput / currencyLibra)
        imgResult.src = "./assets/img/Paises/libra 1.png"
        currencyText.innerHTML = "Libra"
    }

    if(currencyConvert == "real" && currencyFor == "euro") {
        currencyResultValue.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(currencyInput / currencyEuro)
        imgResult.src = "./assets/img/Paises/euro.png"
        currencyText.innerHTML = "Euro"
    }

    currencyValue.innerHTML  = new Intl.NumberFormat ('pt-BR', {style: 'currency', currency: 'BRL'}).format(currencyInput)
}  