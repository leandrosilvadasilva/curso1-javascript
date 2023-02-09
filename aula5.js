// Operadores Aritiméticos
// *** atribuição
// *** de comparação
// *** igualdade

// Operadores Aritiméticos
// + - * / **
// ++ --
//let salario = 100;

//console.log(salario + salario);
//console.log(salario * salario);
//console.log(salario - salario);
//console.log(salario / salario);

idade = 18;

console.log(idade++);
console.log(idade);

//atribuição

let valorTeclado = 100;
console.log(valorTeclado)

valorTeclado += valorTeclado;
console.log(valorTeclado)

//igualdade estrita

console.log(1 === 1);
console.log('1' === 1);

//igualdade solta

console.log(1 == 1);
console.log('1' == 1);

//operador ternário
// tem um cliente, 100 premiu, comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' :
    'comum';

console.log(tipo);
// Operador lógico e (&&)
// retorna true se os dois operandos forem true

console.log(false && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// Operador lógico OU (||)
// retorna true se um dos dois operandos forem true

let maiorIdade = true;
let possuiCarteiraTrabalho = false;
let poderAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log('Pode Aplicar:', poderAplicar);

// Operador lógico NOT (!)
let maiordeIdade = false;
let possuiaCarteiraTrabalho = false;
let poderaAplicar = maiordeIdade || possuiaCarteiraTrabalho;
console.log('Pode aplicar:', poderaAplicar);

let candidatoRecusado = !poderaAplicar;

console.log('Candidato Recusado:', candidatoRecusado);