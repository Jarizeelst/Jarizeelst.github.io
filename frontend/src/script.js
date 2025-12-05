lucide.createIcons();

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });


        updateActiveButton(id);
    }
}

function updateActiveButton(activeId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.getElementById(`btn-${activeId}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}