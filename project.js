// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

// Show/hide back to top button based on scroll position
function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listeners
if (backToTopButton) {
    backToTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleBackToTop);
}

// Update current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});

// State for active filters
let activeFilters = {
    category: 'all',
    tags: new Set()
};

// Sample project data
const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A modern e-commerce solution with seamless user experience and secure payment processing.',
        image: 'https://source.unsplash.com/random/800x600/?ecommerce,shopping',
        images: [
            'https://source.unsplash.com/random/800x600/?ecommerce',
            'https://source.unsplash.com/random/800x600/?shop',
            'https://source.unsplash.com/random/800x600/?cart'
        ],
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/username/ecommerce-platform',
        demo: 'https://ecommerce-demo.com',
        category: 'web',
        featured: true
    },
    {
        id: 2,
        title: 'Task Management',
        description: 'A task management application with drag-and-drop interface and team collaboration features.',
        image: 'https://source.unsplash.com/random/800x600/?task,management',
        images: [
            'https://source.unsplash.com/random/800x600/?task,management',
            'https://source.unsplash.com/random/800x600/?kanban',
            'https://source.unsplash.com/random/800x600/?team'
        ],
        tags: ['Vue.js', 'Firebase', 'Vuex'],
        github: 'https://github.com/username/task-manager',
        demo: 'https://task-manager-demo.com',
        category: 'web',
        badges: ['open-source']
    },
    {
        id: 3,
        title: 'Fitness Tracker',
        description: 'Mobile app for tracking workouts, nutrition, and progress with beautiful data visualizations.',
        image: 'https://source.unsplash.com/random/800x600/?fitness,workout',
        images: [
            'https://source.unsplash.com/random/800x600/?fitness,workout',
            'https://source.unsplash.com/random/800x600/?exercise',
            'https://source.unsplash.com/random/800x600/?nutrition'
        ],
        tags: ['React Native', 'Redux', 'Firebase'],
        github: 'https://github.com/username/fitness-tracker',
        demo: 'https://apps.apple.com/app/fitness-tracker',
        category: 'mobile',
        badges: ['new']
    },
    {
        id: 4,
        title: 'Recipe Finder',
        description: 'Find recipes based on ingredients you have at home with step-by-step cooking instructions.',
        image: 'https://source.unsplash.com/random/800x600/?food,recipe',
        images: [
            'https://source.unsplash.com/random/800x600/?food,recipe',
            'https://source.unsplash.com/random/800x600/?cooking',
            'https://source.unsplash.com/random/800x600/?ingredients'
        ],
        tags: ['JavaScript', 'API', 'CSS Grid'],
        github: 'https://github.com/username/recipe-finder',
        demo: 'https://recipe-finder-demo.com',
        category: 'web',
        badges: []
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        description: 'Real-time weather information with 5-day forecast and location-based weather data.',
        image: 'https://source.unsplash.com/random/800x600/?weather,forecast',
        images: [
            'https://source.unsplash.com/random/800x600/?weather,forecast',
            'https://source.unsplash.com/random/800x600/?rain',
            'https://source.unsplash.com/random/800x600/?clouds'
        ],
        tags: ['React', 'OpenWeather API', 'Chart.js'],
        github: 'https://github.com/username/weather-dashboard',
        demo: 'https://weather-dashboard-demo.com',
        category: 'web',
        badges: []
    },
    {
        id: 6,
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase projects and skills with a clean, modern design.',
        image: 'https://source.unsplash.com/random/800x600/?portfolio,design',
        images: [
            'https://source.unsplash.com/random/800x600/?portfolio,design',
            'https://source.unsplash.com/random/800x600/?web,portfolio',
            'https://source.unsplash.com/random/800x600/?personal,website'
        ],
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/username/portfolio',
        demo: 'https://myportfolio.com',
        category: 'web',
        badges: ['featured', 'open-source']
    }
];

// DOM Elements
const projectsContainer = document.getElementById('projectsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
let filteredProjects = [...projects];

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all projects initially
    displayProjects(projects);
    
    // Add click event for tags
    document.addEventListener('click', handleTagClick);
    
    // Add keyboard event for tag navigation
    document.addEventListener('keydown', handleTagKeyDown);
});

