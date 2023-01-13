
const resultado = prompt('escolha uma alternativa (a/b ou c)')


switch (resultado) {
    case 'a':
        alert('resultado é a')
        break
    case 'b':
        alert('resultado é b')
        break
    case 'c':
        alert('resultado é c') 
        break
    default:
       alert('finalizando.')
}


const resultadoNumerico = Number(resultado)

switch (resultadoNumerico) {
    case 1 :
        alert('resultado é 1')
        break
    case 2 :
        alert('resultado é 2')
        break
    case 3 :
        alert('resultado é 3') 
        break
    default:
       alert('finalizando.')
}