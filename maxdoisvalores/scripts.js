// função q usa dois números e retorna o maior entre eles

let valorMaior = max(5, 9);
console.log(valorMaior)

function max(numero1, numero2) {
    if (numero1 > numero2)
        return numero1;
    else return numero2

    //ou
    // return numero1>numero2 ? numero1: numero2;
}