function tabuada(){
    var numero = document.getElementById("tabuada")
    var valor = Number(numero.value)
    if (valor==""){
        alert("Insira um número inteiro!")
    } else{
        for (let index = 0; index < 11; index++) {
            var calculo = valor * array;
            alert(calculo)
            
        }
    }
}