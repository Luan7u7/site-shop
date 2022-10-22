const menu = document.querySelector('.menu')
const favorite = document.querySelector('.favorite')
const person = document.querySelector('.person')
const moreoptions = document.querySelector('.moreoptions')
const closemenu = document.querySelector('.closemenu')
const main = document.querySelector('main')
const search = document.querySelector('.search')
const buy = document.querySelector('.buy')

const modelos = ['','','', '',]


const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createContainerBranco = () => {
    
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');
    
    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url(https://imgnike-a.akamaihd.net/1300x1300/01675551A4.jpg)`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01675551A2.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01675551.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01675551A3.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01675551A6.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01675551A7.jpg')`

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

const createContainerLaranja = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');
    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01648755A4.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01648755A2.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01648755.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01648755A3.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01648755A6.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01648755A7.jpg')`


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

const createContainerMidSE = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');
    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/014626P1A4.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/014626P1A2.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/014626P1.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/014626P1A3.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/014626P1A6.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/014626P1A7.jpg')`

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

const createContainerXUX = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');

    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/0114147UA4.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/0114147UA2.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/0114147U.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/0114147UA3.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/0114147UA6.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/0114147UA7.jpg')`

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

const createContainerZion2 = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');

    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02235051A4.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02235051A2.jpg')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02235051.jpg')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02235051A3.jpg')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02235051A6.jpg')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/900x900/02235051A7.jpg')`

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

createContainerBranco();
createContainerLaranja();
createContainerMidSE();
createContainerXUX();
createContainerZion2();
createContainerXXXVILow();

menu.addEventListener('click', () => {

    if(moreoptions.style.visibility == 'hidden'){
        moreoptions.style.transform = 'translate(0px, 0px)'
        moreoptions.style.transition = 'all .4s'
        main.style.transform = 'translate(0px, 85px)'
        main.style.transition = 'all .5s'
        moreoptions.style.visibility = 'visible'
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

search.addEventListener('click', () => {

})

favorite.addEventListener('click', () => {

    window.location = './favorite.html'
})

person.addEventListener('click', () => {

    window.location = './perfil.html'
})

buy.addEventListener('click', () => {

    window.location = './buy.html'
})






//fazer também a animação do icone de busca com o click.

//criar paginas de perfil, mensagens, carrinho, favoritos e atribuir a pagina principal para o icone home.