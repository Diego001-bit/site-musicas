let BotaoMenu = document.getElementById("menudogenero")
BotaoMenu.addEventListener('click',hamburgue)
let fechar=document.getElementById("sair")
fechar.addEventListener("click",fechamento)
function hamburgue(){
    let generos= document.getElementById('outrostipos')

    if(generos.style.display == 'flex'){
        generos.style.display ='none'
    }else{
        generos.style.display ='flex'
    }
}
function fechamento(){
    let generos= document.getElementById('outrostipos')
    generos.style.display ='none'
}