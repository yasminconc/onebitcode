let opcao = ''

//o do vai ser executado idependente se dor true ou false
do {
    opcao = prompt('Escolha uma das opções a baixo:' + 
    '\n1. Opção um'   + 
    '\n2  Opção dois' +
    '\n3. Opção três' + 
    '\n4  Opção quatro' +
    '\n5. encerrar' 
 )

 switch (opcao) {
    case '1':
        alert('Você escolheu a opção 1')
        break;
    case '2':
        alert('Você escolheu a opção 2')
        break;
    case '3':
        alert('Você escolheu a opção 3')
        break;
    case '4':
        alert('Você escolheu a opção 4')
        break;
    case '5':
        alert('Você escolheu encerrar')
        alert('encerrando')
    default:
        alert('opção inválida')
 }
    
} while (opcao !== '5');