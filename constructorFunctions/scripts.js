// Função de construtor

function criarCelular() {

}

//pascal case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,

        this.ligar = function() {
            console.log("Ligar...")
        }


}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular)