const checkDarkMode = document.querySelector('#checkbox')
const html = document.querySelector('html')
html.classList.toggle('light-mode')

checkDarkMode.addEventListener('change', function() {
    html.classList.toggle('dark-mode')
})