var listaNum = []
var listaSoma = 0

function adicionar(){
    let numNovo = window.document.getElementById('numeroNovo').value
    if (listaNum == [] || listaNum.indexOf(numNovo) == -1){
        listaSoma = listaSoma + numNovo
        listaNum.push(numNovo)
        window.alert(`Foi adicionado o ${numNovo} na lista`)
        let item = document.createElement('option')
            item.text = numNovo
            item.value = `listaNum${numNovo}`
            numerosAdc.appendChild(item)
    } else {
        window.alert('O número é inválido ou já está na lista!')
        }    
}

var listaOrdem = listaNum.sort()
var quantidade = (listaNum.length)+1
var menorNum = listaOrdem[0]
var maiorNum = listaOrdem[quantidade]
var mediaNum = listaSoma/quantidade
console.log(`Quantidade de Itens adicionados ${quatidade}`)
console.log(`Maior Número da sequencia ${maiorNum}`)
console.log(`Menor Número da sequencia ${menorNum}`)
console.log(`A soma dos itens adicionados é ${listaSoma}`)
console.log(`A média dos itens adicionados é ${mediaNum}`)
