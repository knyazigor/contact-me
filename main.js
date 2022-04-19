const goButton = document.querySelector('.go')
const field = document.querySelector('.field')

goButton.addEventListener('click', () => {
    const value = field.value
    const matches = value.matchAll(/\d*/gm)
    let number = ''
    for (let match of matches) {
        if (match[0]) number += match[0]
        console.log(match)
    }
    
    if (number) window.open(`https://wa.me/${number[0] == '8' ? '7' + number.slice(1) : number}`)
})