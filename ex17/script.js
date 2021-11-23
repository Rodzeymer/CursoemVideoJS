function tabuada(){
    let numero = document.getElementById('numTabuada')
    let selecaoTabuada = document.getElementById('seltab')
    let valor = Number(numero.value)
    
    if(valor == ''){
        alert('Porfavor digite um numero')
    } else {
        let c = 1
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${valor} x ${c} = ${valor * c}`
            selecaoTabuada.appendChild(item)
            c++
        }
        
    }
}