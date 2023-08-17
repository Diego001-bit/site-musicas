
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
    }else if (valor == 0){
        corpo.style.backgroundColor="rgb(2, 29, 80)"
    }
})

function numero(){
    let comecar = document.getElementById('ifundo')
    let coc = Number(comecar.value)
    let vamos = document.getElementById('vamos')
    vamos.innerHTML = `${coc}`
}
        
//https://youtu.be/LNkjivRSyd4
