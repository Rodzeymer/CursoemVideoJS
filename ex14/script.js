function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    
    if(formularioAno.value.length == 0 || formularioAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        console.log(formularioAno.value)
        //resultado.innerHTML = `Idade calculada: ${idade} anos`
        var genero =""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formularioSexo[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "ex14/img/menino-jovem.jpeg")
            }else if(idade < 21){
                //Jovem
                img.setAttribute("src", "ex14/img/homem-jovem.jpeg")
            }else if(idade < 50){
                //Adulto
                img.setAttribute("src", "ex14/img/homem-adulto.jpeg")
            }else{
                //Idoso
                img.setAttribute("src", "ex14/img/homem-idoso.jpeg")
            }
        } else if (formularioSexo[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade< 10){
                //Criança
                img.setAttribute("src", "ex14/img/menina-jovem.jpeg")
            }else if(idade< 21){
                //Jovem
                img.setAttribute("src", "ex14/img/mulher-jovem.jpeg")
            }else if(idade< 50){
                //Adulto
                img.setAttribute("src", "ex14/img/mulher-adulto.jpeg")
            }else{
                //Idoso
                img.setAttribute("src", "ex14/img/mulher-idosa.jpeg")
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)

    }
}