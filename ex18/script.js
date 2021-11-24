var listaNum = []
function adicionar(){
    let numNovo = window.document.getElementById('numeroNovo').value
    if (listaNum == [] || listaNum.indexOf(numNovo) == -1){
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