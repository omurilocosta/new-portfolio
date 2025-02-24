// Variaveis para encurtar códigos.
const slct = (element) => document.querySelector(element)
const slctA = (elements) => document.querySelectorAll(elements)

// Variavel para elemento do doc.
const html = slct('html')
const dark = slct('#darkmode')

let names = slctA('.logo')
for (i=0;i<(names.length);i++){
    names[i].innerText = '<MC>'
}

dark.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
})


// ! THIS IS THE PROJECT AREA SCRIPT

const iconTechs = {
    html: "<div class='techs'><i class='bx bxl-html5'></i><p>HTML</p></div>",
    css: "<div class='techs'><i class='bx bxl-css3'></i><p>CSS</p></div>",
    js: "<div class='techs'><i class='bx bxl-javascript'></i><p>JS</p></div>",
    php: "<div class='techs'><i class='bx bxl-php'></i><p>PHP</p></div>",
    bd: "<div class='techs'><i class='bx bxs-data'></i><p>DATABASE</p></div>"
}

// FUNCTION TO CONVERT WORD TO ICON
const convert_to_icon = (icon) => {return iconTechs[icon]}

// FUNCTION TO FILL INFO PROJECT
const fill_info_project = (projItem, item, index) => {
    projItem.querySelector('.project-item--img a').href = item.linkDep
    projItem.querySelector('.project-item--img a img').src = item.img
    projItem.querySelector('.project-item--info .project-item--title').innerText = item.name
    projItem.querySelector('.project-item--info .project-item--links #git').href = item.linkGit
    projItem.querySelector('.project-item--info .project-item--links #dep').href = item.linkDep
    projItem.querySelector('.project-item--info .project-item--desc').innerText = item.desc
    for( i = 0; i < (item.techs.length); i++){
        projItem.querySelector('.project-item--info .project-item--techs').innerHTML += convert_to_icon(item.techs[i])
    }
}

projJSON.map((item,index) => {
    let projItem = slct('.model .project-item').cloneNode(true)
    
    slct('.project-area').append(projItem)

    fill_info_project(projItem, item, index)

})
// ! END PROJECT AREA SCRIPT
