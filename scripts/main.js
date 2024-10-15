function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('menu-open');
}

// ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.project, .about, .contact', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
});
