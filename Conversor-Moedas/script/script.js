




function result() {
    const currencyConvert = document.getElementById("select1").value
    const currencyFor = document.getElementById("select2").value
    const currencyInput = document.getElementById("result").value
    const currencyValue = document.getElementById("currency-value")
    let currencyDolar = 5
   
    if(currencyConvert == "real" && currencyFor == "dolar") {
        let currencyResult = currencyInput / currencyDolar
        console.log(currencyResult)
    }

    currencyValue.innerHTML  = currencyInput

}   
4