const playlists = [
  {
    id: 'gorillaz',
    nome: 'Gorillaz Vibes',
    imagem: 'assets/imagens/gorillaz-cover.jpg',
    faixas: [
      { nome: 'Gorillaz - DARE', arquivo: 'assets/music/gorillaz-DARE.mp3' },
      { nome: 'Gorillaz', arquivo: 'assets/music/gorillaz.mp3' },
    ]
  },
  {
    id: 'ukgarage',
    nome: 'UK Garage',
    imagem: 'assets/imagens/uk-garage-cover.jpg',
    faixas: [
      { nome: 'Back to Basics', arquivo: 'assets/music/back-to-basics.mp3' },
      { nome: 'Da Fonk', arquivo: 'assets/music/da-fonk.mp3' },
    ]
  }
];

function renderHome() {
  const main = document.querySelector('.main');
  main.innerHTML = `
    <div class="header">
      <h1>Playlists</h1>
      <button class="btn-create">+ Criar nova playlist</button>
    </div>
    <div class="playlists">
      ${playlists.map(p => `
        <div class="card" onclick="abrirPlaylist('${p.id}')">
          <img src="${p.imagem}" alt="${p.nome}">
          <p>${p.nome}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function abrirPlaylist(id) {
  const playlist = playlists.find(p => p.id === id);
  const main = document.querySelector('.main');
  main.innerHTML = `
    <div class="header">
      <h1>${playlist.nome}</h1>
    </div>
    <div class="faixas">
      ${playlist.faixas.map(f => `
        <div class="track" onclick="tocarMusica('${f.arquivo}', '${f.nome}')">${f.nome}</div>
      `).join('')}
    </div>
  `;
}

function tocarMusica(arquivo, nome) {
  const audio = document.getElementById('audio');
  const info = document.getElementById('info-musica');
  audio.src = arquivo;
  audio.play();
  info.textContent = `Tocando: ${nome}`;
}

document.addEventListener('DOMContentLoaded', renderHome);
