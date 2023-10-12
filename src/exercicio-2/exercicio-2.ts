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

    for(const pessoa of listaPessoas){
        if(pessoa.id === id){
            return pessoa.bio;
        }
    }

    return "Pessoa não encontrada."

}

function obterNomeImperativo(id: number): string{

    for(const pessoa of listaPessoas){
        if(pessoa.id === id){
            return pessoa.name;
        }
    }

    return "Pessoa não encontrada."
}

function removePessoaImperativo(id: number): string{
    let indexRemover = -1;

    //encontra o index do objeto especificado pelo ID
    for(let i=0; i<listaPessoas.length; i++){
        if(listaPessoas[i].id === id){
            indexRemover = i;
            break;
        }
    }

    //remove o objeto do index encontrado
    if(indexRemover !== -1){
        const pessoaRemovida = listaPessoas[indexRemover].name
        listaPessoas.splice(indexRemover, 1);
        return pessoaRemovida+" foi removido(a)."
    } else{
        return "Pessoa não encontrada."
    }
}

function alteraRegistroImperativo(id: number, campo: Funcional.campoAlteravel, novoTexto: string) {
    let indexAlterar = -1;

    //encontra o index do objeto especificado pelo ID
    for(let i=0; i<listaPessoas.length; i++){
        if(listaPessoas[i].id === id){
            indexAlterar = i;
            break;
        }
    }

    if(novoTexto === null)
        return "Texto inválido."

    //altera o objeto do index encontrado
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
