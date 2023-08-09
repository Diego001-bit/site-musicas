let enviar =document.getElementById('senha')
senha.addEventListener('click' , clicar)
function clicar(){
    let fm = document.getElementById('formulario')
    let senha = document.getElementById('isenha')
    let esc = document.getElementById('informacoes')
    senha = Number(senha.value)
    if(senha == 23232323){
        fm.action = 'flex.box.html'
    }else{
        alert(`senha ${senha} esta errada`)
    }

}
