// Criar método para ler propriedade de um objeto
// exibir somente as propriedade do tipo string que 
// estão nesse objeto


const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'John',
    personagem: 'Thor'
}

exibirPropriedades(filme)

function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}