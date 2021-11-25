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
        console.log('ok')
        valores.push(Number(novoNum.value))
        let item = document.createElement('option')
        item.text=`Valor ${novoNum.value} adicionado`
        listaNum.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    novoNum.value=''
    novoNum.focus()
}

function Calcular(){
    if (valores.length == 0){
        console.log("NÃO PODE")
    } else {
        
        valoresOrdem = valores.sort()
        let totalValores = valoresOrdem.length
        let maiorValor = valoresOrdem[totalValores]
        let menorValor = valoresOrdem[0]
        let soma = 0

        for (let index = 0; index <= valoresOrdem.length; index++) {
            soma += valoresOrdem[index]
        }
        let somaValores = soma

        resultado.innerHTML=''
        resultado.innerHTML += `Ao todo temos ${totalValores} valores adicionados!`
        resultado.innerHTML += `O maior valor é ${maiorValor}!`
        resultado.innerHTML += `O menor valor é ${totalValores}!`
        resultado.innerHTML += `A soma dos valores é ${somaValores}!`

    }
}