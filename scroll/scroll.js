// Seleciona todos os elementos com a classe 'content'
const elements = document.querySelectorAll('.content');

// Função para revelar os elementos no scroll
const revealOnScroll = () => {
  const windowHeight = window.innerHeight; // Altura da janela
  const revealPoint = 150; // Ponto em que o elemento será revelado

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top; // Posição do elemento em relação ao topo da janela

    // Se o elemento estiver dentro da área visível + revealPoint, adiciona a classe 'show'
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('show');
    }
  });
};

// Escuta o evento de scroll e executa a função
window.addEventListener('scroll', revealOnScroll);

// Executa a função ao carregar a página (opcional)
revealOnScroll();
