
export interface Pessoa {
    id: number;
    name: string;
    bio: string;
}

export type campoAlteravel = "nome" | "bio";

//encontra o objeto Pessoa determinado pelo id passado à função
export function obterBio(id: number, listaPessoas: Pessoa[]): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.bio : "Pessoa não encontrada."
}

export function obterNome(id: number, listaPessoas: Pessoa[]): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.name : "Pessoa não encontrada."
}

export function removePessoa(id: number, listaPessoas: Pessoa[]): string{
    const pessoaRemover = listaPessoas.find(pessoa => pessoa.id === id);

    if(pessoaRemover){
        listaPessoas = listaPessoas.filter(pessoa => pessoa.id !== id);
        return pessoaRemover.name+" foi removido(a)."
    } else{
        return "Pessoa não encontrada."
    }
}

export function alteraRegistro(id: number, campo: campoAlteravel, novoTexto: string, listaPessoas: Pessoa[]) {
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
