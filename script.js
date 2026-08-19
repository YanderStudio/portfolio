console.log('Script chargé');

// --- 1. BASE DE DONNÉES COMPLÈTE DES PROJETS ---
const projectsData = {
    "hell-au-fresh": {
        title: "Hell Au Fresh",
        exeName: "Hell_au_Fresh.exe",
        date: "06/06/2024",
        isMain: false,
        tags: ["Web", "Fictif"],
        shortDesc: "Création d'un site fictif de commande de produits de première nécessité pour étudiants.",
        fullDesc: "Plateforme fictive de commande de paniers repas et produits de première nécessité à prix réduits, pensée spécialement pour la vie étudiante au sein d'un logement partagé.<br><br>C'est aussi mon tout premier projet web qui m'a fait réaliser que je voulais créer des site web plus tard.",
        mainImage: "img/Hell_au_fresh/Hell_au_Fresh.png",
        gallery: [
            "img/Hell_au_fresh/Hell_au_Fresh.png",
            "img/Hell_au_fresh/Hell_au_Fresh_register.png"
        ]
    },
    "viseur-arena": {
        title: "Viseur Arena",
        exeName: "Viseur_Arena.exe",
        date: "25/09/2024",
        isMain: false,
        tags: ["Figma", "Web", "Fictif"],
        shortDesc: "Création et branding d'un site fictif d'une salle de concerts.",
        fullDesc: "Conception de l'identité visuelle et de la maquette complète d'une salle de concert fictive sur Figma en projet de groupe.",
        mainImage: "img/Viseur_Arena/landing_page.png",
        gallery: [
            "img/Viseur_Arena/landing_page.png",
            "img/Viseur_Arena/Figma.png",
            "img/Viseur_Arena/Arena.png",
            "img/Viseur_Arena/VA2.png"
        ]
    },
    "mate-painting": {
        title: "Mate Painting",
        exeName: "Mate_Painting.exe",
        date: "08/11/2024",
        isMain: false,
        tags: ["Création numérique", "Photoshop"],
        shortDesc: "Création d'un Mate Painting sur deux thèmes imposés (Polaroid & Pop Art).",
        fullDesc: "Projet créatif où nous devions réaliser un Mate painting sur deux thèmes au choix (Polaroid & Pop Art) parmi une liste de thème imposée.",
        mainImage: "img/Mate_painting/SAE_103.png",
        gallery: ["img/Mate_painting/SAE_103.png"]
    },
    "booksta": {
        title: "Booksta",
        exeName: "Booksta.exe",
        date: "16/03/2025",
        isMain: false,
        tags: ["Communication"],
        shortDesc: "Création de publications Instagram sous le concept de 'Booksta'.",
        fullDesc: "Création d'une direction artistique pour un compte Instagram littéraire. Création de templates de carrousels sous Figma.",
        mainImage: "img/booksta/booksta_caroussel.jpg",
        gallery: [
            "img/booksta/booksta_caroussel.jpg",
            "img/booksta/cherub.jpg",
            "img/booksta/Hanako.jpg"
        ]
    },
    "couverture": {
        title: "Couverture de livre",
        exeName: "Couverture.exe",
        date: "03/05/2025",
        isMain: false,
        tags: ["Communication", "Photoshop", "Fictif"],
        shortDesc: "Création d'une couverture pour un livre fictif d'une célébrité de notre choix.",
        fullDesc: "Conception graphique de la première, quatrième de couverture et du dos pour une biographie fictive de la chanteuse Anya Nami.",
        mainImage: "img/Couverture/Purple_Anya_Nami.jpg",
        gallery: [
            "img/Couverture/Purple_Anya_Nami.jpg",
            "img/Couverture/Couverture_final.jpg"
        ]
    },
    "rebranding-wiki": {
        title: "Rebranding Fictif Wikipedia",
        exeName: "Rebranding_Wiki.exe",
        date: "11/06/2025",
        isMain: true,
        tags: ["Web", "Illustrator", "Fictif"],
        shortDesc: "Création d'un rebranding fictif de l'encyclopédie collaborative Wikipedia.",
        fullDesc: "Création d'une nouvelle identité visuelle pour l'encyclopédie collaborative Wikipedia. J'ai pu réaliser un rebranding complet contenant logo et variantes par thèmes, bannière de réseaux sociaux et affiche.",
        mainImage: "img/wikipedia/Rebranding_wikipedia_bannière_FB.png",
        gallery: [
            "img/wikipedia/Rebranding_wikipedia_bannière_FB.png",
            "img/wikipedia/Rebranding_wikipedia_affiche_3x4m.png",
            "img/wikipedia/rebranding_wikipedia_logo.png"
        ]
    },
    "faunesia": {
        title: "Faunésia",
        exeName: "Faunesia.exe",
        date: "14/06/2025",
        isMain: false,
        tags: ["Communication", "Gestion de projet", "Fictif"],
        shortDesc: "Création du branding de la maison d'édition fictive Faunésia et de plusieurs visuels.",
        fullDesc: "Identité de marque complète pour une maison d'édition fictive spécialisée dans la nature et les animaux : création du logo, d'affiches promotionnelles et de couvertures.",
        mainImage: "img/faunesia/Faunesia.png",
        gallery: [
            "img/faunesia/Faunesia.png",
            "img/faunesia/Couverture.png",
            "img/faunesia/Affiche_Faunésia.png"
        ]
    },
    "indie-game-fest": {
        title: "Indie Game Fest",
        exeName: "Indie_Game_Fest.exe",
        date: "25/06/2025",
        isMain: false,
        tags: ["Communication", "Audiovisuel", "Illustrator", "Premiere pro", "Photoshop", "Fictif"],
        shortDesc: "Création du branding et de la stratégie de communication d'un évènement fictif.",
        fullDesc: "Conception de la campagne de communication pour un festival de jeux vidéo indépendants. Déclinaison sur supports digitaux (bannières réseaux sociaux) et print.",
        mainImage: "img/Indi_Game_Fest/Bannière_FB_test_5_Valide.png",
        gallery: [
            "img/Indi_Game_Fest/Bannière_FB_test_5_Valide.png",
            "img/Indi_Game_Fest/AfficheA3.png",
            "img/Indi_Game_Fest/DA_boite_de_com.png",
            "img/Indi_Game_Fest/DA_festival_indie_V1.png",
            "img/Indi_Game_Fest/Page_FB.jpeg",
            "img/Indi_Game_Fest/Page_Insta.png",
            "img/Indi_Game_Fest/Porte_cle.png",
            "img/Indi_Game_Fest/Post_FB_1.png",
            "img/Indi_Game_Fest/Post_FB_2.png",
            "img/Indi_Game_Fest/Recto_flyer.png",
            "img/Indi_Game_Fest/Verso_flyer.png",

        ]
    },
    "personal-branding": {
        title: "Personal Branding",
        exeName: "Personal_Branding.exe",
        date: "10/10/2025",
        isMain: false,
        tags: ["Web", "Communication", "Illustrator", "Figma"],
        shortDesc: "Création de mon Branding appliqué sur mes réseaux sociaux, mon CV et mon portfolio.",
        fullDesc: "Réflexion et conception de mon identité visuelle professionnelle. Définition de la charte graphique, création du logo, et uniformisation de mes profils professionnels.",
        mainImage: "img/personal_branding/Bannière_Linkedin.png",
        gallery: [
            "img/personal_branding/Bannière_Linkedin.png",
            "img/personal_branding/A4_5.png",
            "img/personal_branding/A4_6.png",
            "img/personal_branding/CV_public.png"
        ]
    },
    "meme-museum": {
        title: "Mème Museum",
        exeName: "Meme_Museum.exe",
        date: "23/10/2025",
        isMain: true,
        tags: ["Fictif", "Illustrator"],
        shortDesc: "Création d'un logo pour une exposition temporaire nommée 'meme museum'.",
        fullDesc: "Conception de l'identité de marque (branding, logo et communication) pour une exposition éphémère dédiée à l'histoire et à la culture des mèmes internet.",
        mainImage: "img/meme_museum/DA_Logo_meme_museum.png",
        gallery: [
            "img/meme_museum/DA_Logo_meme_museum.png",
            "img/meme_museum/Couleurs_meme_museum.png",
            "img/meme_museum/DA_meme_museum.png",
            "img/meme_museum/Logo_V1_var_1.png",
            "img/meme_museum/Logo_V1.png",
            "img/meme_museum/Logo_V2_var_1.png",
            "img/meme_museum/Logo_V2.png",
            "img/meme_museum/Meme_museum.png",
        ]
    },
    "ptit-festin": {
        title: "Le Festin Des Frangins",
        exeName: "Ptit_Festin.exe",
        date: "17/10/2025 - 15/01/2026",
        isMain: false,
        tags: ["Communication", "Audiovisuel", "Illustrator", "Photoshop", "Premiere Pro", "Semi fictif"],
        shortDesc: "Création de la communication d'un restaurant sur Arques (St Omer - 62).",
        fullDesc: "Réalisation des supports promotionnels et menus pour un restaurant local. Travail de typographie et de mise en page en accord avec l'ambiance conviviale du lieu.",
        mainImage: "img/Ptit_Festin/Template_1_printemps_cut.png",
        gallery: [
            "img/Ptit_Festin/Template_1_printemps_cut.png",
            "img/Ptit_Festin/Affiche_soiree_Halloween_mexicain.png",
            "img/Ptit_Festin/Banniere_FB.png",
            "img/Ptit_Festin/Changement_horaires.png",
            "img/Ptit_Festin/Photo_1.png",
            "img/Ptit_Festin/Template_1_printemps_cut.png",
            "img/Ptit_Festin/template_automne.png",
            "img/Ptit_Festin/template_ete.png",
            "img/Ptit_Festin/template_hiver.png",
            "img/Ptit_Festin/template_printemps.png",
        ]
    },
    "soul-club": {
        title: "Site Web Soul Club",
        exeName: "Soul_Club.exe",
        date: "17/12/2025",
        isMain: true,
        tags: ["Web", "Git", "Figma", "Illustrator", "Fictif"],
        shortDesc: "Création d'un site web de blog sur la musique soul dans le cadre du Marathon du Web.",
        fullDesc: "Site web type blog sur la musique soul, réalisé en équipe sous contrainte de temps lors du Marathon du Web 2025 de l'IUT de Lens. Intégration responsive et design dynamique.",
        mainImage: "img/Sould_club/footer.png",
        gallery: [
            "img/Sould_club/Figma_proto.png",
            "img/Sould_club/footer.png",
            "img/Sould_club/logo_404.png",
        ]
    },
    "pres-du-hem": {
        title: "Communication Les Prés du Hem",
        exeName: "Prés_du_Hem.exe",
        date: "13/01/2026",
        isMain: true,
        tags: ["Communication", "Illustrator"],
        shortDesc: "Projet visant à valoriser un lieu culturel important d’une région française.",
        fullDesc: "Élaboration d'une stratégie de valorisation touristique et culturelle. Conception d'affiches et de supports publicitaires pour dynamiser l'image du site.",
        mainImage: "img/pres_du_hem/Logo.png",
        gallery: [
            "img/pres_du_hem/DA.png",
            "img/pres_du_hem/Logos.png",
        ]
    },
    "light-it": {
        title: "Projet international Light it",
        exeName: "Projet_international.exe",
        date: "09/03/2026 - 13/03/2026",
        isMain: true,
        tags: ["Illustrator", "Figma"],
        shortDesc: "Création complète d'un site web nommé Light it dédié à la collection de briquets.",
        fullDesc: "Projet collaboratif international. Conception UI/UX et développement front-end d'une plateforme web permettant aux passionnés de répertorier et partager leur collection de briquets.",
        mainImage: "img/light_it/accueil.png",
        gallery: [
            "img/light_it/accueil.png",
            "img/light_it/menus.png",
        ]
    },
    "david-lynch": {
        title: "Site Web David Lynch",
        exeName: "David_Lynch.exe",
        date: "20/03/2026",
        isMain: true,
        tags: ["Communication", "Photoshop", "html", "css", "js"],
        shortDesc: "Création du site Web immersif dédié à l'œuvre de David Lynch.",
        fullDesc: "Expérience web interactive et sombre rendant hommage à la cinématographie de David Lynch. Utilisation d'animations CSS/JS pour recréer l'atmosphère de ses films.",
        mainImage: "img/david_lynch/index.png",
        gallery: [
            "img/david_lynch/index.png",
            "img/david_lynch/rideau.png",
            "img/david_lynch/héritage.png",
            "img/david_lynch/oeuvres.png",
            "img/david_lynch/parcours.png",
            "img/david_lynch/sources1.png",
            "img/david_lynch/sources2.png",
        ]
    },
    "goty": {
        title: "Site Web historique des GOTY",
        exeName: "GOTY.exe",
        date: "01/04/2026",
        isMain: true,
        tags: ["Scss", "html", "css", "js", "GSAP"],
        shortDesc: "Création d'un site Web immersif retraçant les éditions précédentes des GOTY.",
        fullDesc: "Développement d'une vitrine interactive retraçant les jeux récompensés aux Game of The Year. Mise en avant visuelle, transitions fluides et fiches détaillées par jeu.",
        mainImage: "img/GOTY/TGA_GOTY.png",
        gallery: [
            "img/GOTY/TGA_GOTY.png",
            "img/GOTY/Projet_GOTY.png",
        ]
    },
    "burial-vault": {
        title: "Jeux vidéo Burial Vault",
        exeName: "Burial_Vault.exe",
        date: "19/02/2026 - 09/04/2026",
        isMain: true,
        tags: ["Android Studio", "Kotlin", "Design", "Pixel art"],
        shortDesc: "Création d'un jeu vidéo 2D en pixel art type 'die and retry' à travers des donjons.",
        fullDesc: "Conception globale d'un jeu 2D : level design, création des assets en pixel art et programmation des mécaniques de jeu (déplacements, collisions, ennemis).",
        mainImage: "img/placeholder.jpg",
        gallery: ["img/placeholder.jpg"]
    },
    "eliaut": {
        title: "Eliaut Elevage",
        exeName: "Eliaut_Elevage.exe",
        date: "En cours",
        isMain: true,
        tags: ["Web", "En cours", "Wordpress"],
        shortDesc: "Création du site Web de l'entreprise Eliaut Elevage basée à Méteren dans le Nord.",
        fullDesc: "Conception et développement complet du site web vitrine pour l'entreprise Eliaut Elevage. Design sur-mesure, optimisation SEO locale et structuration de l'offre commerciale.",
        mainImage: "img/Eliaut_Elevage/Logo_eliaut.jpg",
        gallery: ["img/Eliaut_Elevage/Logo_eliaut.jpg"]
    }
};

