function calcular(num){
    var numero = document.getElementById('painel').innerHTML
    var painel = document.getElementById('painel').innerHTML = numero + num
    
    if(painel.length > 7){
        document.getElementById('dots').style.display = 'block'
    }else{
        document.getElementById('dots').style.display = ''
    }
}
function resultado(){
    var resultado = document.getElementById('painel').innerHTML
    if(resultado){
        document.getElementById('painel').innerHTML = eval(resultado)
    }
}
function escondeDots(){
    document.getElementById('dots').style.display = ''
}
function mostraDots(){
    var numero = document.getElementById('painel').innerHTML
    if(numero.length > 7){
    document.getElementById('dots').style.display = 'block'
    }
}
function voltar(){
    var numero = document.getElementById('painel').innerHTML
    var resultado = document.getElementById('painel').innerHTML
    document.getElementById('painel').innerHTML = resultado.substring(0, resultado.length -1)
    if(numero == ''){
        document.getElementById('dots').style.display = ''
    }
}
function apagarTudo(){
    document.getElementById('painel').innerHTML = ''
    document.getElementById('dots').style.display = ''
}