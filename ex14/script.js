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
        resultado.innerHTML = `Idade calculada: ${idade} anos`
    }
}