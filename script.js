
let fundo = document.getElementById('ifundo')
fundo.addEventListener('mousemove',function(){
    console.log(fundo.value)
    let valor =Number(fundo.value);

    if(valor == 1){
        corpo.style.backgroundImage = "url(imagens/paisagem-montanha.jpg)"
    }else if(valor == 2){
        corpo.style.backgroundImage ="url(imagens/mar.jpg)"
    }else if(valor == 3){
        corpo.style.backgroundImage="url(imagens/vegetação.jpg)"
    }
})

function numero(){
    let comecar = document.getElementById('ifundo')
    let coc = Number(comecar.value)
    let vamos = document.getElementById('vamos')
    vamos.innerHTML = `${coc}`
}
        
//https://youtu.be/LNkjivRSyd4
