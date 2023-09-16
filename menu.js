let BotaoMenu = document.getElementById("menudogenero")
BotaoMenu.addEventListener('click',hamburgue)
let fechar=document.getElementById("sair")
fechar.addEventListener("click",fechamento)
function hamburgue(){
    let generos= document.getElementById('outrostipos')

    if(generos.style.right == '-320px'){
        generos.style.right ='0px'
    }else{
        generos.style.right ='0px'
    }
}
function fechamento(){
    let generos= document.getElementById('outrostipos')
    generos.style.right ='-320px'
}