import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      title: 'Personal Portfolio Website',
      category: 'web',
      categoryLabel: 'Web App',
      description: 'A premium, responsive, single-page portfolio website featuring smooth section scrolling, dynamic ScrollSpy navigation, dark/light theme switching, and real email form integration.',
      technologies: ['React.js', 'Tailwind CSS v4.0', 'Vite', 'FormSubmit API', 'ScrollSpy'],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
          <path d="M12 17v4"></path>
          <path d="M8 21h8"></path>
        </svg>
      ),
      githubLink: 'https://github.com/SaiKaidampally',
      demoLink: '#home'
    },
    {
      title: 'Notes App',
      category: 'web',
      categoryLabel: 'Web App',
      description: 'A responsive and modern notes management application featuring real-time add, search, and delete operations. Built with a clean interface for optimal daily task planning.',
      technologies: ['React.js', 'Tailwind CSS', 'Vite'],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      githubLink: 'https://github.com/SaiKaidampally',
      demoLink: 'https://notes-app-alpha-ruby.vercel.app/'
    },
    {
      title: 'Rock-Paper-Scissors',
      category: 'web',
      categoryLabel: 'Web Game',
      description: 'An interactive player-vs-computer game featuring animated round transitions, clean animations, and dynamic high-score tracking.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16.2 7.8l-2 2-2.2-2.2a2.1 2.1 0 1 0-3 3l2.2 2.2-2 2"></path>
          <path d="M12 18H6"></path>
        </svg>
      ),
      githubLink: 'https://github.com/SaiKaidampally',
      demoLink: 'https://rock-paper-scissor-game-html-css-js.vercel.app/'
    },
    {
      title: 'Coffee Store Sales Dashboard',
      category: 'data',
      categoryLabel: 'Data Analytics',
      description: 'Exploratory data analysis project executing cleaning and KPI visualization on coffee shop sales. Designed to support inventory logistics and product bundling suggestions.',
      technologies: ['Python', 'Pandas', 'Matplotlib'],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
      githubLink: 'https://github.com/SaiKaidampally',
      demoLink: '#'
    },
    {
      title: 'TATA IPL 2025 Dashboard',
      category: 'data',
      categoryLabel: 'Data Analytics',
      description: 'Interactive analytical report parsing IPL ball-by-ball datasets. Integrates DAX queries to show batting/bowling averages, run rate comparisons, and MVP players.',
      technologies: ['Power BI', 'DAX', 'Excel'],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <circle cx="12" cy="12" r="10" style={{ opacity: 0.15 }}></circle>
        </svg>
      ),
      githubLink: 'https://github.com/SaiKaidampally',
      demoLink: '#'
    },
    {
      title: 'Library Management System',
      category: 'database',
      categoryLabel: 'Database',
      description: 'Relational database schema modeling book tracking operations. Designed and optimized using custom stored procedures, data assertions, and table audit triggers.',
      technologies: ['MySQL'],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      githubLink: 'https://github.com/SaiKaidampally',
      demoLink: '#'
    },
    {
      title: 'Insurance Fraud Detection',
      category: 'data',
      categoryLabel: 'Data & ML',
      description: 'Machine learning model addressing transaction imbalance. Integrates SMOTE oversampling and AdaBoost ensemble model to detect fraudulent claims with high precision.',
      technologies: ['Python', 'Scikit-learn', 'SMOTE', 'AdaBoost'],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      githubLink: 'https://github.com/SaiKaidampally',
      demoLink: '#'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="flex flex-col gap-8 page-fade-in">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">Projects</h2>
        <div className="w-[60px] h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mb-4"></div>
        <p className="text-text-secondary max-w-[600px] mx-auto text-[15px] md:text-base">
          A showcase of my projects in web development, data analysis, and database architecture.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {['all', 'web', 'data', 'database'].map((cat) => {
          const labels = {
            all: 'All Projects',
            web: 'Web Development',
            data: 'Data Science & Analytics',
            database: 'Databases'
          };
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-[14px] font-semibold rounded-full border cursor-pointer transition-all duration-300 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 hover:-translate-y-[1px] ${
                isActive
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white border-transparent shadow-md shadow-brand-blue/20'
                  : 'border-border-custom bg-bg-secondary text-text-secondary'
              }`}
            >
              {labels[cat]}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="group bg-bg-secondary border border-border-custom rounded-2xl overflow-hidden shadow-md flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-brand-blue">
            {/* Card Header Cover */}
            <div className="h-[180px] bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 relative flex items-center justify-center text-brand-blue border-b border-border-custom overflow-hidden">
              <div 
                className="absolute inset-0 opacity-15"
                style={{ 
                  backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}
              ></div>
              <div className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-[6deg]">
                {project.icon}
              </div>
              <span className="absolute top-4 right-4 bg-bg-secondary border border-border-custom text-text-secondary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {project.categoryLabel}
              </span>
            </div>

            {/* Card Details Body */}
            <div className="p-5 flex flex-col flex-1 gap-4">
              <h3 className="text-[16px] md:text-lg font-bold text-text-primary font-heading">
                {project.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="bg-bg-tertiary text-text-secondary text-[11px] font-semibold px-2.5 py-1 rounded border border-border-custom">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-border-custom pt-4 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary transition-colors duration-200 hover:text-brand-blue"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Source Code
                </a>
                {project.demoLink !== '#' && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary transition-colors duration-200 hover:text-brand-blue"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
