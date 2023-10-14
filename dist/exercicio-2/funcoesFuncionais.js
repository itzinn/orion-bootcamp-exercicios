"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alteraRegistro = exports.removePessoa = exports.obterNome = exports.obterBio = void 0;
//encontra o objeto Pessoa determinado pelo id passado à função
function obterBio(id, listaPessoas) {
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.bio : "Pessoa não encontrada.";
}
exports.obterBio = obterBio;
function obterNome(id, listaPessoas) {
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.name : "Pessoa não encontrada.";
}
exports.obterNome = obterNome;
function removePessoa(id, listaPessoas) {
    const pessoaRemover = listaPessoas.find(pessoa => pessoa.id === id);
    if (pessoaRemover) {
        listaPessoas = listaPessoas.filter(pessoa => pessoa.id !== id);
        console.log(pessoaRemover.name + " foi removido(a).");
    }
    else {
        console.log("Pessoa não encontrada.");
    }
    return listaPessoas;
}
exports.removePessoa = removePessoa;
function alteraRegistro(id, campo, novoTexto, listaPessoas) {
    const indexAlterar = listaPessoas.findIndex(pessoa => pessoa.id === id);
    if (novoTexto === null)
        console.log("Texto inválido.");
    if (indexAlterar !== -1) {
        if (campo === "nome") {
            listaPessoas[indexAlterar].name = novoTexto;
        }
        else if (campo === "bio") {
            listaPessoas[indexAlterar].bio = novoTexto;
        }
        console.log("Alteração feita com sucesso.");
    }
    return listaPessoas;
}
exports.alteraRegistro = alteraRegistro;
//# sourceMappingURL=funcoesFuncionais.js.map