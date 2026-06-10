// ARRAY DE STRINGS
let musicas = [
    "Feel Special",
    "What Is Love?",
    "Fancy"
];

function realizarLogin() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let erro = document.getElementById("erroLogin");

    erro.textContent = "";

    if(usuario === "" || senha === ""){
        erro.textContent = "Preencha usuário e senha.";
        return;
    }

    if(
        usuario === "aluno" &&
        senha === "fiap2025"
    ){

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("crudPage").style.display = "block";

        renderizarLista();
    }
    else{
        erro.textContent = "Usuário ou senha inválidos.";
    }
}

function adicionarFinal(){

    let campo =
    document.getElementById("novaMusica");

    let valor =
    campo.value.trim();

    let erro =
    document.getElementById("erroMusica");

    erro.textContent = "";

    if(valor === ""){
        erro.textContent =
        "Digite o nome da música.";
        return;
    }

    musicas.push(valor);

    campo.value = "";

    renderizarLista();
}

function adicionarInicio(){

    let campo =
    document.getElementById("novaMusica");

    let valor =
    campo.value.trim();

    let erro =
    document.getElementById("erroMusica");

    erro.textContent = "";

    if(valor === ""){
        erro.textContent =
        "Digite o nome da música.";
        return;
    }

    musicas.unshift(valor);

    campo.value = "";

    renderizarLista();
}

function editarMusica(indice){

    let musicaAtual =
    musicas[indice];

    let novoNome =
    prompt(
        "Editar música:",
        musicaAtual
    );

    if(
        novoNome === null ||
        novoNome.trim() === ""
    ){
        return;
    }

    musicas[indice] =
    novoNome.trim();

    renderizarLista();
}

function removerMusica(indice){

    musicas.splice(indice, 1);

    renderizarLista();
}

function renderizarLista(){

    let lista =
    document.getElementById("listaMusicas");

    lista.innerHTML = "";

    for(
        let i = 0;
        i < musicas.length;
        i++
    ){

        lista.innerHTML += `
            <li>
                <span>${musicas[i]}</span>

                <div>

                    <button
                        class="btn-edit"
                        onclick="editarMusica(${i})">
                        Editar
                    </button>

                    <button
                        class="btn-delete"
                        onclick="removerMusica(${i})">
                        Remover
                    </button>

                </div>
            </li>
        `;
    }
}