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
    category: 'all'
};

// Project data
const projects = [
    {
        id: 0,
        title: 'Bodhgaya Forex Pvt. Ltd.',
        description: 'A professional static website for Bodhgaya Forex Pvt. Ltd., a financial services company specializing in foreign exchange and currency exchange services.',
        image: 'https://source.unsplash.com/random/800x600/?finance,currency',
        images: [
            'https://source.unsplash.com/random/800x600/?finance,currency',
            'https://source.unsplash.com/random/800x600/?money,exchange',
            'https://source.unsplash.com/random/800x600/?financial,services'
        ],

        github: null,
        demo: 'https://bodhgayaforex.com/',
        category: 'web',
        featured: true,
        badges: ['featured']
    },
    {
        id: 1,
        title: 'Calorie Burned Calculator',
        description: 'A simple application to calculate calories burned during various exercises based on duration and intensity.',
        image: 'https://source.unsplash.com/random/800x600/?fitness,calculator',
        images: [
            'https://source.unsplash.com/random/800x600/?fitness,calculator',
            'https://source.unsplash.com/random/800x600/?workout,tracking',
            'https://source.unsplash.com/random/800x600/?health,app'
        ],

        github: 'https://github.com/Hrk84ya/Calorie-Burned-Calculator',
        demo: null,
        category: 'web',
        badges: []
    },
    {
        id: 2,
        title: 'Facebomp Game',
        description: 'An interactive web-based game built with HTML, CSS, and JavaScript featuring engaging gameplay mechanics.',
        image: 'https://source.unsplash.com/random/800x600/?game,arcade',
        images: [
            'https://source.unsplash.com/random/800x600/?game,arcade',
            'https://source.unsplash.com/random/800x600/?web,game',
            'https://source.unsplash.com/random/800x600/?javascript,game'
        ],

        github: 'https://github.com/Hrk84ya/Facebomp-Game',
        demo: null,
        category: 'web',
        badges: []
    },
    {
        id: 3,
        title: 'House Price Predictor',
        description: 'A containerized machine learning model that predicts house prices based on various features with high accuracy.',
        image: 'https://source.unsplash.com/random/800x600/?real,estate',
        images: [
            'https://source.unsplash.com/random/800x600/?real,estate',
            'https://source.unsplash.com/random/800x600/?house,prices',
            'https://source.unsplash.com/random/800x600/?machine,learning,model'
        ],

        github: 'https://github.com/Hrk84ya/Containerized-Machine-Learning-House-Price-Predictor',
        demo: null,
        category: 'ai',
        badges: ['featured']
    },
    {
        id: 4,
        title: 'Medium Article Success Predictor',
        description: 'Machine learning model that predicts the success of Medium articles based on various features and content analysis.',
        image: 'https://source.unsplash.com/random/800x600/?writing,blog',
        images: [
            'https://source.unsplash.com/random/800x600/?writing,blog',
            'https://source.unsplash.com/random/800x600/?content,analysis',
            'https://source.unsplash.com/random/800x600/?machine,learning,text'
        ],

        github: 'https://github.com/Hrk84ya/Medium',
        demo: null,
        category: 'ai',
        badges: []
    },
    {
        id: 5,
        title: 'News Summarizer',
        description: 'Application that summarizes news articles using NLP techniques to provide concise overviews of current events.',
        image: 'https://source.unsplash.com/random/800x600/?news,headlines',
        images: [
            'https://source.unsplash.com/random/800x600/?news,headlines',
            'https://source.unsplash.com/random/800x600/?newspaper,article',
            'https://source.unsplash.com/random/800x600/?text,summarization'
        ],

        github: 'https://github.com/Hrk84ya/News-Summarizer',
        demo: null,
        category: 'ai',
        badges: []
    },
    {
        id: 6,
        title: 'Personal Budget Tracker',
        description: 'An intuitive application for tracking personal finances, expenses, and budgeting with data visualization.',
        image: 'https://source.unsplash.com/random/800x600/?budget,finance',
        images: [
            'https://source.unsplash.com/random/800x600/?budget,finance',
            'https://source.unsplash.com/random/800x600/?money,management',
            'https://source.unsplash.com/random/800x600/?expense,tracking'
        ],

        github: 'https://github.com/Hrk84ya/Personal-Budget-Tracker',
        demo: null,
        category: 'web',
        badges: []
    },
    {
        id: 7,
        title: 'Professional Business Card',
        description: 'A modern, responsive business card website built with React.js to showcase professional information and contact details.',
        image: 'https://source.unsplash.com/random/800x600/?business,card',
        images: [
            'https://source.unsplash.com/random/800x600/?business,card',
            'https://source.unsplash.com/random/800x600/?professional,profile',
            'https://source.unsplash.com/random/800x600/?digital,business,card'
        ],

        github: 'https://github.com/Hrk84ya/Professional-Business-Card',
        demo: null,
        category: 'web',
        badges: []
    },
    {
        id: 8,
        title: 'Stock Analysis Dashboard',
        description: 'Interactive dashboard for analyzing stock market data with real-time updates and visualizations using Python and Streamlit.',
        image: 'https://source.unsplash.com/random/800x600/?stock,market',
        images: [
            'https://source.unsplash.com/random/800x600/?stock,market',
            'https://source.unsplash.com/random/800x600/?trading,chart',
            'https://source.unsplash.com/random/800x600/?data,visualization'
        ],

        github: 'https://github.com/Hrk84ya/Stock-Analysis-Dashboard',
        demo: null,
        category: 'data',
        badges: []
    },
    {
        id: 9,
        title: 'Tathagat Tour and Travels',
        description: 'A modern, responsive website for Tathagat Tour and Travels, showcasing their travel packages, services, and booking information with an attractive UI/UX design.',
        image: 'https://source.unsplash.com/random/800x600/?travel,agency',
        images: [
            'https://source.unsplash.com/random/800x600/?travel,agency',
            'https://source.unsplash.com/random/800x600/?vacation,destination',
            'https://source.unsplash.com/random/800x600/?holiday,booking'
        ],

        github: null,
        demo: 'https://www.tathagattour.com/',
        category: 'web',
        featured: true,
        badges: ['featured']
    },
    {
        id: 10,
        title: 'TL-DR: Article Summarizer',
        description: 'A web application that generates concise, intelligent summaries of any article with a single click using advanced NLP techniques.',
        image: 'https://source.unsplash.com/random/800x600/?ai,summarization',
        images: [
            'https://source.unsplash.com/random/800x600/?ai,summarization',
            'https://source.unsplash.com/random/800x600/?text,analysis',
            'https://source.unsplash.com/random/800x600/?machine,learning'
        ],

        github: 'https://github.com/Hrk84ya/TL-DR',
        demo: null,
        category: 'ai',
        featured: true,
        badges: ['featured']
    },
    {
        id: 11,
        title: 'Weather Vista',
        description: 'A weather reporting application that provides detailed forecasts and weather information with a clean, intuitive interface.',
        image: 'https://source.unsplash.com/random/800x600/?weather,forecast',
        images: [
            'https://source.unsplash.com/random/800x600/?weather,forecast',
            'https://source.unsplash.com/random/800x600/?climate,data',
            'https://source.unsplash.com/random/800x600/?weather,dashboard'
        ],

        github: 'https://github.com/Hrk84ya/Weather-Vista',
        demo: null,
        category: 'web',
        badges: []
    }
];

