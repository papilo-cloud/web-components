function update(e) {
    let x = e.clientX
    let y = e.clientY

    document.documentElement.style.setProperty('--cursorX', x+'px')
    document.documentElement.style.setProperty('--cursorY', y+'px')
}

document.addEventListener('mousemove', update)
