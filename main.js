const goButton = document.querySelector('.go')
const field = document.querySelector('.field')
const link = document.querySelector('.link')
let number = ''

goButton.addEventListener('click', () => {
    if (number) window.open(`https://api.whatsapp.com/send/?phone=${number[0] == '8' ? '7' + number.slice(1) : number}`)    
})

field.addEventListener('input', () => {
    getNumber()
    link.textContent = `https://api.whatsapp.com/send/?phone=${number[0] == '8' ? '7' + number.slice(1) : number}`
    link.href = `https://api.whatsapp.com/send/?phone=${number[0] == '8' ? '7' + number.slice(1) : number}`
})

function getNumber() {
    number = ''
    const value = field.value;
    const matches = value.matchAll(/\d*/gm);
    for (let match of matches) {
        if (match[0]) number += match[0]
    }
    return number[0] == '8' ? '7' + number.slice(1) : number    
}