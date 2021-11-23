function calcular(){
    window.alert("VAMOS CALCULAR!!!!")

    let numeroA = document.getElementById('esquerdaSuperior')
    let numeroB = document.getElementById('direitaSuperior')
    let numeroC = document.getElementById('esquerdaInferior')

    let valorA = numeroA.value
    let valorB = numeroB.value
    let valorC = numeroC.value

    if(valorA == '' || valorB == '' || valorC == ''){
        window.alert("Digite números!")
    } else {
        window.alert(`O número A foi ${valorA}, o número B foi ${valorB}, o número C foi ${valorC}`)
    }

}