// --- 2. GÉNÉRATION DYNAMIQUE DES GRILLES DE PROJETS ---
const renderProjectsGrid = () => {
    const mainGrid = document.getElementById('grid-main-projects');
    const allGrid = document.getElementById('grid-all-projects');
    if (!mainGrid && !allGrid) return;
    Object.entries(projectsData).forEach(([id, data]) => {
        // MAJ vers BEM panel__topbar et panel__content
        const cardHTML = `
            <a href="project.html?id=${id}" class="card-project-grid">
                <div class="panel__topbar">
                    <div class="win7-title">
                        <img src="img/logo.png" alt="icon">
                        <span>${data.exeName || id + '.exe'}</span>
                    </div>
                    <div class="win7-controls">
                        <div class="ctrl-btn ctrl-min"><i class='bx bx-minus'></i></div>
                        <div class="ctrl-btn ctrl-max"><i class='bx bx-rectangle'></i></div>
                        <div class="ctrl-btn ctrl-close"><i class='bx bx-x'></i></div>
                    </div>
                </div>
                <div class="panel__content panel__content--col">
                    <div class="image-project-grid"><img src="${data.mainImage}" alt="${data.title}"></div>
                    <div class="detail-project-grid">
                        <h3 class="title-project-grid">${data.title}</h3>
                        <p class="desc-project-grid">${data.shortDesc}</p>
                        <p class="date-project-grid">${data.date}</p>
                    </div>
                </div>
            </a>
        `;
        if (mainGrid && data.isMain) {
            mainGrid.innerHTML += cardHTML;
        }
        if (allGrid) {
            allGrid.innerHTML += cardHTML;
        }
    });
};

