const listaDeCrusch = [
    'Tom Cruise',
    'Carlos Daniel',
    'Zezinho',
    'Zezão'
]

const somaCrush = (n1, n2) => n1 + n2

const encontraCrush = nome => {
    try {
        validacao(nome)
        const crushEncontrado = listaDeCrusch.find(crush => crush === nome)
        return crushEncontrado ? crushEncontrado :  'Crush não encontrado'
    }catch (erro) {
        return erro
    }   
}

const vaidacao = nome => {
    if(!nome) throw 'Campo nome está vazio'
    if(typeof nome != 'string') throw 'Tipo inválido'    
}

module.exports = {
    somaCrush,
    encontraCrush
}