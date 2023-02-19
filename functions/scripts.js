//functions em JavaScript
// verbo + substantivo

//reseta (verbo) Cor(substantivo)

let corSite = 'azul';

console.log(corSite)



function resetaCor(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;

};

console.log(corSite)
resetaCor("vermelho", "escuro");
console.log(corSite)

//tipos de funções
// Realiza uma tarefa e não devolve nada
function dizerNome() {
    console.log('Leandro')
}
dizerNome();

function multiplicarPorDois(valor) {
    return valor * 2;
}
console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log(resultado)