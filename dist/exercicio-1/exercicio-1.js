"use strict";
/*
# Exercício 1
#### Criar uma função que retorne a quantidade de vogais da palavra passada.
a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
*/
function contaVogais(palavra) {
    const vogais = palavra.toLowerCase().match(/[aeiouáéíóúãõâêîôûäëïöü]/g);
    let qtdVogais = 0;
    if (vogais !== null) {
        qtdVogais = vogais.length;
    }
    return qtdVogais;
}
// exemplo de uso item A
const palavraTesteA = "amendobobo";
const resultadoTesteA = contaVogais(palavraTesteA);
console.log("A palavra '" + palavraTesteA + "' possui " + resultadoTesteA + " vogais.");
//exemplo de uso item B
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const respDiv = document.getElementById("resp");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const palavraInserida = document.getElementById("palavra");
        const palavraTesteB = palavraInserida.value;
        const resultadoTesteB = contaVogais(palavraTesteB);
        const mensagemResultado = "A palavra '" + palavraTesteB + "' possui " + resultadoTesteB + " vogais.";
        console.log(mensagemResultado);
        respDiv.textContent = mensagemResultado;
    });
});
//# sourceMappingURL=exercicio-1.js.map