// --- 3. GESTION DE LA GALERIE & ZOOM (OVERLAY) ---
const initOverlay = () => {
    const previewImages = document.querySelectorAll('.preview');
    const overlay = document.getElementById('zoomOverlay');
    const overImage = document.getElementById('overlayImage');
    const closeBtn = document.querySelector('.close-btn');
    if (!overlay || !overImage) return;
    const openOverlay = (event) => {
        overImage.src = event.currentTarget.src;
        overlay.classList.add('active');
    };
    const closeOverlay = () => {
        overlay.classList.remove('active');
    };
    previewImages.forEach(img => {
        img.addEventListener('click', openOverlay);
    });
    if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });
};

// --- 4. CHARGEMENT DYNAMIQUE DU PROJET SUR PROJECT.HTML ---
const loadProjectData = () => {
    const titleElem = document.getElementById('project-title');
    if (!titleElem) return; 
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const data = projectsData[projectId];
    if (data) {
        document.title = `${data.title} - Nicolas Richard`;
        titleElem.innerHTML = data.title.replace(' ', '<br>'); 
        const win7Title = document.getElementById('win7-project-title');
        if (win7Title) win7Title.textContent = data.exeName || projectId + '.exe';
        // --- GESTION DES TAGS ---
        const tagsContainer = document.getElementById('project-tags');
        tagsContainer.innerHTML = ''; 
        if (data.tags && Array.isArray(data.tags)) {
            data.tags.forEach(tag => {
                tagsContainer.innerHTML += `<p class="cell2">${tag}</p>`;
            });
        }
        document.getElementById('project-desc').innerHTML = data.fullDesc || data.shortDesc || "";
        const mainImg = document.getElementById('project-main-image');
        mainImg.src = data.mainImage;
        mainImg.alt = data.title;
        const galleryContainer = document.getElementById('project-gallery');
        galleryContainer.innerHTML = ''; 
        data.gallery.forEach(imgSrc => {
            const imgElem = document.createElement('img');
            imgElem.src = imgSrc;
            imgElem.alt = `Vue du projet ${data.title}`;
            imgElem.classList.add('preview');
            galleryContainer.appendChild(imgElem);
        });
        initOverlay();
    } else {
        titleElem.textContent = "Projet introuvable";
        document.getElementById('project-desc').textContent = "Désolé, ce projet n'existe pas ou a été déplacé.";
    }
};

