var listaNum = []
function adicionar(){
    let numNovo = window.document.getElementById('numeroNovo').value
    if(numNovo in listaNum){
        window.alert("Número inválido ou já existente")
    } else {
    listaNum.push(numNovo)
    window.alert(`${listaNum}`)
    }
}