const divAtletas = document.getElementById('atletas');
const requisicaoAtletas = {};

requisicaoAtletas.getAtletas = () => {
  return fetch('./assets/dados.json')
    .then((response) => response.json())
    .then((dados) => dados.atletas);
};

function convertListToLi(atleta) {
  return `
    <ol clas="atleta">
        <li class="nomeAtleta">Nome: ${atleta.nome}</li>
        <li class="NotasObtidas">Notas: ${atleta.notas.sort()}</li>
        <li class="mediaValida">Média Válida: </li>
    </ol>
      `;
}

requisicaoAtletas.getAtletas().then((atletas = []) => {
  divAtletas.innerHTML += atletas.map(convertListToLi).join('');
});
