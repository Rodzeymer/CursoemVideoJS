function contar(){
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");

    for (let index = inicio.value; index < fim.value; index=index+passo.value) {
        var contagem = document.createElement('p')
        contagem.innerHTML = `${index}`
    }
}