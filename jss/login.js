const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const enviar = document.querySelector('#enviar')

enviar.addEventListener('click', ()=>{
    
    const body = document.querySelector('body')

    if(email.value.length == 0 && senha.value.length == 0){

        console.log('olha no html pra ver se deu')

        div.innerHTML = 'deu'

        body.append(div)
    }
})
