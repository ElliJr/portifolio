      // Função para mostrar a imagem com a rolagem
      window.onscroll = function () {
        const imgContainer = document.getElementById("imgContainer");

        // Verifica se a página foi rolada 200px ou mais
        if (window.scrollY > 660) {
            imgContainer.style.display = "block";
        } else {
            imgContainer.style.display = "none";
        }
    };

    // Seleciona o elemento que seguirá o mouse
const follower = document.getElementById('follower');

// Adiciona um listener ao evento de movimento do mouse
document.addEventListener('mousemove', (event) => {
  // Captura as coordenadas do ponteiro
  const x = event.clientX;
  const y = event.clientY;

  // Atualiza a posição do elemento
  follower.style.left = `${x}px`;
  follower.style.top = `${y}px`;
});
