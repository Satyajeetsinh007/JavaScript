const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json"

const dropdowns=document.querySelectorAll(".dropdown select")



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
    let currCode=element.value
    let countryCode=countryList[currCode]
    console.log(currCode,countryCode)
    let newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`
    let img=element.parentElement.querySelector("img")
    img.src=newSrc

    }