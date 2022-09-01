const buttonHoverEvent = () => {
    const btn = document.querySelectorAll('button')

    btn.forEach(element => element.addEventListener('mouseover', (e) => 
    e.target.style.background = 'gray'
    ))

    btn.forEach(element => element.addEventListener('mouseover', (e) => 
    e.target.style.color = 'white'
    ))

    btn.forEach(element => element.addEventListener('mouseout', (e) => 
    e.target.style.background = 'white'
    ))

    btn.forEach(element => element.addEventListener('mouseout', (e) => 
    e.target.style.color = 'black'
    ))
}
buttonHoverEvent()


