const slct = (element) => document.querySelector(element)
const slctA = (elements) => document.querySelectorAll(elements)


const html = slct('html')
const config = slct('#config')
const navbar = slct('#navbar')
const check = slct('#darkmode')
const close = slct('#close')



const fillProjInfos = (projItem, item, index) => {
    projItem.setAttribute('data-key', index)
    projItem.querySelector('.project-item--title').innerHTML = item.name
}






projJSON.map((item,index) => {
    //console.log(item,index);
    let projItem = document.querySelector('.model .project-item').cloneNode(true)
    

    slct('.project-area').append(projItem)

    fillProjInfos(projItem,item,index)
    
})