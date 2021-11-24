var listaNum = []
function adicionar(){
    let numNovo = window.document.getElementById('numeroNovo').value
    if(numNovo.indexOf(numNovo) == -1){
        listaNum.push(numNovo)
    } else {
        window.alert("Número inválido ou já existente")
    }
    window.alert(`${listaNum}`)
}