// Velocidade máxima de até 70
// a cada 5km acima do limite voce ganha 1 ponto na carteira
// usar Math.Floor()
// caso pontos maior que 12: carteira suspendidade

verificarVelocidade(85);



function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) {
        console.log('Velocidade dentro do permitido');
    } else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if (pontos >= 12)
            console.log('Carteira suspensa')
        else
            console.log('Pontos', pontos)
    }

}