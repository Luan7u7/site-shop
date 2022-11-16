import { menu, favorite, main, person, moreoptions, closemenu, contentSearch, inputSearch,  searchIcon, buy, favPage } from "./refs.js"


export function menuclickFunc(){

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


export function favoriteFunc(){
 
    
    if(favPage.style.transform == 'translate(0px, 0px)'){

        favPage.style.transform = 'translate(0px, 800px)'
        favPage.style.visibility = 'hidden'
    }
    else {
        
        favPage.style.visibility = 'visible'
        favPage.style.transform = 'translate(0px, 0px)'
    }
}


export function closemenuFunc(){

    if(moreoptions.style.transform = 'translate(-340px, 0px)'){

        moreoptions.style.visibility = 'hidden'
        moreoptions.style.transform = 'translate(-300px, 0px)'
        main.style.transform = 'translate(0px, 0px)'
    }
}