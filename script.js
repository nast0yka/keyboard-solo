const arrWords = ['peach', 'nike', 'enouth', 'dog', 'cat', 'friend', 'reservation', 'accepted', 'engaged', 'relationship', 'divorsed', 'love', 'take', 'push', 'coffee'];
const changeArr = [...arrWords]
let changeArrLength = changeArr.length;

function giveIndex(min = 0, max) {
    let a = Math.random() * (max - min) + min;
    let result = +(a.toFixed(0));
    return result;
}
const conteinerWord = document.querySelector('.word');

function leadRandomWord() {
    let word = changeArr[giveIndex(0, changeArrLength)].split("");
    conteinerWord.innerHTML = word.map((it) => `<span>${it}</span>`).join("")
}
leadRandomWord();

let i = 0;

document.addEventListener('keydown', function(event) {
    const elementsWord = conteinerWord.querySelectorAll('span');
    if (event.key === elementsWord[i].textContent) {
        elementsWord[i].className = "c";
        i++;
    } else {
        elementsWord[i].className = "w";
    }

    if (i === elementsWord.length) {
        leadRandomWord();
        i = 0;
    }
})