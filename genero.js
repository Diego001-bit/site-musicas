let enviar =document.getElementById('senha')
senha.addEventListener('click',clicar)
function clicar(){
let fm = document.getElementById('formulario')
let senha = document.getElementById('isenha')
let musica = document.getElementsByName("musicas")
senha = Number(senha.value)
if(senha == 23232323){
    for(var i=0;i<musica.length;i++){
        if(musica[i].checked){
            if(musica[i].value == 1){
                fm.action="forro.html"
            }else if (musica[i].value == 2){
                fm.action="phonk.html"
            }else{
                fm.action="aleatorias.html"
            }
        }
    }
}else{
alert(`senha ${senha} esta errada`)
}
}
function iida(){
    let iano = document.getElementById('iano')
    let atual = new Date().getFullYear()
    let anos = Number(iano.value) 
    let resultado = document.getElementById('resultado')
    let ano = Number(atual) - anos
    resultado.innerHTML = `${ano}`
}
