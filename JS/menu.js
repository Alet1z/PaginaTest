const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const submenuToggle = document.querySelectorAll('.has-submenu > a');

// Muestra/Oculta el menú hamburguesa
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Muestra/Oculta el submenú al hacer clic
submenuToggle.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
        const submenu = toggle.nextElementSibling;
        submenu.classList.toggle('open');
        event.preventDefault(); // Evita que el enlace siga su destino
    });
});

