const nome1 = prompt('Nome do veículo 1')
const velocidade1 = Number(prompt("velocidade do veículo 1 "))

const nome2 = prompt('Nome do veículo 2')
const velocidade2 = Number(prompt("velocidade do veículo 2 "))


if ( velocidade1 > velocidade2) {
    alert(`O carro ${nome1} é mais rápido do que o carro ${nome2}`);

}else if (velocidade1 === velocidade2 && velocidade1 && velocidade2 > 0  ) {
    alert(`O ${nome1} e o ${nome2} tem a mesma velocidade`);

}else if (velocidade2 > velocidade1){
    alert(`O carro ${nome2} é mais rápido do que o carro ${nome1}`)
}