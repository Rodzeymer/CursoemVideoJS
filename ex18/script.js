let novoNum = document.querySelector('input#numeroNovo')
let listaNum = document.querySelector('select#numerosAdc')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function Adicionar(){
    if(isNumero(novoNum.value) && !inLista(novoNum.value, valores)){
        let item = document.createElement('option')
        item.text = numNovo
        item.value = `listaNum${numNovo}`
        numerosAdc.appendChild(item)
        listaNum.push(numNovo)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}