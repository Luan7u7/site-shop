

const menu = document.querySelector('.menu')
const favorite = document.querySelector('.favorite')
const person = document.querySelector('.person')
const moreoptions = document.querySelector('.moreoptions')
const closemenu = document.querySelector('.closemenu')
const main = document.querySelector('main')
const contentSearch = document.querySelector('.content-search');
const inputSearch = document.querySelector('.input-search')
const searchIcon = document.querySelector('.search-icon')
const buy = document.querySelector('.buy')
const favPage = document.querySelector('.fav-page')
const lupa = document.getElementById('lupa');

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const firstSection = () => {
    
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');
    
    const div1 = createElement('div', 'white');
    const white = createElement('span', 'white')
    div1.style.backgroundImage = `url(https://imgnike-a.akamaihd.net/1300x1300/01675551A4.jpg)`
    white.innerHTML = 'Air Jordan <br>White'
    
    const div2 = createElement('div', 'f1');
    const midse = createElement('span', 'midse')
    midse.innerHTML = 'Mid-SE'
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/014626P1A4.jpg')`
    
    const div3 = createElement('div', 'f1');
    const xux = createElement('span', 'xux')
    xux.innerHTML = 'XUX'
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/0114147UA4.jpg')`


    const div4 = createElement('div', 'f1');
    const zion2 = createElement('span', 'zion2')
    zion2.innerHTML = 'Zion2'
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02235051A4.jpg')`
    div4.style.backgroundSize = 'contain'
   
    
    const div5 = createElement('div', 'f1');
    const orange = createElement('span', 'orange')
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01648755A4.jpg')`
    orange.innerHTML = 'Orange'
    
    const div6 = createElement('div', 'f1');
    const xxxvilow = createElement('span', 'xxxvilow')    
    xxxvilow.innerHTML = 'XXXvilow'
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/013631IDA4.jpg')`
    

    main.appendChild(container)
    container.appendChild(section);
    section.appendChild(div1);
    section.appendChild(div2);
    section.appendChild(div3);
    section.appendChild(div4);
    section.appendChild(div5);
    section.appendChild(div6);
    div1.appendChild(white);
    div2.appendChild(midse);
    div3.appendChild(xux);
    div4.appendChild(zion2);
    div5.appendChild(orange);
    div6.appendChild(xxxvilow);

    return container;
}

const secondSection = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');
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

const createContainerAnuncio = () => {

    const container = createElement('div', 'container')
    const content = createElement('section', 'anuncio')
    const div = createElement('div', 'imagem')
    const text = createElement('span', 'texto')

    text.innerHTML = 'O conforto de milhões <br> <sup>novo air-drop p<small>99</small></sup><br><br><br> R$978,97'
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/0119897U.jpg')`
    // div.style.scale = '1.3'
    div.style.backgroundSize = 'contain'
    div.style.backgroundPosition = 'bottom right'



    main.appendChild(container);
    container.appendChild(content);
    content.appendChild(div);
    div.appendChild(text)

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

createContainerAnuncio();
firstSection();
secondSection();
createContainerAnuncio2();
thirdSection();
fourthSection();
fifthSection();
createContainerXXXVILow();

menu.addEventListener('click', () => {

    if(moreoptions.style.transform = 'translate(-340px, 0px)'){
        moreoptions.style.transform = 'translate(0px, 0px)'
        moreoptions.style.transition = 'all .4s'
        main.style.transform = 'translate(0px, 85px)'
        moreoptions.style.visibility = 'visible'
    }
    else {
        moreoptions.style.transform = 'translate(-340px, 0px)'
        moreoptions.style.visibility = 'hidden'
    }
})

closemenu.addEventListener('click', () => {

    if(moreoptions.style.transform = 'translate(-340px, 0px)'){

        moreoptions.style.visibility = 'hidden'
        moreoptions.style.transform = 'translate(-300px, 0px)'
        main.style.transform = 'translate(0px, 0px)'
    }
    
    //tirar o o clipping azul na hora de fechar o menu
})

searchIcon.addEventListener('click', (event) => {

    console.log(event );

    if (inputSearch.style.display == 'none'){

        inputSearch.style.display = 'flex'
    }
   
})


favorite.addEventListener('click', () => {


    if(favPage.style.transform == 'translate(0px, 0px)'){

        favPage.style.transform = 'translate(0px, 800px)'
        favPage.style.visibility = 'visible'
    }
    else {
        
        favPage.style.visibility = 'visible'
        favPage.style.transform = 'translate(0px, 0px)'
    }
})

    
person.addEventListener('click', () => {

    window.location = './perfil.html'
})

buy.addEventListener('click', () => {

    window.location = './buy.html'
})






//fazer também a animação do icone de busca com o click.

//criar paginas de perfil, mensagens, carrinho, favoritos e atribuir a pagina principal para o icone home.