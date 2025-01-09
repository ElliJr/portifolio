const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;

// Configurar tamanho do canvas
canvas.width = width;
canvas.height = height;

// Atualizar tamanho do canvas quando a janela for redimensionada
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

// Função para desenhar a linha ondulada gradualmente
function drawWave(scrollOffset) {
    ctx.clearRect(0, 0, width, height); // Limpa o canvas

    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;

    const amplitude = 50; // Altura da onda
    const frequency = 0.01; // Frequência da onda
    const lineX = width / 2; // Posição fixa da linha no centro

    // O comprimento da linha depende do scroll
    const maxY = Math.min(scrollOffset, height); // Limitar ao tamanho da tela

    for (let y = 0; y < maxY; y++) {
        const waveX = Math.sin((y + scrollOffset) * frequency) * amplitude;
        ctx.lineTo(lineX + waveX, y);
    }

    ctx.stroke();
    ctx.closePath();
}

// Atualizar a onda com base no scroll
function updateWave() {
    const scrollOffset = window.scrollY; // Obter posição do scroll
    drawWave(scrollOffset); // Redesenhar a onda
}

// Listener de scroll
window.addEventListener('scroll', updateWave);

// Desenhar a onda inicialmente
drawWave(0);
