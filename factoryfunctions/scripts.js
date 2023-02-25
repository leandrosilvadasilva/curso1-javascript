//construtores, funções, objetos
//funções de fábrica

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    //const celular = 

    return {
        //marcaCelular: marcaCelular,
        //tamanhoTela: tamanhoTela,
        //capacidadeBateria: capacidadeBateria,
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
    // return celular;
}

celular1 = criarCelular('zenfone', 5.5, 5000);
console.log(celular1)