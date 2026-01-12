// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isHidden = mobileMenu.classList.contains('translate-y-full');
    if (isHidden) {
        mobileMenu.classList.remove('translate-y-full');
        mobileMenu.classList.add('translate-y-0');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('translate-y-0');
        mobileMenu.classList.add('translate-y-full');
        document.body.style.overflow = '';
    }
}

menuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-y-0');
        mobileMenu.classList.add('translate-y-full');
        document.body.style.overflow = '';
    });
});

// Scroll reveal logic
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.querySelector('nav');

    if (currentScroll > 100) {
        navbar.classList.add('py-4');
        navbar.classList.remove('py-8');
    } else {
        navbar.classList.add('py-8');
        navbar.classList.remove('py-4');
    }
    lastScroll = currentScroll;
});

// Modal Logic
const modal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalPanel = document.getElementById('modal-panel');

const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalTags = document.getElementById('modal-tags');
const modalDescription = document.getElementById('modal-description');

// Project Data
const projects = {
    'goa-project': {
        title: 'Goa Higher Education Dashboard',
        image: 'images/goa_hse.png',
        tags: ['Education', 'Power BI', 'Data Analytics', 'Government'],
        github: 'https://github.com/alanjoseph77/Dashboard-for-NAAC-AISHE',
        description: `
            <p class="mb-6">Cleaned and processed state-level AISHE datasets to visualize Gross Enrollment Ratios. Engineered Power BI reporting solutions for the Govt. of Goa, reducing manual reporting effort by 40%.</p>
            <p>Conducted data analytics workshops on the insights derived, helping stakeholders understand key performance indicators and trends in higher education across the state.</p>
        `
    },
    'bmw-project': {
        title: 'BMW Parts Inventory System',
        image: 'images/bmw1.png',
        tags: ['Automotive', 'Power BI', 'SQL', 'Inventory Mgmt'],
        github: 'https://github.com/alanjoseph77/BMW-Vehicle-Parts-Inventory-System',
        description: `
            <p class="mb-6">Developed an automated inventory dashboard with predictive stock alerts and supplier scorecards. This system streamlined the tracking of thousands of parts, reducing stockouts and overstock situations.</p>
            <p class="mb-8">Utilized Power BI, Excel, and SQL to create a unified view of inventory health, allowing for proactive decision-making and improved supply chain efficiency.</p>
            
            <h3 class="text-xl font-bold uppercase mb-4 tracking-widest font-display">Dashboard Views</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img src="images/bmw1.png" alt="Dashboard View 1" class="rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
                <img src="images/bmw2.png" alt="Dashboard View 2" class="rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
                <img src="images/bmw3.png" alt="Dashboard View 3" class="rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
                <img src="images/bmw5.png" alt="Dashboard View 4" class="rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
            </div>
        `
    },
    'sales-project': {
        title: 'Sales Performance Dashboard',
        image: 'images/sales.png',
        tags: ['Retail', 'Power BI', 'DAX', 'SQL'],
        description: `
            <p class="mb-6">Built a versatile KPI tracking system for revenue forecasting. This dashboard aggregates sales data from multiple regions to provide real-time performance insights.</p>
            <p>Utilized Advanced DAX for complex calculations and SQL for efficient data modeling, resulting in a 15% improvement in regional resource allocation.</p>
        `
    },
    'hr-project': {
        title: 'HR Employee Analytics',
        image: 'images/hr_dashboard.png',
        tags: ['HR', 'Power BI', 'Excel', 'Data Visualization'],
        github: 'https://github.com/alanjoseph77/PowerBI-Excel',
        description: `
            <p class="mb-6">A comprehensive HR dashboard analyzing employee attrition, departmental distribution, and salary trends. This project provides a clear view of workforce metrics, aiding in retention strategies and resource planning.</p>
            <p>Features interactive visualizations for easy exploration of data by department, job role, and other key demographics.</p>
        `
    },
    'air-quality-project': {
        title: 'Air Quality Analysis',
        image: 'images/air_quality.png',
        tags: ['Python', 'Pandas', 'EDA', 'Environmental'],
        github: 'https://github.com/alanjoseph77/air-quality-analysis',
        notebook: 'resume/eda_visualizations.ipynb',
        description: `
            <p class="mb-6">Conducted a comprehensive analysis of air quality data across 195 cities. Identified critical pollution hotspots (e.g., Pampore, Delhi) and temporal trends showing peak pollution in December.</p>
            <p>Utilized Python (Pandas) for data cleaning, correlation analysis, and anomaly detection, revealing a strong correlation between pollutant metrics and identifying severe pollution events.</p>
            <p class="mt-4 text-xs opacity-60">Dataset Source: <a href="https://www.data.gov.in/" target="_blank" class="underline hover:text-black">data.gov.in</a></p>
        `
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalDescription.innerHTML = project.description;

    // Add GitHub Button if link exists
    if (project.github) {
        const btnHtml = `
            <div class="mt-8">
                <a href="${project.github}" target="_blank" class="inline-flex items-center space-x-3 px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold tracking-[0.2em] hover:scale-105 transition-transform uppercase shadow-xl hover:shadow-2xl">
                    <i data-lucide="github" class="w-4 h-4"></i>
                    <span>View Code</span>
                </a>
            </div>
        `;
        modalDescription.innerHTML += btnHtml;
        lucide.createIcons();
    }

    // Add Notebook Button if link exists
    if (project.notebook) {
        const btnHtml = `
            <div class="mt-8">
                <a href="${project.notebook}" download target="_blank" class="inline-flex items-center space-x-3 px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold tracking-[0.2em] hover:scale-105 transition-transform uppercase shadow-xl hover:shadow-2xl">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    <span>View Notebook</span>
                </a>
            </div>
        `;
        modalDescription.innerHTML += btnHtml;
        lucide.createIcons();
    }

    // Clear and add tags
    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'px-4 py-2 bg-white border border-black/10 rounded-full text-[10px] font-bold tracking-widest text-black shadow-sm uppercase';
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    // Show modal
    modal.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalPanel.classList.remove('translate-x-full');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('opacity-0');
    modalPanel.classList.add('translate-x-full');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Event Listeners
document.getElementById('goa-project').addEventListener('click', () => openModal('goa-project'));
document.getElementById('bmw-project').addEventListener('click', () => openModal('bmw-project'));
document.getElementById('sales-project').addEventListener('click', () => openModal('sales-project'));
document.getElementById('hr-project').addEventListener('click', () => openModal('hr-project'));
document.getElementById('air-quality-project').addEventListener('click', () => openModal('air-quality-project'));

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
