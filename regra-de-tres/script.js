function tabuada(){
    window.alert("VAMOS CALCULAR!!!!")

    let numeroA = document.getElementById('esquerdaSuperior')
    let numeroB = document.getElementById('direitaSuperior')
    let numeroC = document.getElementById('esquerdaInferior')

    let valorA = numeroA.value
    let valorB = numeroB.value
    let valorC = numeroC.value

    if(valorA == '' || valorB == '' || valorC == ''){
        window.alert("Digite números!")
    }

}