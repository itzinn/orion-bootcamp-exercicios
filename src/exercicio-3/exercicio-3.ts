interface Pessoa {
    id: number;
    name: string;
    bio: string;
}

//encontra o objeto Pessoa determinado pelo id passado à função
function obterBio(id: number, listaPessoas: Pessoa[]): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.bio : "Pessoa não encontrada."
}

function obterNome(id: number, listaPessoas: Pessoa[]): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.name : "Pessoa não encontrada."
}

function removePessoa(id: number, listaPessoas: Pessoa[]): string{
    const pessoaRemover = listaPessoas.find(pessoa => pessoa.id === id);

    if(pessoaRemover){
        listaPessoas = listaPessoas.filter(pessoa => pessoa.id !== id);
        return pessoaRemover.name+" foi removido(a)."
    } else{
        return "Pessoa não encontrada."
    }
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

function alteraRegistro(id: number, campo: string, novoTexto: string, listaPessoas: Pessoa[]) {
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

function alteraRegistroImperativo(id: number, campo: string, novoTexto: string) {
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
    } else{
        return "Campo inválido."
    }

    return "Alteração feita com sucesso."
}

let listaPessoas: Pessoa[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

//manipula o elemento da lista ordenada na página HTML, adicionando os objetos Pessoas
function exibirRegistros(lista: Pessoa[]){
    const listaExibicao = document.getElementById("lista-pessoas");

    if(listaExibicao){
        listaExibicao.innerHTML = "";
        lista.forEach((item) => {
            const li = document.createElement("li");

            //formata os objetos Pessoa da lista para serem exibidos na página HTML
            const nomeElement = document.createElement("strong")
            nomeElement.textContent = item.name;

            const bioElement = document.createElement("span")
            bioElement.textContent = item.bio;

            const divElement = document.createElement("div")

            divElement.appendChild(nomeElement);
            divElement.appendChild(document.createElement("br"))
            divElement.appendChild(bioElement);

            //termina de criar um item da lista exibida
            li.appendChild(divElement);
            li.appendChild(document.createElement("br"))

            listaExibicao.appendChild(li);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    exibirRegistros(listaPessoas);

    const form = document.getElementById("formEnviarID") as HTMLFormElement;
    const form2 = document.getElementById("formAlteracao") as HTMLFormElement;

    const botao1 = document.getElementById("mostrarNome") as HTMLButtonElement;
    const botao2 = document.getElementById("mostrarBio") as HTMLButtonElement;
    const botao3 = document.getElementById("removerRegistro") as HTMLButtonElement;

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(form);
        const inputID = formData.get("ID") as string;
        const id = parseInt(inputID);

        if(event.submitter == botao1){
            console.log(obterNome(id, listaPessoas));
        } else if(event.submitter == botao2){
            console.log(obterBio(id, listaPessoas));
        } else if(event.submitter == botao3){
            console.log(removePessoaImperativo(id));
        }
        
        //mantém a lista exibida atualizada
        exibirRegistros(listaPessoas);
    });

    form2.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(form2);
        const inputID = formData.get("ID") as string;
        const id = parseInt(inputID);

        const campo = formData.get("campo") as string;
        const novoConteudo = formData.get("novoconteudo") as string;
        console.log(alteraRegistroImperativo(id, campo, novoConteudo));
        
        //mantém a lista exibida atualizada
        exibirRegistros(listaPessoas);
    });

});