import { main, moreoptions } from "./refs.js"

export function menuclick(){

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
}
