let dropDownTo=document.querySelector("#to");
let dropDownFrom=document.querySelector("#from");
let img = document.querySelector(".countryFlagTo");
let img2 = document.querySelector(".countryFlagFrom");
let amount=document.querySelector("#input")
let button=document.querySelector(".button");
let theFinalValue;
let finalPara=document.querySelector(`.para`);

async function getData(){

    let getToValue=dropDownTo.value.toLowerCase()
    console.log(getToValue);
    let getToFlag=getToValue[0]+getToValue[1];
    getToFlag=getToFlag.toUpperCase();
    let imgTo=`https://flagsapi.com/${getToFlag}/flat/64.png`;
    img.src=imgTo;
    
    let getFromValue = dropDownFrom.value.toLowerCase();
    console.log(getFromValue);
    let getFromFlag=getFromValue[0]+getFromValue[1];
    getFromFlag=getFromFlag.toUpperCase();
    let imgFrom=`https://flagsapi.com/${getFromFlag}/flat/64.png`;
    img2.src=imgFrom;


    let url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${getToValue}/${getFromValue}.json`
    
    let getData2= await fetch(url);
    let getData3=await getData2.json();
    theFinalValue=parseFloat(getData3[getFromValue]);
    console.log(theFinalValue);

}
dropDownTo.addEventListener('change', getData);
dropDownFrom.addEventListener('change', getData);


async function fetching() {
    let url2 = `https://api.frankfurter.app/latest`;
    let url3 = await fetch(url2);
    let url4 = await url3.json();
    let url5 = Object.keys(url4.rates);
    
    url5.forEach(currency=>{
        let optionFrom = document.createElement("option");
        optionFrom.value=currency;
        optionFrom.text=currency;
        dropDownFrom.add(optionFrom);

        let optionTo=document.createElement("option");
        optionTo.value=currency;
        optionTo.text=currency;
        dropDownTo.add(optionTo);

    })
    
}
fetching();

let getAmount=document.querySelector("#getAmount");
getAmount.addEventListener(`submit`,function (event){
    event.preventDefault();
})

button.addEventListener(`click`,()=>{
    let amount2=parseFloat(amount.value);
    convertedValue=amount2*theFinalValue;
    console.log(convertedValue);
    if(convertedValue/1===convertedValue){
        finalPara.innerText=`Converted Value = ${convertedValue} `;
    }else{
        finalPara.innerText="You havent choosed a country or valid amount."
    }
    
})
