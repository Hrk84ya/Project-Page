// ===== PROJECT DATA =====
const projects = [
    {
        id: 0, title: 'Bodhgaya Forex Pvt. Ltd.',
        description: 'A professional static website for Bodhgaya Forex Pvt. Ltd., a financial services company specializing in foreign exchange and currency exchange services.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        github: null, demo: 'https://bodhgayaforex.com/',
        category: 'web', badges: ['featured']
    },
    {
        id: 1, title: 'Calorie Burned Calculator',
        description: 'A simple application to calculate calories burned during various exercises based on duration and intensity.',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Calorie-Burned-Calculator', demo: null,
        category: 'web', badges: []
    },
    {
        id: 2, title: 'Facebomp Game',
        description: 'An interactive web-based game built with HTML, CSS, and JavaScript featuring engaging gameplay mechanics.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Facebomp-Game', demo: null,
        category: 'web', badges: []
    },
    {
        id: 3, title: 'House Price Predictor',
        description: 'A containerized machine learning model that predicts house prices based on various features with high accuracy.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Containerized-Machine-Learning-House-Price-Predictor', demo: null,
        category: 'ai', badges: ['featured']
    },
    {
        id: 4, title: 'Medium Article Success Predictor',
        description: 'Machine learning model that predicts the success of Medium articles based on various features and content analysis.',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Medium', demo: null,
        category: 'ai', badges: []
    },
    {
        id: 5, title: 'News Summarizer',
        description: 'Application that summarizes news articles using NLP techniques to provide concise overviews of current events.',
        image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
        github: 'https://github.com/Hrk84ya/News-Summarizer', demo: null,
        category: 'ai', badges: []
    },
    {
        id: 6, title: 'Personal Budget Tracker',
        description: 'An intuitive application for tracking personal finances, expenses, and budgeting with data visualization.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Personal-Budget-Tracker', demo: null,
        category: 'web', badges: []
    },
    {
        id: 7, title: 'Professional Business Card',
        description: 'A modern, responsive business card website built with React.js to showcase professional information and contact details.',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Professional-Business-Card', demo: null,
        category: 'web', badges: []
    },
    {
        id: 8, title: 'Stock Analysis Dashboard',
        description: 'Interactive dashboard for analyzing stock market data with real-time updates and visualizations using Python and Streamlit.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Stock-Analysis-Dashboard', demo: null,
        category: 'data', badges: []
    },
    {
        id: 9, title: 'Tathagat Tour and Travels',
        description: 'A modern, responsive website for Tathagat Tour and Travels, showcasing travel packages, services, and booking information.',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
        github: null, demo: 'https://www.tathagattour.com/',
        category: 'web', badges: ['featured']
    },
    {
        id: 10, title: 'TL-DR: Article Summarizer',
        description: 'A web application that generates concise, intelligent summaries of any article with a single click using advanced NLP.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        github: 'https://github.com/Hrk84ya/TL-DR', demo: null,
        category: 'ai', badges: ['featured']
    },
    {
        id: 11, title: 'Weather Vista',
        description: 'A weather reporting application that provides detailed forecasts and weather information with a clean, intuitive interface.',
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
        github: 'https://github.com/Hrk84ya/Weather-Vista', demo: null,
        category: 'web', badges: []
    }
];

// ===== DOM ELEMENTS =====
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
const scrollProgress = document.getElementById('scrollProgress');
const siteHeader = document.getElementById('siteHeader');
const timelineNav = document.getElementById('timelineNav');
const projectsContainer = document.getElementById('projectsContainer');
const backToTopBtn = document.getElementById('backToTop');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// ===== CUSTOM CURSOR =====
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    if (cursorFollower) {
        cursorFollower.style.left = cursorX + 'px';
        cursorFollower.style.top = cursorY + 'px';
    }
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on interactive elements
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .project-image-wrapper')) {
        cursorFollower?.classList.add('hovering');
    }
});
document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .project-image-wrapper')) {
        cursorFollower?.classList.remove('hovering');
    }
});

