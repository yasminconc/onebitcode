let numero = prompt('Informe o número que você deseja calcular da tabuada')

let resultado = ''

for (let fator = 1; fator <= 20; fator++) {
   resultado += (`${numero} * ${fator} = ${numero * fator} \n`)
   
}

alert(`resultado da tabuada de ${numero} : \n\n ${resultado}`)