/*
# Exercício 1
#### Criar uma função que retorne a quantidade de vogais da palavra passada.
a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
*/

function contaVogais(palavra: string): number {

    const palavraMin = palavra.toLowerCase();
    const vogais = "aeiou";

    let qtdVogais: number = 0;

    //itera sobre cada letra da palavra e confere se é vogal, se for aumenta o contador
    for (let i=0; i < palavra.length; i++){
        const letra = palavraMin[i];
        if(vogais.includes(letra)){
            qtdVogais++;
        }
    }

    return qtdVogais;
}

const palavraTeste = "amendobobo"
const resultadoTeste: number = contaVogais(palavraTeste)
console.log("A palavra '"+palavraTeste+"' possui "+resultadoTeste+" vogais.")