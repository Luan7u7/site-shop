

//importações de referencias module
import { menu, favorite, main, person, moreoptions, closemenu, contentSearch, inputSearch,  searchIcon, buy, favPage } from "../js/module/refs.js"

// importação de funções
import { menuclickFunc, favoriteFunc, closemenuFunc } from "./module/functions.js";

// função para atribuir a tag e class
const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


const container = createElement('div', 'container');
const section = createElement('div', 'section');
const section1 = createElement('section', 'anuncio');
const text = createElement('span','')

const firstSection = () => { 
    
    const images = {
        foto: 'url(https://img.ltwebstatic.com/images3_pi/2022/09/23/1663897087abeced1089303adc8c2e94fe684a4632_thumbnail_405x552.webp)',
        foto1: 'url(https://img.ltwebstatic.com/images3_pi/2022/08/31/1661875250461190540124b4f44c2da8112f5d8073_thumbnail_405x552.webp)',
        foto2: 'url(https://img.ltwebstatic.com/images3_pi/2020/12/09/1607481832386c7359a92c5fa7d801ccab8f31144e_thumbnail_405x552.webp)',
        foto3: 'url(https://img.ltwebstatic.com/images3_pi/2021/06/17/162389276905c8ad5db571ea8a2be428e248f345a9_thumbnail_405x552.webp)',
        foto4: 'url(https://img.ltwebstatic.com/images3_pi/2022/03/23/1648037329ef61759933a2e45c802c504040f0dd51_thumbnail_405x552.webp)',
        foto5: 'url(https://img.ltwebstatic.com/images3_pi/2021/12/27/16405850862c25c272a56425e1d7cb0beef6f6c925_thumbnail_405x552.webp)',
    }

    const div = createElement('div', '')
    const div1 = createElement('div', '');
    const div2 = createElement('div', '');
    const div3 = createElement('div', '');
    const div4 = createElement('div', '');
    const div5 = createElement('div', ''); 
    
    div.style.backgroundImage = images.foto
    div1.style.backgroundImage = images.foto1
    div2.style.backgroundImage = images.foto2
    div3.style.backgroundImage = images.foto3
    div4.style.backgroundImage = images.foto4
    div5.style.backgroundImage = images.foto5


    ext.innerHTML = 'R$69,90'
    

    // main.appendChild(container)
    main.appendChild(section)
    section.appendChild(div)
    div.appendChild(text)
    section.appendChild(div1)
    section.appendChild(div2)
    section.appendChild(div3)
    section.appendChild(div4)
    section.appendChild(div5)
    
    return container
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

const secondSection = () => {
    // const container = createElement('div', 'container')
    const section2 = createElement('div', 'section2');
    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0229177T.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/023790NX.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0229327T.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0238497T.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/023789NX.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/021895ID.jpg')`


    // main.appendChild(container)
    // container.appendChild(section2);
    main.appendChild(section2);
    section2.appendChild(div);
    section2.appendChild(div2);
    section2.appendChild(div3);
    section2.appendChild(div4);
    section2.appendChild(div5);
    section2.appendChild(div6);

    return container;
}

const thirdSection = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');
    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/012791ID.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/022258ID.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/022762ID.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0222530L.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0230403X.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/023618ID.jpg')`

    main.appendChild(container)
    container.appendChild(section);
    section.appendChild(div);
    section.appendChild(div2);
    section.appendChild(div3);
    section.appendChild(div4);
    section.appendChild(div5);
    section.appendChild(div6);

    return container;
}

const fourthSection = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');

    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/006579IE.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0065797U.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/00657952.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/006579MY.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/006579IF.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/00657951.jpg')`

    main.appendChild(container)
    container.appendChild(section);
    section.appendChild(div);
    section.appendChild(div2);
    section.appendChild(div3);
    section.appendChild(div4);
    section.appendChild(div5);
    section.appendChild(div6);

    return container;
}

const fifthSection = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');

    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/010784ID.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0112167T.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/008666ID.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013431NX.jpg')`
    div4.style.backgroundSize = 'cover'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/023872ID.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0117937T.jpg')`

    main.appendChild(container)
    container.appendChild(section);
    section.appendChild(div);
    section.appendChild(div2);
    section.appendChild(div3);
    section.appendChild(div4);
    section.appendChild(div5);
    section.appendChild(div6);

    return container;
}

const createContainerXXXVILow = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');

    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013631IDA4.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013631IDA2.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013631ID.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013631IDA3.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013631IDA6.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013631IDA7.jpg')`

    section.style.margin

    main.appendChild(container)
    container.appendChild(section);
    section.appendChild(div);
    section.appendChild(div2);
    section.appendChild(div3);
    section.appendChild(div4);
    section.appendChild(div5);
    section.appendChild(div6);

    return container;
}

const createContainerAnuncio2 = () => {

    const container = createElement('div', 'container')
    const content = createElement('section', 'anuncio')
    const div = createElement('div', 'imagem')
    const text = createElement('span', 'texto')

    text.innerHTML = 'Os melhores Caps você<br>encontra aqui<br>confira'
    text.style.transform = 'rotateY(180deg)'
    text.style.lineHeight = '1.4em'
    text.style.textAlign = 'right'
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02399551.jpg')`
    div.style.backgroundSize = 'contain'
    div.style.backgroundPosition = 'bottom right'
    div.style.transform = 'rotateY(180deg)'


    main.appendChild(container);
    container.appendChild(content);
    content.appendChild(div);
    div.appendChild(text)

    return container;
}




createAnuncio();
firstSection();
secondSection();
// createContainerAnuncio2();
// thirdSection();
// fourthSection();
// fifthSection();
// createContainerXXXVILow();


//click de abri a aba de menu
menu.addEventListener('click', menuclickFunc)


//click de fechar a aba menu
closemenu.addEventListener('click', closemenuFunc)

//tirar o o clipping azul na hora de fechar o menu



searchIcon.addEventListener('click', (event) => {
    
    console.log('foi');
    
    if (inputSearch.style.display == 'none'){
        
        inputSearch.style.display = 'flex'
    }
    
})


//click de abrir e fechar a aba de favoritos
favorite.addEventListener('click', favoriteFunc)
    


person.addEventListener('click', () => {

    window.location = './perfil.html'
})



buy.addEventListener('click', () => {

    window.location = './buy.html'
})


 