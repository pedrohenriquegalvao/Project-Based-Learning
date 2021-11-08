var listaCursos = [[0,'Nome do curso','imagemTeste.png','Descrição do curso'], [1,'Nome do curso','imagemTeste.png','Descrição do curso'],
 [2,'Nome do curso','imagemTeste.png','Descrição do curso'], [3,'Nome do curso','imagemTeste.png','Descrição do curso'],
 [4,'Nome do curso','imagemTeste.png','Descrição do curso'], [5,'Nome do curso','imagemTeste.png','Descrição do curso'],
 [6,'Nome do curso','imagemTeste.png','Descrição do curso'], [7,'Nome do curso','imagemTeste.png','Descrição do curso'],
 [8,'Nome do curso','imagemTeste.png','Descrição do curso'], [9,'Nome do curso','imagemTeste.png','Descrição do curso'],
 [10,'Nome do curso','imagemTeste.png','Descrição do curso'], [11,'Nome do curso','imagemTeste.png','Descrição do curso'],
 [12,'Nome do curso','imagemTeste.png','Descrição do curso'], [13,'Nome do curso','imagemTeste.png','Descrição do curso'],
 [14,'Nome do curso','imagemTeste.png','Descrição do curso']];

var cursosAcessados = []

window.onload = function(){

    montarCardProdutos();

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
        conteudo += '<img src="../img/'+listaCursos[i][2]+'" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-label">';
        conteudo += '<label>'+listaCursos[i][3]+'</label>'
        conteudo += '</div>';

        conteudo += '<div class="div-card-acessar" onclick="" >';
        conteudo += 'Iniciar curso';
        conteudo += '</div>';

        conteudo += '</div>';

        document.getElementById("div-pagina").innerHTML += conteudo;
    }

}