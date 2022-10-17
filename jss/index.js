const menu = document.querySelector('.menu')
const favorite = document.querySelector('.favorite')
const person = document.querySelector('.person')
const moreoptions = document.querySelector('.moreoptions')
const closemenu = document.querySelector('.closemenu')
const main = document.querySelector('main')


menu.addEventListener('click', () => {

    if(moreoptions.style.visibility == 'hidden'){
        moreoptions.style.visibility = 'visible'
        moreoptions.style.transform = 'translate(0px, 0px)'
        moreoptions.style.opacity = '1'
        moreoptions.style.transition = 'all .4s'
        main.style.transform = 'translate(-20px, 75px)'
        main.style.transition = 'all .5s'
    }
    else {
        moreoptions.style.visibility = 'hidden'
        moreoptions.style.transform = 'translate(-300px, 0px)'
        moreoptions.style.opacity = '0'
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

favorite.addEventListener('click', () => {
    console.log('clicou')
})

person.addEventListener('click', () => {

    console.log('clicou');
})