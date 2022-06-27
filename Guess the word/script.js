const input = document.querySelector('.inputs')
resetBtn = document.querySelector('.reset-btn')
hintBtn = document.querySelector('.hint span')
guessLeft = document.querySelector('.guess-left span')
typingInput = document.querySelector('.typing-input')
wrongLetter = document.querySelector('.wrong-letter span')

let word, incorrects = [],corrects = []

function randomWord(){
    let ranObj = wordList[Math.floor(Math.random()*wordList.length)]
    incorrects = [],corrects = []
    word = ranObj.word

    input.innerHTML = ""
    let html = ""
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" name="" disabled>`
    }
    hintBtn.innerHTML = ranObj.hint
    input.innerHTML += html
}
randomWord()

function initGame(e){
    let key = e.target.value
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(` ${key}`)){
        if(word.includes(key)){
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key){
                    corrects.push(key)
                    document.querySelectorAll('.inputs input')[i].value = key
                }
            }
        }else{
            incorrects.push(` ${key}`)
        }
    }
    setInterval(() => {
        if(corrects.length == word.length){
            alert(`You Find the word ${word.toUpperCase()}, won!!`)
            randomWord()
        }else if(guessLeft.innerHTML < 1){
            guessLeft.innerHTML = 10 - incorrects.length - corrects.length
        }   
    });
    wrongLetter.innerHTML = incorrects
    typingInput.value = ""
}

resetBtn.addEventListener('click', randomWord)
typingInput.addEventListener('input',initGame)
input.addEventListener('click', typingInput.focus())
document.addEventListener('keydown',()=> typingInput.focus())
