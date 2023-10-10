/*
# Exercício 2
#### Dado o array:
let lista = new Array<Object> = [
{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

a) Crie uma função que retorne a bio do id passado
b) Crie uma função que retorne o name do id passado
c) Crie uma função que apague um item da lista a partir de um id passado
d) Crie uma função que altere a bio ou o name a partir de um id passado
e) Demonstre todas as funções com o paradigma funcional e com o imperativo
*/

import * as Funcional from './funcoesFuncionais'

interface Pessoa {
    id: number;
    name: string;
    bio: string;
}

let listaPessoas: Pessoa[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

//encontra o objeto Pessoa determinado pelo id passado à função
function obterBioImperativo(id: number): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);

    if(pessoa != null){
        return pessoa.bio;
    } else{
        return "Pessoa não encontrada."
    }
}

function obterNomeImperativo(id: number): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);

    if(pessoa != null){
        return pessoa.name;
    } else{
        return "Pessoa não encontrada."
    }
}

function removePessoaImperativo(id: number): string{
    const indexRemover = listaPessoas.findIndex(pessoa => pessoa.id === id);

    if(indexRemover !== -1){
        const pessoaRemovida = listaPessoas[indexRemover].name
        listaPessoas.slice(indexRemover, 1);
        return pessoaRemovida+" foi removido(a)."
    } else{
        return "Pessoa não encontrada."
    }
}

function alteraRegistroImperativo(id: number, campo: Funcional.campoAlteravel, novoTexto: string) {
    const indexAlterar = listaPessoas.findIndex(pessoa => pessoa.id === id);

    if(novoTexto === null)
        return "Texto inválido."

    if(campo === "nome"){
        listaPessoas[indexAlterar].name = novoTexto;
    } else if (campo === "bio"){
        listaPessoas[indexAlterar].bio = novoTexto;
    }

    return "Alteração feita com sucesso."
}


//Demonstra o uso das funções Imperativas
console.log(obterBioImperativo(2));
console.log(obterNomeImperativo(3));
console.log(removePessoaImperativo(1));
console.log(alteraRegistroImperativo(1, "bio", "sou a Ada"));
console.log(obterBioImperativo(1));

console.log("-------------------------------------")

//Demonstra o uso das funções Funcionais
console.log(Funcional.obterBio(2, listaPessoas));
console.log(Funcional.obterNome(3, listaPessoas));
console.log(Funcional.removePessoa(1, listaPessoas));
console.log(Funcional.alteraRegistro(1, "bio", "sou a Ada", listaPessoas));
console.log(Funcional.obterBio(1, listaPessoas));