
import { menu, favorite, main, person, moreoptions, closemenu, contentSearch, inputSearch,  searchIcon, buy, favPage, home } from "./module/refs.js"

import { menuclickFunc, favoriteFunc, closemenuFunc } from "./module/functions.js";

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
const container = createElement('div', 'container');
const section = createElement('div', 'section');
const section1 = createElement('section', 'anuncio');
const text = createElement('span','')

const clothesLinks = [
    
    "url('https://img.ltwebstatic.com/images3_pi/2022/09/23/1663897087abeced1089303adc8c2e94fe684a4632_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2022/08/31/1661875250461190540124b4f44c2da8112f5d8073_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2020/12/09/1607481832386c7359a92c5fa7d801ccab8f31144e_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2021/06/17/162389276905c8ad5db571ea8a2be428e248f345a9_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2022/03/23/1648037329ef61759933a2e45c802c504040f0dd51_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2021/12/27/16405850862c25c272a56425e1d7cb0beef6f6c925_thumbnail_405x552.webp')",
]

const sectionClothes = () => { 

    const section = createElement('div', 'section')
    main.appendChild(section)

    const addImagesInDiv = () => {

        section.innerHTML = clothesLinks.map((clotheLink) =>

        `
            <div style="background-image: ${clotheLink};"></div>

        `).join('');
    }
    addImagesInDiv();
}

const createAnuncio = () => {
    
    const div = createElement('div', 'imagem')
    const text = createElement('span', 'texto')

    text.innerHTML = 'O conforto de milhões <br> <sup>novo air-drop p<small>99</small></sup><br><br><br> R$978,97'
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0119897U.jpg')`
    div.style.backgroundSize = 'contain'
    div.style.backgroundPosition = 'bottom right'

    main.append(container)
    container.appendChild(section1)
    section1.appendChild(div)
    div.appendChild(text)
    return container;
}


sectionClothes();
createAnuncio();





menu.addEventListener('click', menuclickFunc)

closemenu.addEventListener('click', closemenuFunc)

//tirar o o clipping azul na hora de fechar o menu
searchIcon.addEventListener('click', (event) => {})

favorite.addEventListener('click', favoriteFunc)

person.addEventListener('click', () => window.location = './perfil.html')

buy.addEventListener('click', () => window.location = './buy.html')
