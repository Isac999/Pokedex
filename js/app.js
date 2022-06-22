const link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const extension = ".png"

for (let i = 1; i <= 100; i++) {
    const img = document.createElement('img')
    const full_url = link + i + extension
    img.setAttribute('src', full_url)

    const span = document.createElement('span')

    const div = document.querySelector('#container')    
    div.appendChild(span)
    span.appendChild(img)
}

const event_target = document.querySelectorAll('img')

for (let n = 0; n < event_target.length; n++) {
    event_target[n].addEventListener('mouseenter', function() {
        this.parentElement.setAttribute('class', 'render')
        generateInfo(this)
    })
}

for (let n = 0; n < event_target.length; n++) {
    event_target[n].addEventListener('mouseout', function() {
        removeInfo(this)
    })
}

function generateInfo(element) {
    const p = document.createElement('p')
    p.innerText = 'Nome: Pikachu\nTipo: Elétrico\nNível: Normal'
    const top = element.parentElement
    top.appendChild(p)
}

function removeInfo(element) {
    const span = element.parentElement
    const p = span.querySelector('p')
    span.removeChild(p)
}