// Handle tag click events
function handleTagClick(e) {
    const tagElement = e.target.closest('.tag');
    if (!tagElement) return;
    
    e.preventDefault();
    const tag = tagElement.dataset.tag;
    toggleTagFilter(tag);
}

// Handle keyboard events for tags
function handleTagKeyDown(e) {
    // Only handle Enter and Space keys
    if (e.key !== 'Enter' && e.key !== ' ') return;
    
    const tagElement = e.target.closest('.tag');
    if (!tagElement) return;
    
    e.preventDefault();
    if (e.key === 'Enter' || e.key === ' ') {
        const tag = tagElement.dataset.tag;
        toggleTagFilter(tag);
    }
}

// Toggle tag filter
function toggleTagFilter(tag) {
    if (activeFilters.tags.has(tag)) {
        activeFilters.tags.delete(tag);
    } else {
        activeFilters.tags.add(tag);
    }
    
    // Update the UI
    updateActiveTags();
    filterAndDisplayProjects();
}

// Update active tags UI
function updateActiveTags() {
    // Remove existing active classes
    document.querySelectorAll('.tag').forEach(tag => {
        if (activeFilters.tags.has(tag.dataset.tag)) {
            tag.classList.add('active');
            tag.setAttribute('aria-pressed', 'true');
        } else {
            tag.classList.remove('active');
            tag.setAttribute('aria-pressed', 'false');
        }
    });
}

// Filter and display projects based on active filters
function filterAndDisplayProjects() {
    let filtered = [...projects];
    
    // Filter by tags if any are selected
    if (activeFilters.tags.size > 0) {
        filtered = filtered.filter(project => 
            Array.from(activeFilters.tags).every(tag => 
                project.tags.includes(tag)
            )
        );
    }
    
    // Filter by category if not 'all'
    if (activeFilters.category !== 'all') {
        filtered = filtered.filter(project => 
            project.category === activeFilters.category
        );
    }
    
    displayProjects(filtered);
}

