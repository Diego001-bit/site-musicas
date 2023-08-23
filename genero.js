let enviar =document.getElementById('senha')
senha.addEventListener('click',clicar)
function clicar(){
let fm = document.getElementById('formulario')
let senha = document.getElementById('isenha')
let musicas = document.getElementsByName("musica")
let mus = musicas.value
senha = Number(senha.value)
if(senha == 23232323){
        if(mus = 'musica1'){
            fm.action= 'forro.html'
        }else if(mus = 'musica2'){
            fm.action ='phonk.html'
        }
}else{
alert(`senha ${senha} esta errada`)
}

}