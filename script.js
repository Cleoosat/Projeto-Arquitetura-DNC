var setaDireita= window.document.getElementById("seta-direita")
var FotoPrincipal = window.document.getElementById("foto-principal")
var FotoSecundaria = window.document.getElementById("foto-secundaria")
var setaEsquerda= window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    FotoPrincipal.style ="display:none"
    FotoSecundaria.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex"
}

function RolarParaEsquerda(){
    FotoPrincipal.style ="display:flex"
    FotoSecundaria.style ="display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"  
}

