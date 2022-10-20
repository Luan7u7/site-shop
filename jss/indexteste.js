const menu = document.querySelector('.menu')
const favorite = document.querySelector('.favorite')
const person = document.querySelector('.person')
const moreoptions = document.querySelector('.moreoptions')
const closemenu = document.querySelector('.closemenu')
const main = document.querySelector('main')
const search = document.querySelector('.search')

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
    div.style.backgroundImage = `url('https://imgnike-a.akamaihd.net/1300x1300/01675551.jpg')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('../imagens/branco/1-2.webp')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('../imagens/branco/1-3.webp')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('../imagens/branco/1-4.webp')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('../imagens/branco/1-5.webp')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('../imagens/branco/1-6.webp')`

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
    div.style.backgroundImage = `url('../imagens/laranja/2-1.webp')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('../imagens/laranja/2-2.webp')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('../imagens/laranja/2-3.webp')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('../imagens/laranja/2-4.webp')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('../imagens/laranja/2-5.webp')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('../imagens/laranja/2-6.webp')`

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

const createContainerBlack = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');
    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('../imagens/preto/3-1.webp')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('../imagens/preto/3-2.webp')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('../imagens/preto/3-3.webp')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('../imagens/preto/3-4.webp')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('../imagens/preto/3-5.webp')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('../imagens/preto/3-6.webp')`

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

const createContainerRosa = () => {
    const container = createElement('div', 'container')
    const section = createElement('div', 'section');

    const div = createElement('div', 'f1');
    div.style.backgroundImage = `url('../imagens/rosa/4-1.webp')`
    
    const div2 = createElement('div', 'f1');
    div2.style.backgroundImage = `url('../imagens/rosa/4-2.webp')`

    const div3 = createElement('div', 'f1');
    div3.style.backgroundImage = `url('../imagens/rosa/4-3.webp')`

    const div4 = createElement('div', 'f1');
    div4.style.backgroundImage = `url('../imagens/rosa/4-4.webp')`
    div4.style.backgroundSize = 'contain'

    const div5 = createElement('div', 'f1');
    div5.style.backgroundImage = `url('../imagens/rosa/4-5.webp')`

    const div6 = createElement('div', 'f1');
    div6.style.backgroundImage = `url('../imagens/rosa/4-6.webp')`

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

createContainerBranco()
createContainerLaranja()
createContainerBlack()
createContainerRosa()

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

search.addEventListener('click', () => {
    
})







//fazer também a animação do icone de busca com o click.

//criar paginas de perfil, mensagens, carrinho, favoritos e atribuir a pagina principal para o icone home.