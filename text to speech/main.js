const textarea = document.querySelector(".row textarea")
voiceList = document.querySelector("select")
let speechBtn = document.querySelector("form button")

let synth = speechSynthesis
let isSpeaking = true

function voices(){
    for (let voice of synth.getVoices()) {
        let selected = voice.name == "Google US English" ? "selected" : ""
        let option = `<option value="${voice.lang}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML("beforeend",option)
    }
}

synth.addEventListener("voiceschanged",voices)

textarea.addEventListener("keyup",(e)=>{
    textarea.style.height = `0px`
    let height = e.target.scrollHeight
    textarea.style.height = `${height}px`
})

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = voiceList.value
    synth.speak(utterance)
}

speechBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!textarea.value) return
    if(!synth.speaking){
        textToSpeech(textarea.value)
    }
    if(textarea.value.length > 2000){
        if(isSpeaking){
            synth.resume()
            isSpeaking = false
            speechBtn.innerText = "Pause Speech"
        }else{
            synth.pause()
            isSpeaking = true
            speechBtn.innerText = "Resume Speech"
        }

        setInterval(() => {
            if(!synth.speaking && !isSpeaking){
                isSpeaking = true
                speechBtn.innerText = "Convert to Speech"
            }
        });
    }else{
        speechBtn.innerText = "Convert to Speech"
    }
}) 