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
        resultado.setAttribute('id', 'resultado')
        resultado.innerHTML = `Resultado = (C x B) / A /nResultado = ${(valorC*valorB)/valorA}`
        let d = document.getElementById('resultado')
        d.appendChild(resultado)
        window.alert(`Resultado = ${(valorC*valorB)/valorA}`)
    }

}