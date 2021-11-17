function contar(){
    var inicio = document.getElementById("txtInicio");
    var fim = document.getElementById("txtFim");
    var passo = document.getElementById("txtPasso");
    var resultado = document.getElementById("resultado")

    if (inicio.value == '' || fim.value == '' || passo.value == ''){
        resultado.innerHTML = `\u{2755} IMPOSSÍVEL CONTAR \u{2755}`
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: '
        var numeroInicio = Number(inicio.value)
        var numeroFim = Number(fim.value)
        var numeroPasso = Number(passo.value)
        
        if(numeroInicio<numeroFim){
            for (let c = numeroInicio; c <= numeroFim; c+=numeroPasso) {
            resultado.innerHTML +=`${c} \u{1f449},  `}
        } else {
            for (let c = numeroInicio; c >= numeroFim; c-=numeroPasso) {
                resultado.innerHTML +=`${c} \u{1f449},  `
            }               
        }
        resultado.innerHTML+=` \u{1f3c1}`
    }
}