
const idade = Number(prompt("informe a sua idade: "))


if (idade > 18) {
    alert("Você é maior de idade");

}else if (idade < 18 && idade > 0  ) {
    alert('Você é menor de idade');

}else {
    alert("insira uma idade")
}