btn = document.querySelector('#pesquisar');

btn.addEventListener("click", function(){ 

    let filme = document.querySelector('#filme').value;
    let filmeTratado = filme.replace(/\s+/g, '+').toLowerCase();
    let url = `http://www.omdbapi.com/?t=${filmeTratado}&apikey=aa69a16`;

    fetch(url).then(res=>res.json())
    .then(function(dados){
        let resultado = document.getElementById('resultado')

        if(dados.erro){
            resultado.innerHTML = "Erro, tente mais tarde."
        }else if(dados.Title == undefined){
            resultado.innerHTML = "<div style='color: red'>Filme não encontrado. </div>"
        }else{
            resultado.innerHTML = "<img src=" + dados.Poster + "></img>"+
            "<p>"+ "<p>" +
            "<b>Titulo:</b> " + dados.Title + 
            "<p>" +
            "<b>Ano do filme:</b> " + dados.Year + 
            "<p>" +
            "<b>Genero:</b> " + dados.Genre +
            "<p>" +
            "<b>Pais:</b> " + dados.Country;
        }
    })
})