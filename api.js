const URL="https://dogapi.dog/api/v2/breeds";
const descPara=document.querySelector("#Description")
const button=document.querySelector("#Btn")


getBreeds=async()=>{
    console.log("Getting data.....")
    let response=await fetch(URL)
    console.log("Hi")
    console.log(response)
    let response2=await response.json()
    console.log("Hi2")
    console.log(response2.data[0].attributes.description)
    descPara.innerText=response2.data[0].attributes.description
}
button.addEventListener("click",getBreeds)