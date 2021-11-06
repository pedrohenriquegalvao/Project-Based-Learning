let respostasUsuarios = JSON.parse(localStorage.getItem('respostasUsuarios')) || []; // na primeira vez na aplicação, esse item do localStorage n existe. Se for esse o caso, recebe um array vazio.
let usuario = [];   


function salvarRespostas() {
    let divRespostas = document.querySelector('div.container-respostas'); 
    divRespostas.innerHTML = '';
    usuario = [];

    var nome = document.querySelector('input#nome').value;
    usuario.push(nome);

    var idade = document.querySelector('input#idade').value;
    usuario.push(idade);

    var hobby = document.querySelector('input#hobby').value;
    usuario.push(hobby);

    var formacao = document.querySelector('input#formacao').value;
    usuario.push(formacao);

    var comunicativa = document.querySelector('input#comunicativa').value;
    usuario.push(comunicativa);

    var tecnologia = document.querySelector('input#tecnologia').value;
    usuario.push(tecnologia);

    var cursos = document.querySelector('input#cursos').value;
    usuario.push(cursos);
    
    respostasUsuarios.push(usuario);
    localStorage.setItem('respostasUsuarios', JSON.stringify(respostasUsuarios));

    
    document.getElementById('nome').value='';
    document.getElementById('idade').value='';
    document.getElementById('hobby').value='';
    document.getElementById('formacao').value='';
    document.getElementById('comunicativa').value='';
    document.getElementById('tecnologia').value='';
    document.getElementById('cursos').value='';
}

function excluirUsuarios() {
    let divRespostas = document.querySelector('div.container-respostas'); 
    var confirmaExcluir = confirm("Tem certeza que deseja excluir todos os usuários e suas respostas ao questionário?");
    if (confirmaExcluir == true) {
        alert("Informações excluídas com sucesso");
        localStorage.clear();
        respostasUsuarios = [];
        divRespostas.innerHTML = "";
    } else {
        alert("Ação cancelada")
    }
    
}

function mostrarUsuarios() {
    let divButtons = document.querySelector('div.container-buttons'); 
    divButtons.innerHTML += '<button onclick="ocultarUsuarios()" class="button-ocultar">Ocultar</button>';

    let divRespostas = document.querySelector('div.container-respostas'); 
    divRespostas.innerHTML = "";

    for (i = 0; i < respostasUsuarios.length; i++) {
        var conteudo = "";
        
        conteudo += '<div class="card-resposta-usuario">';
        conteudo += '<h2>Respostas do usuário ' + Number(i+1) + '</h2>' ;

        conteudo += '<div class="card-resposta-campos">';

        conteudo += '<p>Nome:' + respostasUsuarios[i][0] + '</p>' ;
        conteudo += '<p>Idade: ' + respostasUsuarios[i][1] + ' </p>';
        conteudo += '<p>Hobby: ' + respostasUsuarios[i][2] + ' </p>';
        conteudo += '<p>Formação: ' + respostasUsuarios[i][3] + ' </p>';
        conteudo += '<p>É uma pessoa comunicativa: ' + respostasUsuarios[i][4] + ' </p>';
        conteudo += '<p>Tem contato com tecnologia: ' + respostasUsuarios[i][5] + ' </p>';
        conteudo += '<p>Já utilizou algum site de cursos: ' + respostasUsuarios[i][6] + '</p>';

        conteudo += '</div>';

        conteudo += '</div>';
        divRespostas.innerHTML += conteudo;
    }

}

function ocultarUsuarios(){
    let divButtons = document.querySelector('div.container-buttons'); 
    let buttonOcultar = document.querySelector('button.button-ocultar');

    divButtons.removeChild(buttonOcultar);

    let divRespostas = document.querySelector('div.container-respostas'); 
    divRespostas.innerHTML = "";
}