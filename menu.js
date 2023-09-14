let BotaoMenu = document.getElementById("menudogenero")
BotaoMenu.addEventListener('click',hamburgue)
function hamburgue(){
    let generos= document.getElementById('outrostipos')
    if(generos.style.display == 'flex'){
        generos.style.display ='none'
    }else{
        generos.style.display ='flex'
    }
}