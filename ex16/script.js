function contar(){
    var inicio = document.getElementById("txtInicio");
    var fim = document.getElementById("txtFim");
    var passo = document.getElementById("txtPasso");
    var resultado = document.getElementById("resultado")

    if(inicio.value.lenght == 0 || fim.value.lenght == 0|| passo.value.lenght == 0){
        window.alert('[ERRO] Faltam dados!')
    } else{
        resultado.innerHTML = 'Contando: '
        var numeroInicio = Number(inicio.value)
        var numeroFim = Number(fim.value)
        var numeroPasso = Number(passo.value)
        
        if(numeroInicio<numeroFim){
        for (let c = numeroInicio; c <= numeroFim; c+=numeroPasso) {
            resultado.innerHTML +=`${c} \u{1f449},  `}
        } else {
            for (let c = numeroFim; c <= numeroInicio; c-=numeroPasso) {
                resultado.innerHTML +=`${c} \u{1f449},  `
            }               
        }
        resultado.innerHTML+=` \u{1f3c1}`
    }
}