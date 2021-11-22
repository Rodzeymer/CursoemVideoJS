function tabuada(){
    var numero = document.getElementById("tabuada")
    if (numero == null){
        window.alert("Insira um número inteiro!")
    }else{
        for (let index = 0; index <= 10; index++) {
            var tabuada1 = document.createElement('p');
            tabuada[index].innerHTML = numero * index;
            var resultado = document.getElementById("resultado")
            resultado = document.innerHTML(tabuada[index])
            
        }
    }
}