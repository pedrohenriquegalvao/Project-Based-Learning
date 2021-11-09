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
    var buttonSalvar = document.querySelector('button#buttonSalvar');
    if (buttonSalvar == null) {
        divEditar.innerHTML += "<button id='buttonSalvar' onclick='salvar()'>Salvar</button>";
    } 

}

function salvar(){
    var divEditar = document.querySelector("div.divEditar");
    var buttonSalvar = document.querySelector('button#buttonSalvar');
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

function notificar(){
    alert("Não há nenhuma notificação no momento. Aproveite seu dia! :)")
}

function cancelarAssinatura(){
    alert("Você não possui nenhuma assinatura para cancelar no momento.")
}