// --- GESTION DU DROPDOWN ET DES THÈMES MULTIPLES ---
const initThemeSwitcher = () => {
    const dropdownBtn = document.getElementById('theme-dropdown-btn');
    const dropdownMenu = document.getElementById('theme-dropdown-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
    const body = document.body;
    const note = document.getElementById('note-trigger');
    const THEME_KEY = 'portfolio-theme';
    const allThemeClasses = ['theme-frutiger']; 
    const applyTheme = (themeName) => {
        allThemeClasses.forEach(cls => body.classList.remove(cls));
        if (themeName !== 'default') {
            body.classList.add(`theme-${themeName}`);
        }
        if (note) {
            note.style.display = 'none';
        }
        localStorage.setItem(THEME_KEY, themeName);
    };
    const savedTheme = localStorage.getItem(THEME_KEY) || 'default';
    applyTheme(savedTheme);
    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            dropdownMenu.classList.toggle('show');
        });
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedTheme = option.getAttribute('data-theme');
                applyTheme(selectedTheme);
                dropdownMenu.classList.remove('show'); 
            });
        });
        document.addEventListener('click', (e) => {
            if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
};

const initNote = () => {
    const filewrapper = document.getElementById('file-wrapper');
    const note = document.getElementById('note-trigger');
    if (!filewrapper || !note) return;
    filewrapper.addEventListener('click', () => {
        if (!document.body.classList.contains('theme-frutiger')) return;
        const isHidden = note.style.display === 'none' || window.getComputedStyle(note).display === 'none';
        note.style.display = isHidden ? 'block' : 'none';
    });
};

// --- AU CHARGEMENT DE LA PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitcher();
    renderProjectsGrid(); 
    loadProjectData(); 
    initOverlay();
    initNote();
    initSecureMail();
});

const initSecureMail = () => {
    // On cible tous les liens qui ont la classe secure-mail
    const mailLinks = document.querySelectorAll('.secure-mail');
    
    // Les morceaux de ton email, séparés pour tromper les bots
    const user = "richard.nicolas.a.o";
    const domain = "proton.me";
    
    mailLinks.forEach(link => {
        // 1. GESTION DE L'AFFICHAGE VISUEL
        const textSpan = link.querySelector('.mail-text');
        if (textSpan) {
            // On écrit l'adresse dans le HTML seulement une fois le JS exécuté
            textSpan.innerHTML = `${user}<br>@${domain}`;
        }
        
        // 2. GESTION DU CLIC (Ouverture de la messagerie)
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            let mailtoLink = `mailto:${user}@${domain}`;
            
            // Ajout du sujet si spécifié (ex: Demande de CV ATS)
            if (link.dataset.subject) {
                mailtoLink += `?subject=${encodeURIComponent(link.dataset.subject)}`;
            }
            
            window.location.href = mailtoLink;
        });
    });
};