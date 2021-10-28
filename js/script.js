var listaCursos = [[0,'correct.png','mensal.png', false], [1,'correct.png', 'trimestral.png', false],
 [2,'correct.png', 'semestral.png', false], [3,'correct.png', 'anual.png', false]];

var cursosAcessados = []

window.onload = function(){

    montarCardProdutos();
    if(JSON.parse(window.localStorage.getItem('cursosAcessados')) != undefined)
    {
        cursosAcessados = JSON.parse(window.localStorage.getItem('cursosAcessados'));
    }
    else
    {
        cursosAcessados = [];
    }

}

function montarCardProdutos(){

    document.getElementById("div-pagina").innerHTML = "";

    for(var i = 0; i < listaCursos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="img/'+listaCursos[i][2]+'" />';
        conteudo += '<div class="div-yellow-line">';
        conteudo += '</div>';
        conteudo += '<div class="div-card-img-label">';
        conteudo += '<img src="img/'+listaCursos[i][1]+'" />';
        conteudo += '<label>Acesso a todos os cursos.</label>'
        conteudo += '</div>';


        if(listaCursos[i][3] == false)
        {
            conteudo += '<div class="div-card-acessar" onclick="acessar('+listaCursos[i][0]+')" >';
            conteudo += 'Matricule-se';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-card-acessar curso-acessado" >';
            conteudo += 'Acessado';
            conteudo += '</div>';
        }

        conteudo += '</div>';

        document.getElementById("div-pagina").innerHTML += conteudo;
    }

}

function acessar(id){

    listaCursos[id][3] = true;

    cursosAcessados.push(listaCursos[id]);

    window.localStorage.setItem("cursosAcessados", JSON.stringify(cursosAcessados));

    montarCardProdutos();
}