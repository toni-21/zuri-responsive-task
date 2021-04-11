const toogleButton = document.getElementsByClassName('toogle-button')[0]
const navBarLink = document.getElementsByClassName('nav-links')[0]

toogleButton.addEventListener('click', () => {
    navBarLink.classList.toggle('active')
})