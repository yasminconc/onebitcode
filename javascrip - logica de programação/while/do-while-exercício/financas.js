let saldo = Number(prompt('informe a quantidade de dinheiro inicial'))

let opcao = ''

do {
    opcao = prompt(
        `Saldo disponivel R$ ${saldo}
        \n1. Adicionar dinheiro 
        \n2. Remover dinheiro
        \n3 Sair`)

    switch (opcao) {
        case '1':
            saldo += Number(prompt('Informe o valor a ser adcionado'))
            break;
        case '2':
            saldo -= prompt('Informe o saldo a ser removido') 
            break;
        case '3':
            alert('Saindo ..')
            break;
        default:
           alert('entrada inválida')
    }    
    
} while (opcao !== '3');