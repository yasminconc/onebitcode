const turista = prompt("Qual o seu nome?")

let cidades = ""

let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (sim /não)")


while (continuar === 'sim') {
    let cidade = prompt('Qual é o nome da cidade visitada')
    //cidades = cidades + ...
    cidades += ' - ' + cidade + 
    contagem++
    continuar = prompt('Você visitou alguma outra cidade? (sim/não)')

}

alert(`Turista ${turista} / quantidade de cidades visitadas: ${contagem} / cidades visitas: ${cidades}`)