let container = document.querySelector('.cont')

function loadImages(images = 10) {
    let i = 0
    while (i < images) {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            const img = document.createElement('img')
            img.src = data.message
            container.appendChild(img)
        })
        i++
    }
}

loadImages()

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= container.scrollHeight) {
        loadImages()
    }
})