// Falsy
// undefined
// null
// 0
// false
// ''
// NaN - not a number

// Truthy
// tudo que não for Falsy

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);