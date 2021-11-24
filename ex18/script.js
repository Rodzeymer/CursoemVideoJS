var listaNum = []
var listaSoma = 0

function Adicionar(){
    let numNovo = window.document.getElementById('numeroNovo').value
    if (listaNum == [] || listaNum.indexOf(numNovo) == -1){
        listaNum.push(numNovo)
        //window.alert(`Foi adicionado o ${numNovo} na lista`)
        let item = document.createElement('option')
            item.text = numNovo
            item.value = `listaNum${numNovo}`
            numerosAdc.appendChild(item)
    } else {
        window.alert('O número é inválido ou já está na lista!')
        }    
}

function Calcular(){
    var listaOrdem = listaNum.sort()
    var listaSoma = 0
    
    var quantidade = (listaOrdem.length)+1
    var menorNum = listaOrdem[0]
    var maiorNum = listaOrdem[1]
    var mediaNum = listaSoma/quantidade
    for (let index = 0; index < quantidade; index++) {
        listaSoma = listaSoma + listaOrdem[index]        
    }
    console.log(`Quantidade de Itens adicionados ${quantidade}`)
    console.log(`A lista é ${listaOrdem}`)
    console.log(`Maior Número da sequencia ${maiorNum}`)
    console.log(`Menor Número da sequencia ${menorNum}`)
    console.log(`A soma dos itens adicionados é ${listaSoma}`)
    console.log(`A média dos itens adicionados é ${mediaNum}`)

}
