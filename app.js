let nomesAmigos = [];

let adicionar = document.getElementById('amigo');
adicionar.addEventListener('keypress', function(event){
    if (event.key == 'Enter'){
        adicionarAmigo();
    }
})

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome == ''){
        alert('Por favor, insira um nome.')
    } else {
        nomesAmigos.push(nome);
        percorrerLista();
        limparCampo();
    }
}

function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = '';
}

function percorrerLista(){
    let contador = nomesAmigos.length -1;
    let newEl = document.createElement('li');
    let newText = document.createTextNode(nomesAmigos[contador]);
    newEl.appendChild(newText);
    let lista = document.getElementById('listaAmigos');
    lista.appendChild(newEl);
}

function sortearAmigo(){
    if (nomesAmigos.length > 0){
        let indice = parseInt(Math.random() * nomesAmigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = nomesAmigos[indice];
    } else {
        alert('Adicione amigos antes de sortear.');
    }
}