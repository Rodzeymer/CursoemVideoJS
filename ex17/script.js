function tabuada(){
    var numero = document.getElementById("tabuada")
    var valor = Number(numero.value)
    if (valor == ''){
        window.alert("Insira um número inteiro positivo!")
    }else{
        for (let index = 0; index <= 10; index++) {
            var tabuada1 = document.createElement('p');
            tabuada[index].innerHTML = valor * index;
            var resultado = document.getElementById("resultado")
            resultado = document.innerHTML(tabuada[index])
            
        }
    }
}