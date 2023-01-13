const atacante = prompt('qual é o nome do personagem atacante?')
const poderDeAtaque = prompt('qual é o seu poder de ataque?')

const defensor = prompt('qual é o nome do personagem defensor?')
let pontosDeVida = Number(prompt('quantos pontos de vida ele possui?'))

const poderDeDefesa = prompt('qual é o seu poder de defesa?')
const possuiEscudo = prompt('ele possui um escudo? (sim/não)')

let danoCausado = 0



if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'não'){
    danoCausado = poderDeAtaque - poderDeDefesa

    
}else if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'sim') {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
    
}

pontosDeVida -= danoCausado

alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`)
alert(`${atacante} poder de ataque = ${poderDeAtaque} ${defensor}  pontos de vida = ${pontosDeVida}. poder de defesa ${poderDeDefesa} possui escudo = ${possuiEscudo}`)

