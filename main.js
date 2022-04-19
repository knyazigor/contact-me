const goButton = document.querySelector('.go')
const field = document.querySelector('.field')
const link = document.querySelector('.link')
let number = ''

let qrcode = new QRCode(document.querySelector('.qrcode'), {
	width : 200,
	height : 200
});

goButton.addEventListener('click', () => {
    if (number) window.open(getLink())    
})

field.addEventListener('input', () => {
    getNumber();
    link.textContent = getLink();
    link.href = getLink();
    makeCode();
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

function makeCode () {
	qrcode.makeCode(getLink());
}

function getLink() {
    return `https://api.whatsapp.com/send/?phone=${number[0] == '8' ? '7' + number.slice(1) : number}`
}