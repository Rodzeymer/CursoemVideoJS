var listaNum = []
var listaSoma = 0

function Adicionar(){
    let numNovo = window.document.getElementById('numeroNovo').value
    if (numNovo >= 1 && numNovo <= 100){
        if (numNovo != '' && listaNum.indexOf(numNovo) == -1){        
            //window.alert(`Foi adicionado o ${numNovo} na lista`)
            let item = document.createElement('option')
                item.text = numNovo
                item.value = `listaNum${numNovo}`
                numerosAdc.appendChild(item)
                listaNum.push(numNovo)
        }else {
            window.alert('O número é inválido ou já está na lista!')  
        } 
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
        
        var quantidade = (listaOrdem.value)
        var menorNum = listaOrdem[0]
        var maiorNum = listaOrdem[Number(quantidade)]
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