// DOM Elements
const projectsContainer = document.getElementById('projectsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectSearch = document.getElementById('projectSearch');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResults = document.getElementById('searchResults');
let filteredProjects = [...projects];
let currentSearchQuery = '';

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all projects initially
    displayProjects(projects);
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize mobile enhancements
    initializeMobileEnhancements();
});

// Initialize search functionality
function initializeSearch() {
    if (!projectSearch) return;
    
    // Search input event listener
    projectSearch.addEventListener('input', handleSearch);
    
    // Clear search button event listener
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
    }
    
    // Enter key support
    projectSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
}

// Handle search input
function handleSearch(e) {
    const query = e.target.value.trim();
    currentSearchQuery = query;
    
    // Show/hide clear button
    if (clearSearchBtn) {
        clearSearchBtn.style.display = query ? 'flex' : 'none';
    }
    
    // Perform search and display results
    const searchResults = searchProjects(query);
    displayProjects(searchResults);
    updateSearchResults(query, searchResults.length);
}

// Search projects by title and description
function searchProjects(query) {
    if (!query) {
        return filterProjectsByCategory();
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = projects.filter(project => {
        const titleMatch = project.title.toLowerCase().includes(lowercaseQuery);
        const descriptionMatch = project.description.toLowerCase().includes(lowercaseQuery);
        return titleMatch || descriptionMatch;
    });
    
    // Apply category filter if active
    if (activeFilters.category !== 'all') {
        return filtered.filter(project => project.category === activeFilters.category);
    }
    
    return filtered;
}

// Filter projects by category only
function filterProjectsByCategory() {
    if (activeFilters.category === 'all') {
        return [...projects];
    }
    return projects.filter(project => project.category === activeFilters.category);
}

// Update search results message
function updateSearchResults(query, resultCount) {
    if (!searchResults) return;
    
    if (!query) {
        searchResults.classList.remove('visible', 'no-results');
        return;
    }
    
    searchResults.classList.add('visible');
    
    if (resultCount === 0) {
        searchResults.classList.add('no-results');
        searchResults.textContent = `No projects found for "${query}"`;
    } else {
        searchResults.classList.remove('no-results');
        searchResults.textContent = `Found ${resultCount} project${resultCount !== 1 ? 's' : ''} for "${query}"`;
    }
}

// Clear search
function clearSearch() {
    if (!projectSearch) return;
    
    projectSearch.value = '';
    currentSearchQuery = '';
    
    if (clearSearchBtn) {
        clearSearchBtn.style.display = 'none';
    }
    
    if (searchResults) {
        searchResults.classList.remove('visible', 'no-results');
    }
    
    // Display projects based on current category filter
    const filtered = filterProjectsByCategory();
    displayProjects(filtered);
}

// Initialize mobile enhancements
function initializeMobileEnhancements() {
    // Add touch feedback for mobile devices
    addTouchFeedback();
    
    // Improve mobile navigation
    enhanceMobileNavigation();
    
    // Add swipe gestures for project modal gallery
    addSwipeGestures();
    
    // Optimize scroll behavior for mobile
    optimizeMobileScroll();
}

// Add touch feedback for interactive elements
function addTouchFeedback() {
    // Add touch feedback to project cards
    document.addEventListener('touchstart', (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            projectCard.style.transition = 'transform 0.1s ease';
        }
    });
    
    document.addEventListener('touchend', (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            setTimeout(() => {
                projectCard.style.transition = '';
            }, 100);
        }
    });
}

