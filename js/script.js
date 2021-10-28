var listaCursos = [[0,'Nome do curso','imagemTeste.png','Descrição do curso', false], [1,'Nome do curso','imagemTeste.png','Descrição do curso', false],
 [2,'Nome do curso','imagemTeste.png','Descrição do curso', false], [3,'Nome do curso','imagemTeste.png','Descrição do curso', false]];

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
        conteudo += '<div class="div-yellow-line">';
        conteudo += '</div>'
        conteudo += '<div class="div-nome">';
        conteudo += '<label>'+listaCursos[i][1]+'</label>'
        conteudo += '</div>'
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="img/'+listaCursos[i][2]+'" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-label">';
        conteudo += '<label>'+listaCursos[i][3]+'</label>'
        conteudo += '</div>';


        if(listaCursos[i][3] == false)
        {
            conteudo += '<div class="div-card-acessar" onclick="acessar('+listaCursos[i][0]+')" >';
            conteudo += 'Iniciar curso';
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