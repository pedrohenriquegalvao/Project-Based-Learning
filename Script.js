let respostasUsuarios = [];
let usuario = [];

function salvarRespostas() {
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

    localStorage.setItem('respostasUsuarios', respostasUsuarios);

    var containerForum = document.querySelector('div.container-forum');
    containerForum.innerHTML += nome;
    

}