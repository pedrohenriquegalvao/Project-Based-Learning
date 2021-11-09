function editar(){

    var nomeUsuario = document.querySelector("input#nome-usuario");
    var nome = document.querySelector("input#nome");
    var email = document.querySelector("input#email");
    var senha = document.querySelector("input#senha");

    nomeUsuario.disabled = false;
    nome.disabled = false;
    email.disabled = false;
    senha.disabled = false;

    divEditar = document.querySelector("div.divEditar");
    divEditar.innerHTML += "<button id='buttonSalvar' onclick='salvar()'>Salvar</button>";

}

function salvar(){
    divEditar = document.querySelector("div.divEditar");
    let buttonSalvar = document.querySelector('button#buttonSalvar');
    divEditar.removeChild(buttonSalvar);
    var nomeUsuario = document.querySelector("input#nome-usuario");
    var nome = document.querySelector("input#nome");
    var email = document.querySelector("input#email");
    var senha = document.querySelector("input#senha");
    nomeUsuario.disabled = true;
    nome.disabled = true;
    email.disabled = true;
    senha.disabled = true;

}