// Enhance mobile navigation
function enhanceMobileNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        // Add haptic feedback simulation
        mobileMenuToggle.addEventListener('touchstart', () => {
            if (navigator.vibrate) {
                navigator.vibrate(10); // Short vibration
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('touchstart', (e) => {
            if (mobileMenu.classList.contains('active') && 
                !mobileMenu.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Add swipe gestures for modal gallery
function addSwipeGestures() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    let startX = 0;
    let startY = 0;
    let isSwipe = false;
    
    modal.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwipe = true;
    });
    
    modal.addEventListener('touchmove', (e) => {
        if (!isSwipe) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        
        // If vertical scroll is more prominent, don't treat as swipe
        if (diffY > diffX) {
            isSwipe = false;
        }
    });
    
    modal.addEventListener('touchend', (e) => {
        if (!isSwipe) return;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                // Swipe left - next image
                nextModalImage();
            } else {
                // Swipe right - previous image
                prevModalImage();
            }
        }
        
        isSwipe = false;
    });
}

// Navigate to next modal image
function nextModalImage() {
    if (modalGalleryImages && modalGalleryImages.length > 1) {
        modalGalleryIndex = (modalGalleryIndex + 1) % modalGalleryImages.length;
        renderModalGallery();
    }
}

// Navigate to previous modal image
function prevModalImage() {
    if (modalGalleryImages && modalGalleryImages.length > 1) {
        modalGalleryIndex = modalGalleryIndex === 0 ? modalGalleryImages.length - 1 : modalGalleryIndex - 1;
        renderModalGallery();
    }
}

// Optimize scroll behavior for mobile
function optimizeMobileScroll() {
    // Throttle scroll events for better performance
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
            toggleBackToTop();
        }, 10);
    }, { passive: true });
    
    // Add momentum scrolling for iOS
    document.body.style.webkitOverflowScrolling = 'touch';
}

// Enhanced mobile search with better UX
function enhanceMobileSearch() {
    if (!projectSearch) return;
    
    // Add search suggestions or recent searches could go here
    // For now, we'll add better mobile keyboard handling
    
    projectSearch.addEventListener('focus', () => {
        // Scroll search into view on mobile
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                projectSearch.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 300); // Wait for keyboard to appear
        }
    });
    
    // Handle mobile keyboard done/search button
    projectSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            projectSearch.blur(); // Hide keyboard
        }
    });
}

// Filter and display projects based on active filters
function filterAndDisplayProjects() {
    // If there's an active search, use search results
    if (currentSearchQuery) {
        const searchResults = searchProjects(currentSearchQuery);
        displayProjects(searchResults);
        updateSearchResults(currentSearchQuery, searchResults.length);
        return;
    }
    
    // Otherwise, filter by category
    const filtered = filterProjectsByCategory();
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
    modalTags.innerHTML = '';
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
