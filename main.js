let nomePessoas = [];

function enviarNomes(){
    let nomeConvidado = document.getElementById("nomes").value;
    nomePessoas.push(nomeConvidado);
    console.log(nomePessoas);
    document.getElementById("mostrarNomes").innerHTML = nomePessoas.toString();
}

function nomesLista() {
    let i = nomePessoas.join("<br>");
    document.getElementById("nomesEmLista").innerHTML = i.toString();
}

function emOrdemAlfabetica(){
    nomePessoas.sort();
    let j = nomePessoas.join("<br>");
    document.getElementById("ordemAlfabetica").innerHTML=j.toString();
}
function pesquisarNome(){
    let s = document.getElementById("pesquisarNome").value;
    var encontrado = 0;
    var contador;
    for(contador = 0; contador <nomePessoas.length; contador ++){
        if(s==nomePessoas[contador]){
            encontrado = encontrado + 1;
        }
    }
    document.getElementById("nomesLocalizados").innerHTML="Nome encontrado" + encontrado + "vez(es)";
}