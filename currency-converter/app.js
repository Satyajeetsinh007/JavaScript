const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdowns=document.querySelectorAll(".dropdown select")

const button=document.querySelector(".btn")

const toCurr=document.querySelector(".to select")

const fromCurr=document.querySelector(".from select")

const msg=document.querySelector(".msg")

let amount=document.querySelector("form input")



for(let select of dropdowns){
    for (code in countryList){
        let newOption=document.createElement("option")
        newOption.innerText=code
        newOption.value=code
        
        if(select.name=="from" && code=='USD'){
            newOption.selected="selected"
        }
        if(select.name=="To" && code=='INR'){
            newOption.selected="selected"
        }
    select.append(newOption)
}
    
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)

    })
}
const updateFlag=(element)=>{
    // console.log(element)
    let currCode=element.value
    let countryCode=countryList[currCode]
    // console.log(currCode,countryCode)
    let newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`
    let img=element.parentElement.querySelector("img")
    img.src=newSrc

    }
button.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amtVal=amount.value;
     // note .value propery always changes when user types but if U do amount.getAttribute("value") it will still show 100
    if(amtVal===""||amtVal<1){
        amtVal=1
        amount.value="1"
    }
    getExchangeRate(amtVal);
    // msg.innerText=`${evt.}`
})



async function getExchangeRate(amtVal) {
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  const response = await fetch(URL);
  
  const data = await response.json();
  let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

  let finalAmt=rate*amtVal;
  msg.innerText=`${amtVal} ${dropdowns[0].value}=${finalAmt} ${dropdowns[1].value}`

}


