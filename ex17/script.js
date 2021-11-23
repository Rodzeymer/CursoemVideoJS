function tabuada(){
    var numero = document.getElementById("tabuada")
    var valor = Number(numero.value)
    if (valor==""){
        alert("Insira um número inteiro!")
    } else{
        alert(`O número digitado foi ${valor}`)
    }
}