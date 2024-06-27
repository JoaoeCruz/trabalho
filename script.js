// Dados para a linha do tempo
const timelineData = [
    { year: "1943", event: "Primeiro teste do Colossus, o primeiro computador digital eletrônico" },
    { year: "1945", event: "Proposta de Von Neumann para a arquitetura de computadores" },
    { year: "1951", event: "UNIVAC I, o primeiro computador comercialmente disponível nos EUA" },
    { year: "1969", event: "ARPANET, precursora da Internet, estabelecida" },
    { year: "1976", event: "Fundação da Apple Computer por Steve Jobs e Steve Wozniak" },
    { year: "1989", event: "Proposta inicial da World Wide Web por Tim Berners-Lee" },
    { year: "1991", event: "Lançamento do Linux Kernel por Linus Torvalds" },
    { year: "2007", event: "Lançamento do primeiro iPhone, marcando o início da era dos smartphones" }
];

// Dados dos vídeos do YouTube
const videoData = [
    { id: "ilwewVTh1R4", title: "História dos Primeiros Computadores", description: "Vídeo sobre a história dos primeiros computadores" },
    { id: "S7d371WsIt0", title: "Evolução da Internet", description: "Vídeo sobre a história da internet" },
    { id: "zIZ-FmmEWyw", title: "Alan Turing e o Teste de Turing", description: "Vídeo sobre o teste de Turing" }
];

// Função para gerar a linha do tempo dinamicamente
function renderTimeline() {
    const timelineElement = document.getElementById('timeline');
    const timelineHTML = timelineData.map(item => `
        <div class="timeline-event">
            <h3>${item.year}</h3>
            <p>${item.event}</p>
        </div>
    `).join('');

    timelineElement.innerHTML = `<div class="container">${timelineHTML}</div>`;
}

// Função para gerar os vídeos do YouTube dinamicamente
function renderVideos() {
    const videoGallery = document.getElementById('video-gallery');
    const videosHTML = videoData.map(video => `
        <div class="video-item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        </div>
    `).join('');

    videoGallery.innerHTML = videosHTML;
}

// Dados dos filmes relacionados à computação
const filmesData = [
    { titulo: "The Imitation Game", descricao: "Sobre Alan Turing e sua equipe que quebraram o código Enigma na Segunda Guerra Mundial." },
    { titulo: "Pirates of Silicon Valley", descricao: "Sobre a história da rivalidade entre Steve Jobs (Apple) e Bill Gates (Microsoft)." },
    { titulo: "The Social Network", descricao: "Sobre a criação do Facebook por Mark Zuckerberg e seus colegas de Harvard." }
];

// Função para gerar a lista de filmes dinamicamente
function renderFilmes() {
    const filmesListElement = document.getElementById('filmes-lista');
    const filmesHTML = filmesData.map(filme => `
        <li>
            <a href="#" title="${filme.descricao}">${filme.titulo}</a>
        </li>
    `).join('');

    filmesListElement.innerHTML = filmesHTML;
}

// Evento de carregamento da página
window.onload = function() {
    renderTimeline();
    renderVideos();
    renderFilmes();
};
