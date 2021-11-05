let respostasUsuarios = JSON.parse(localStorage.getItem('respostasUsuarios')) || []; // na primeira vez na aplicação, esse item do localStorage n existe. Se for esse o caso, recebe um array vazio.
let usuario = [];   

function salvarRespostas() {

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

    var containerForum = document.querySelector('div.container-forum');
    containerForum.innerHTML += nome;
    
}

function removerUsuarios() {
    const index = respostasUsuarios.indexOf(usuario);
    localStorage.removeItem();
    alert('n removi')
       
}