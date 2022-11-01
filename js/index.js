const menu = document.querySelector('.menu')
const favorite = document.querySelector('.favorite')
const person = document.querySelector('.person')
const moreoptions = document.querySelector('.moreoptions')
const closemenu = document.querySelector('.closemenu')
const main = document.querySelector('main')
const search = document.querySelector('.search')
// const pics = [  
//     '1-1',
//     '1-2',
//     '1-3',
//     '1-4',
//     '1-5',
//     '1-6',
//     '1-7',
//     '2-1',
//     '2-2',
//     '2-3',
//     '2-4',
//     '2-5',
//     '2-6',
//     '2-7',
//     '3-1',
//     '3-2',
//     '3-3',
//     '3-4',
//     '3-5',
//     '3-6',
//     '3-7',
//     '4-1',
//     '4-2',
//     '4-3',
//     '4-4',
//     '4-5',
//     '4-6',
//     '4-7',
//     '4-8',
//     '4-9',
// ]
const pics = [
    '1-1',
    '1-2',
    '1-3',
    '1-4'
]

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createSection = (pic) => {

    const container = createElement('section', 'container')//verde
    const sessão = createElement('div', 'carrosel')//azul
    const div1 = createElement('div', 'p1');//imagens
    const div2 = createElement('div', 'p2');//imagens
    const div3 = createElement('div', 'p3');//imagens
  
    div1.style.backgroundColor = '#000';
    div2.style.backgroundColor = '#030';
    div3.style.backgroundColor = '#004';

    sessão.appendChild(div1);//colocando a imagens dentro da sessão
    sessão.appendChild(div2);//colocando a imagens dentro da sessão
    sessão.appendChild(div3);//colocando a imagens dentro da sessão
    container.appendChild(sessão);//colocando a sessão dentro da section .container
    main.appendChild(container);//colocando o container dentro do main
    
    return container;//retornando o container montado
}


const sectionCreate = () => {

    pics.forEach((pic) => {

        const container = createSection(pic);
         main.appendChild(container);
    });
}

sectionCreate();
















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
