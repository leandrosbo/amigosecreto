let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
  const nomeAmigo = document.getElementById('amigo').value;

  if (nomeAmigo.trim() !== '') {
    amigos.push(nomeAmigo); // Adiciona o nome ao array de amigos

    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = nomeAmigo;
    document.getElementById('listaAmigos').appendChild(novoAmigo);

    document.getElementById('amigo').value = '';
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Nenhum amigo foi adicionado para o sorteio.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  // Adiciona o amigo sorteado à lista de resultados
  const resultado = document.createElement('li');
  resultado.textContent = amigoSorteado;
  document.getElementById('resultado').appendChild(resultado);
}