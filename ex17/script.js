function tabuada(){
    var numero = document.getElementById("tabuada")
    var valor = Number(numero.value)
    if (valor==""){
        alert("Insira um número inteiro!")
    } else{
        var numDigitado = document.createElement('p')
        numDigitado.document.innerHTML(valor.value)
        for (let index = 0; index < 11; index++) {
            var calculo = valor * index;
            var resultado = document.createElement('p')
            resultado.setAttribute('id', 'resultado')
            resultado.innerHTML = (calculo.value)
            
        }
    }
}