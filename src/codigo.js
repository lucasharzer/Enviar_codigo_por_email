// Gerar um número aleatório de 4 digitos

function gerarCodigo() {
    // (Math.random() * max) + minimo

    const numero = Math.floor(Math.random() * 9999) + 1000;    
    return numero;
}

module.exports = gerarCodigo;