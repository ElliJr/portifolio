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
