const celular = {
    marcaCelular: 'asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function() {
        console.log("Ligando...");
    }
}

let novoObjeto = Object.assign({ bateria: 5000 }, celular)

console.log(novoObjeto);

let objeto2 = {...celular }
console.log(objeto2)