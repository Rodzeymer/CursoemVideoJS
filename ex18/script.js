var listaNum = []
var listaSoma = 0

function Adicionar(){
    let numNovo = window.document.getElementById('numeroNovo')
    let numNovoValor = numNovo.value
    if (listaNum == [] || listaNum.indexOf(numNovo) == -1 || numNovo < 100){
        listaNum.push(numNovoValor)
        //window.alert(`Foi adicionado o ${numNovo} na lista`)
        let item = document.createElement('option')
            item.text = numNovoValor
            item.value = `listaNum${numNovoValor}`
            numerosAdc.appendChild(item)
    } else {
        window.alert('O número é inválido ou já está na lista!')
        }    
}

function Calcular(){
    if(listaNum == []){
        document.alert('Insira primeiro os valores a serem calculados')
    } else {
        var listaOrdem = listaNum.sort()
        var listaSoma = 0
        
        var quantidade = (listaOrdem)
        var menorNum = listaOrdem[0]
        var maiorNum = listaOrdem[quantidade.value]
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

}
