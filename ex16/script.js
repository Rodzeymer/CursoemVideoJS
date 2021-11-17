function contar(){
    var inicio = document.getElementById("txtInicio");
    var fim = document.getElementById("txtFim");
    var passo = document.getElementById("txtPasso");

    for (let index = inicio.value; index < fim.value; index=index+passo.value) {
        var contagem = document.createElement('p')
        contagem.innerHTML = `${index}`
    }
}