    // Referência ao botão
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Função que exibe ou esconde o botão dependendo do scroll
    window.onscroll = () => {
      const scrollTrigger = 1500; // Ponto em que o botão deve aparecer (em pixels)
      if (document.documentElement.scrollTop > scrollTrigger) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };
