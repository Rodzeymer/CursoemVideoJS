function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formularioAno = document.querySelector('input#txtano');
    var resultado = document.querySelector('div#resultado');
    
    if(formularioAno.value.length == 0 || formularioAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        //resultado.innerHTML = `Idade calculada: ${idade} anos`
        var genero =" ";
        if (formularioSexo[0].checked){
            genero = "Homem";
        } else if (formularioSexo[1].checked){
            genero = "Mulher";
        } else if (formularioSexo[2].checked){
            genero = "Não-Binário";
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} idade`
    }
}