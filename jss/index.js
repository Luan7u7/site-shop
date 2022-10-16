const menu = document.querySelector('.menu')
const favorite = document.querySelector('.favorite')
const person = document.querySelector('.person')


menu.addEventListener('click', () => {

    console.log('clicou');
})

favorite.addEventListener('click', () => {
    console.log('clicou')
    window.location = './login.html'
})

person.addEventListener('click', () => {

    console.log('clicou');
})