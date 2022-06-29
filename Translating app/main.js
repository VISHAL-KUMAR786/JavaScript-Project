const selectTag = document.querySelectorAll("select")   
let translateBtn = document.querySelector(".container button")
let formText = document.querySelector(".form-text")
let toText = document.querySelector(".form-to")
let exchange = document.querySelector(".exchange")
let icons = document.querySelectorAll(".icons ion-icon")
// my memory api

selectTag.forEach((tag,id) => {
    // what is the mean of id but it denotes the id as i
    for (const country_code in countries) {
        let selected
        if(id == 0 && country_code == "en-GB"){
            selected = "selected"
        }else if(id == 1 && country_code == "hi-IN"){
            selected = "selected"
        }
        let text = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend",text)
    }  
})

formText.addEventListener("keyup",(e)=>{
    if(e.target.value == ""){
        toText.value = ""
    }
})

translateBtn.addEventListener("click",()=>{
    let text = formText.value
    translateFrom = selectTag[0].value
    translateTo = selectTag[1].value
    if(!text) return alert("please enter value")
    toText.setAttribute("placeholder","Translatting...")
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl).then(res => res.json())
    .then(result =>{
        result = result.responseData.translatedText
        toText.value = result
        toText.setAttribute("placeholder","Translation")
    }).catch(err => { alert(`${err}`) })
})

exchange.addEventListener("click",()=>{
    [formText.value,toText.value] = [toText.value,formText.value]
    let tempLang = selectTag[0].value   
    selectTag[0].value = selectTag[1].value
    selectTag[1].value = tempLang
})

icons.forEach( (target)=> {
    target.addEventListener("click",(e)=>{
        if(target.classList.contains("copy12")){
            if(target.id == "form-c"){
                navigator.clipboard.writeText(formText.value)
            }else{
                navigator.clipboard.writeText(toText.value)
            }
        }else{
            let utterance
            if(target.id == "form-v"){
                utterance = new SpeechSynthesisUtterance(formText.value)
                utterance.lang = selectTag[0].value  
            }else{
                utterance = new SpeechSynthesisUtterance(toText.value)
                utterance.lang = selectTag[1].value  
            }
            speechSynthesis.speak(utterance)
        }
    })
});