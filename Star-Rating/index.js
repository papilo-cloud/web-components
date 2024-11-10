let card = document.getElementById('card')
let stars = card.getElementsByTagName('span')
let rating = document.getElementById('rate-count')

const CLASSNAME = {
    0: 'one',
    1: 'two',
    2: 'three',
    3: 'four',
    4: 'five',
    5: 'six',
    6: 'seven',
}
for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', () => {
        remove()
        let j = 0
        while (j <= i) {
            let clsx = CLASSNAME[i]
            stars[j].className += ' '+ clsx
            j++
        }
        rating.textContent = i+1
    }
)
}

function remove() {
    let i = 0
    while (i < stars.length) {
        stars[i].className = 'star'
        i++
    }
}
