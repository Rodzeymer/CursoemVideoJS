function tabuada(){
    let numero = document.getElementById('numTabuada')
    let selecaoTabuada = document.getElementById('seltab')
    let valor = Number(numero.value)
    
    if(valor == ''){
        alert('Por favor, digite um numero')
    } else {
        let c = 1
        selecaoTabuada.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${valor} x ${c} = ${valor * c}`
            item.value = `selecaoTabuada${c}`
            selecaoTabuada.appendChild(item)
            c++
        }
        
    }
}