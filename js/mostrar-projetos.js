// ESTE É O SCRIPT ATUALIZADO
    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('toggleProjectsBtn');
        const projectsContainer = document.querySelector('.flex-projects');

        // Opcional: Para começar com os projetos escondidos e com a animação suave
        // projectsContainer.classList.add('hidden'); 
        // toggleButton.textContent = 'Mostrar todos os projetos';

        toggleButton.addEventListener('click', function() {
            if (projectsContainer.classList.contains('hidden')) {
                // Se está escondido, remove a classe 'hidden' para mostrar com transição
                projectsContainer.classList.remove('hidden');
                toggleButton.textContent = 'Mostrar menos projetos';
            } else {
                // Se está visível, adiciona a classe 'hidden' para esconder com transição
                projectsContainer.classList.add('hidden');
                toggleButton.textContent = 'Mostrar todos os projetos';
            }
        });
    });