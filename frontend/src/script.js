// Initialiseer Lucide icons (zoekt naar alle i tags met data-lucide attribuut)
lucide.createIcons();

// Zet het huidige jaar in de footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Listener voor de navbar (vervangt useEffect en isScrolled state)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll functie (vervangt de scrollTo functie in React)
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -100; // Offset voor sticky header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

        // Update actieve knop status
        updateActiveButton(id);
    }
}

// Functie om de actieve klasse op de knoppen te zetten
function updateActiveButton(activeId) {
    // Verwijder 'active' van alle knoppen
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Voeg 'active' toe aan de juiste knop (indien aanwezig in menu)
    const activeBtn = document.getElementById(`btn-${activeId}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}