// if else

//

let hora = 18.5;


if (hora >= 6 && hora < 12) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!")
}

// switch case

let permissao = 'gerente'; // comum, gerente, diretor

switch (permissao) {
    case 'comum':
        console.log('usuário comum')
        break;
    case 'gerente':
        console.log('usuário gerente')
        break;
    case 'diretor':
        console.log('usuário diretor')
        break;

    default:
        console.log("usuário não reconhecido");

}