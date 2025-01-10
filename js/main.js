//     // Seleciona o elemento que seguirá o mouse
// const follower = document.getElementById('follower');

// // Adiciona um listener ao evento de movimento do mouse
// document.addEventListener('mousemove', (event) => {
//   // Captura as coordenadas do ponteiro
//   const x = event.clientX;
//   const y = event.clientY;

//   // Atualiza a posição do elemento
//   follower.style.left = `${x}px`;
//   follower.style.top = `${y}px`;
// });


document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 1; // Começamos no índice 1, pois o primeiro item é um clone
    const items = Array.from(carousel.children);
    const totalItems = items.length;

    // Clonando o primeiro e o último item
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[items.length - 1].cloneNode(true);

    // Adicionando os clones ao início e fim do carrossel
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, items[0]);

    const newTotalItems = carousel.children.length;

    // Função de movimento automático
    function autoScroll() {
        if (currentIndex === newTotalItems - 1) {
            // Se for o último item (clone do primeiro), vamos voltar para o item original
            carousel.style.transition = "none"; // Desativar transição para a troca imediata
            currentIndex = 1; // Ir para o primeiro item original
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out"; // Reativar transição
            }, 50);
        } else {
            currentIndex++;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    // Chamando a função a cada 3 segundos
    setInterval(autoScroll, 3000);

    // Eventos de navegação manual
    nextBtn.addEventListener('click', () => {
        if (currentIndex === newTotalItems - 1) {
            carousel.style.transition = "none";
            currentIndex = 1;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out";
            }, 50);
        } else {
            currentIndex++;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex === 0) {
            carousel.style.transition = "none";
            currentIndex = newTotalItems - 2;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out";
            }, 50);
        } else {
            currentIndex--;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });
});
