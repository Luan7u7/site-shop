const menu = document.querySelector('.menu')
const favorite = document.querySelector('.favorite')
const person = document.querySelector('.person')
const moreoptions = document.querySelector('.moreoptions')
const closemenu = document.querySelector('.closemenu')
const main = document.querySelector('main')
const search = document.querySelector('.search')
const buy = document.querySelector('.buy')

menu.addEventListener('click', () => {

    if(moreoptions.style.visibility == 'hidden'){
        moreoptions.style.transform = 'translate(0px, 0px)'
        moreoptions.style.transition = 'all .4s'
        moreoptions.style.visibility = 'visible'
        main.style.transform = 'translate(0px, 85px)'
        main.style.transition = 'all .5s'
    }
    else {
        moreoptions.style.transform = 'translate(-340px, 0px)'
        moreoptions.style.visibility = 'hidden'
    }
})

closemenu.addEventListener('click', () => {
    if(moreoptions.style.visibility == 'visible'){
        moreoptions.style.visibility = 'hidden'
        moreoptions.style.transform = 'translate(-300px, 0px)'
        main.style.transform = 'translate(0px, 0px)'
    }
    else {
        telamenu.style.visibility = 'hidden'
    }
})
