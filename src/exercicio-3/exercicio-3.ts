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
function obterBio(id: number, listaPessoas: Pessoa[]): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.bio : "Pessoa não encontrada."
}

function obterNome(id: number, listaPessoas: Pessoa[]): string{
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.name : "Pessoa não encontrada."
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

function alteraRegistroImperativo(id: number, campo: string, novoTexto: string): string {
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

//manipula o elemento da lista ordenada na página HTML, adicionando os objetos Pessoas
function exibirRegistros(lista: Pessoa[]){
    const listaExibicao = document.getElementById("lista-pessoas") as HTMLUListElement;

    if(listaExibicao){
        listaExibicao.innerHTML = "";
        lista.forEach((item) => {
            const li = document.createElement("li");

            //formata os objetos Pessoa da lista para serem exibidos na página HTML
            const idElement = document.createElement("strong")
            idElement.textContent = item.id.toString();

            const nomeElement = document.createElement("strong")
            nomeElement.textContent = item.name;

            const bioElement = document.createElement("span")
            bioElement.textContent = item.bio;

            const divElement = document.createElement("div")

            divElement.appendChild(idElement);
            divElement.appendChild(document.createElement("br"))
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

    //obtem os elementos formulários
    const formConsulta = document.getElementById("formEnviarID") as HTMLFormElement;
    const formAlteracao = document.getElementById("formAlteracao") as HTMLFormElement;

    //obtem os elementos botoes
    const botao1 = document.getElementById("mostrarNome") as HTMLButtonElement;
    const botao2 = document.getElementById("mostrarBio") as HTMLButtonElement;
    const botao3 = document.getElementById("removerRegistro") as HTMLButtonElement;

    //obtem os elementos div de resposta
    const respDivForm1 =  document.getElementById("respForm1") as HTMLDivElement;
    const respDivForm2 =  document.getElementById("respForm2") as HTMLDivElement;

    let resp: string;

    //formulário que realiza consulta de nome, bio e remoção
    formConsulta.addEventListener('submit', function(event){
        event.preventDefault();

        //obtem o ID inserido no forms
        const formData = new FormData(formConsulta);
        const inputID: string = formData.get("ID") as string;
        const id: number = parseInt(inputID);

        if(event.submitter == botao1){
            resp = obterNome(id, listaPessoas);
            console.log(resp);
            respDivForm1.textContent = resp;
        } else if(event.submitter == botao2){
            resp = obterBio(id, listaPessoas);
            console.log(obterBio(id, listaPessoas));
            respDivForm1.textContent = resp;
        } else if(event.submitter == botao3){
            resp = removePessoaImperativo(id);
            console.log(resp);
            respDivForm1.textContent = resp;
        }
        
        //mantém a lista exibida atualizada
        exibirRegistros(listaPessoas);
    });

    //formulário que realiza alteração em um item na lista
    formAlteracao.addEventListener('submit', function(event){
        event.preventDefault();

        //obtem o ID inserido no forms
        const formData = new FormData(formAlteracao);
        const inputID: string = formData.get("ID") as string;
        const id: number = parseInt(inputID);

        //obtem o campo a ser modificado e o novo conteudo
        const campo: string = formData.get("campo") as string;
        const novoConteudo: string = formData.get("novoconteudo") as string;

        resp = alteraRegistroImperativo(id, campo, novoConteudo);
        console.log(resp);
        respDivForm2.textContent = resp;

        //mantém a lista exibida atualizada
        exibirRegistros(listaPessoas);
    });

});