const html = document.querySelector('html')
const config = document.querySelector('#config')
const navbar = document.querySelector('#navbar')
const check = document.querySelector('#darkmode')
const close = document.querySelector('#close')

config.addEventListener('click', function() {
    navbar.classList.remove('slideOut')
    navbar.classList.add('slideIn')
    console.log('click');
})
close.addEventListener('click', function() {
    navbar.classList.remove('slideIn')
    navbar.classList.add('slideOut')
})

check.addEventListener('click', function() {
    html.classList.toggle('dark-mode')
})