// ===== GENERATE PROJECT SECTIONS =====
function generateProjects() {
    projects.forEach((project, index) => {
        const section = document.createElement('section');
        section.className = 'project-section';
        section.id = `project-${index}`;
        section.setAttribute('data-index', index);

        const badgesHTML = project.badges.length
            ? `<div class="project-badges-row">${project.badges.map(b =>
                `<span class="badge ${b}">${b}</span>`).join('')}</div>`
            : '';

        const actionsHTML = [];
        if (project.demo) {
            actionsHTML.push(`<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="action-btn primary">
                <i class="fas fa-external-link-alt"></i> View Live
            </a>`);
        }
        if (project.github) {
            actionsHTML.push(`<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="action-btn secondary">
                <i class="fab fa-github"></i> Source Code
            </a>`);
        }

        section.innerHTML = `
            <div class="project-layout">
                <div class="project-visual">
                    <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
                    <div class="project-image-wrapper">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="project-image-overlay"></div>
                    </div>
                </div>
                <div class="project-info">
                    <span class="project-category">${project.category}</span>
                    <h2 class="project-title">${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    ${badgesHTML}
                    <div class="project-actions">${actionsHTML.join('')}</div>
                </div>
            </div>
        `;

        projectsContainer.appendChild(section);
    });
}

// ===== GENERATE TIMELINE =====
function generateTimeline() {
    projects.forEach((project, index) => {
        if (index > 0) {
            const line = document.createElement('div');
            line.className = 'timeline-line';
            timelineNav.appendChild(line);
        }
        const dot = document.createElement('button');
        dot.className = 'timeline-dot';
        dot.setAttribute('aria-label', `Go to ${project.title}`);
        dot.innerHTML = `<span class="timeline-dot-label">${project.title}</span>`;
        dot.addEventListener('click', () => {
            document.getElementById(`project-${index}`)?.scrollIntoView({ behavior: 'smooth' });
        });
        timelineNav.appendChild(dot);
    });
}

// ===== SCROLL OBSERVER (Intersection Observer for reveal) =====
function initScrollObserver() {
    const sections = document.querySelectorAll('.project-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                updateTimelineDot(Number(entry.target.dataset.index));
            }
        });
    }, { threshold: 0.25 });

    sections.forEach(section => observer.observe(section));
}

function updateTimelineDot(activeIndex) {
    const dots = timelineNav.querySelectorAll('.timeline-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
    });
}

// ===== PARALLAX ON SCROLL =====
function initParallax() {
    const layers = document.querySelectorAll('.parallax-layer');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        layers.forEach(layer => {
            const speed = parseFloat(layer.dataset.speed) || 0.1;
            layer.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }, { passive: true });
}

// ===== SCROLL PROGRESS BAR =====
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = progress + '%';
}

// ===== HEADER SCROLL EFFECT =====
function updateHeader() {
    siteHeader?.classList.toggle('scrolled', window.pageYOffset > 80);
}

// ===== TIMELINE VISIBILITY =====
function updateTimelineVisibility() {
    const heroBottom = document.getElementById('hero')?.getBoundingClientRect().bottom || 0;
    timelineNav?.classList.toggle('visible', heroBottom < 0);
}

// ===== BACK TO TOP =====
function updateBackToTop() {
    backToTopBtn?.classList.toggle('visible', window.pageYOffset > 500);
}

backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== MOBILE MENU =====
menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});

mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle?.classList.remove('active');
        mobileMenu?.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===== COMBINED SCROLL HANDLER =====
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateScrollProgress();
            updateHeader();
            updateTimelineVisibility();
            updateBackToTop();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ===== FOOTER YEAR =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    generateProjects();
    generateTimeline();
    initScrollObserver();
    initParallax();
    updateScrollProgress();
    updateHeader();
});
