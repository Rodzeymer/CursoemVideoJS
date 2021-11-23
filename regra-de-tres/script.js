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
        let resultado = document.createElement('p')
        resultado.innerHTML = `Resultado = ${(valorC*valorB)/valorA}`        
        resultado.appendChild(resultado)
        window.alert(`Resultado = ${(valorC*valorB)/valorA}`)
    }

}