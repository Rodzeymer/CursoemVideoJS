var listaNum = []
function adicionar(){
    let numNovo = window.document.getElementById('numeroNovo').value
    listaNum.push(numNovo)
    /*if(numNovo == '' || listaNum.){
        listaNum.push(numNovo)
    } else {
        window.alert("Número inválido ou já existente")
    }*/
    window.alert(`Foi adicionado o ${numNovo} na posição ${listaNum.indexOf(numNovo)}, a lista completa é ${listaNum}`)
}