// Display projects in the grid
function displayProjects(projectsToShow) {
    projectsContainer.innerHTML = '';

    if (projectsToShow.length === 0) {
        projectsContainer.innerHTML = `
            <div class="no-projects" style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
                <h3>No projects found</h3>
                <p>No projects match the selected filter. Try a different category.</p>
            </div>`;
        return;
    }

    projectsToShow.forEach((project, idx) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('tabindex', '0');
        projectCard.setAttribute('role', 'button');
        projectCard.setAttribute('aria-label', `View details for ${project.title}`);
        projectCard.style.animationDelay = (idx * 0.07) + 's';

        // Badges
        let badgesHTML = '';
        if (project.badges && project.badges.length > 0) {
            badgesHTML = `<div class="project-badges">${project.badges.map(badge => `<span class="project-badge ${badge}">${badge.replace('-', ' ')}</span>`).join('')}</div>`;
        }

        // Format tags
        const tags = project.tags.map(tag => 
            `<span class="tag" data-tag="${tag}" tabindex="0" role="button" aria-label="Filter by ${tag}">${tag}</span>`
        ).join('');

        // Format links
        const links = [];
        if (project.github) {
            links.push(`<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="View ${project.title} on GitHub">
                <i class="fab fa-github"></i> Code
            </a>`);
        }
        if (project.demo) {
            links.push(`<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="View ${project.title} live demo">
                <i class="fas fa-external-link-alt"></i> View Project
            </a>`);
        }

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            ${badgesHTML}
            <div class="project-content">
                <h3 id="project-${project.id}-title">${project.title}</h3>
                <p id="project-${project.id}-desc">${project.description}</p>
                <div class="project-tags">
                    ${tags}
                </div>
                <div class="project-links">
                    ${links.join('')}
                </div>
            </div>
        `;

        // Modal open on click/keyboard
        projectCard.addEventListener('click', () => openProjectModal(project));
        projectCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                openProjectModal(project);
            }
        });

        projectsContainer.appendChild(projectCard);
    });
    // This function runs after all project cards are added to the DOM
    // The actual layout is handled by CSS Grid, but we can add any additional JS logic here
    
    // Add a small delay to ensure all images are loaded
    const images = document.querySelectorAll('.project-image');
    let loadedImages = 0;
    
    if (images.length === 0) return;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    // All images loaded
                    console.log('All project images loaded');
                }
            });
        }
    });
}

// Event listeners with optimized handling
projectSearch?.addEventListener('input', debounce((e) => {
    state.currentSearch = e.target.value;
    throttledUpdate();
}, 200));

projectSort?.addEventListener('change', (e) => {
    state.currentSort = e.target.value;
    throttledUpdate();
});

// Update filterProjects to set currentCategory and call filterAndDisplayProjects
function filterProjects(category) {
    projectsContainer.style.opacity = '0';
    activeFilters.category = category;
    
    setTimeout(() => {
        filterAndDisplayProjects();
        projectsContainer.style.opacity = '1';
        projectsContainer.style.transition = 'opacity 0.3s ease';
        projectsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
}

// Event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter projects
        filterProjects(button.dataset.filter);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});

// Add a simple loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Modal logic
const modal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalLinks = document.getElementById('modalLinks');

let modalGalleryImages = [];
let modalGalleryIndex = 0;

function renderModalGallery() {
    if (modalGalleryImages.length > 1) {
        modalImage.innerHTML = `
            <button class="modal-gallery-arrow left" aria-label="Previous image">&#8592;</button>
            <img src="${modalGalleryImages[modalGalleryIndex]}" alt="Project screenshot ${modalGalleryIndex+1}" />
            <button class="modal-gallery-arrow right" aria-label="Next image">&#8594;</button>
            <div class="modal-gallery-indicator">${modalGalleryIndex+1} / ${modalGalleryImages.length}</div>
        `;
        modalImage.querySelector('.left').onclick = () => {
            modalGalleryIndex = (modalGalleryIndex - 1 + modalGalleryImages.length) % modalGalleryImages.length;
            renderModalGallery();
        };
        modalImage.querySelector('.right').onclick = () => {
            modalGalleryIndex = (modalGalleryIndex + 1) % modalGalleryImages.length;
            renderModalGallery();
        };
    } else {
        modalImage.innerHTML = `<img src="${modalGalleryImages[0]}" alt="Project screenshot" />`;
    }
}

function openProjectModal(project) {
    modalGalleryImages = project.images && project.images.length ? project.images : [project.image];
    modalGalleryIndex = 0;
    renderModalGallery();
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTags.innerHTML = project.tags.map(tag => 
        `<span class="tag" data-tag="${tag}" tabindex="0" role="button" aria-label="Filter by ${tag}" aria-pressed="${activeFilters.tags.has(tag) ? 'true' : 'false'}">${tag}</span>`
    ).join('');
    modalLinks.innerHTML =
        (project.github ? `<a href="${project.github}" target="_blank" aria-label="View code on GitHub"><i class="fab fa-github"></i></a>` : '') +
        (project.demo ? `<a href="${project.demo}" target="_blank" aria-label="View live demo"><i class="fas fa-external-link-alt"></i></a>` : '');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
    modal.focus();
}

// Keyboard navigation for modal gallery
modalImage.addEventListener('keydown', (e) => {
    if (modalGalleryImages.length > 1) {
        if (e.key === 'ArrowLeft') {
            modalGalleryIndex = (modalGalleryIndex - 1 + modalGalleryImages.length) % modalGalleryImages.length;
            renderModalGallery();
        } else if (e.key === 'ArrowRight') {
            modalGalleryIndex = (modalGalleryIndex + 1) % modalGalleryImages.length;
            renderModalGallery();
        }
    }
});

function closeProjectModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 200);
}

modalClose.addEventListener('click', closeProjectModal);
modalOverlay.addEventListener('click', closeProjectModal);
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block' && (e.key === 'Escape' || e.key === 'Esc')) {
        closeProjectModal();
    }
});

// Theme toggle logic
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

function setTheme(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
    localStorage.setItem('theme', mode);
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    setTheme(isDark ? 'light' : 'dark');
}

themeToggle.addEventListener('click', toggleTheme);

// On load: apply saved theme or system preference
(function() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
})();

// On page load, show all projects sorted by name
updateProjectsDisplay();

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }
});
