/*
    en-US -> USD -> Dolar

    de-DE -> EUR -> Euro

    en-GB -> GBP -> Libra

    pt-BR -> BRL -> Real
*/


const currencyValue = document.getElementById("currency-value")
const currencyResultValue = document.getElementById("currency-result-value")

function result() {
    const currencyConvert = document.getElementById("select1").value
    const currencyFor = document.getElementById("select2").value
    const currencyInput = document.getElementById("result").value
    let currencyDolar = 5
   
    if(currencyConvert == "real" && currencyFor == "dolar") {
        let currencyResult = currencyInput / currencyDolar
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat (USADO PARA FORMATAR AS MOEDAS)
        currencyResultValue.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(currencyResult)
    }
    currencyValue.innerHTML  = new Intl.NumberFormat ('pt-BR', {style: 'currency', currency: 'BRL'}).format(currencyInput)
}   

function result() {
    
}