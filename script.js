console.log('Script chargé');

document.addEventListener('DOMContentLoaded', () => {
    const previewImages = document.querySelectorAll('.preview');
    const overlay = document.getElementById('zoomOverlay');
    const overImage = document.getElementById('overlayImage');
    const closeBtn = document.querySelector('.close-btn');


    const openOverlay = (event) => {
        // La cible est l'image survolée
        const image = event.currentTarget; 
        
        const fullSrc = image.src;
        overImage.src = fullSrc;
        overlay.classList.add('active');
    };


    const closeOverlay = () => {
        overlay.classList.remove('active');
    };


    previewImages.forEach(img => {
        img.addEventListener('click', openOverlay);
    });


    closeBtn.addEventListener('click', closeOverlay);


    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });
});

// --- Gestion du Thème Frutiger Aero ---
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;
const THEME_KEY = 'portfolio-theme';

// Vérifier s'il y a un thème sauvegardé ou appliquer le thème par défaut
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'frutiger') {
    body.classList.add('theme-frutiger');
}

// Gérer le clic sur le bouton
if (themeSwitcher) {
    themeSwitcher.addEventListener('click', () => {
        // Alterne la classe sur le body
        body.classList.toggle('theme-frutiger');
        
        // Sauvegarde le choix
        if (body.classList.contains('theme-frutiger')) {
            localStorage.setItem(THEME_KEY, 'frutiger');
        } else {
            localStorage.setItem(THEME_KEY, 'default');
        }
    });
}