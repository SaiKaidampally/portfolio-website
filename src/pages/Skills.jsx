import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Programming',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      ),
      skills: ['Python', 'Java']
    },
    {
      title: 'Data Science & Libraries',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="6" y1="9" x2="6" y2="15"></line>
          <line x1="9" y1="6" x2="15" y2="6"></line>
          <line x1="18" y1="9" x2="18" y2="15"></line>
        </svg>
      ),
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn']
    },
    {
      title: 'Databases',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      skills: ['MySQL']
    },
    {
      title: 'Data Visualization',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      ),
      skills: ['Power BI', 'Excel']
    },
    {
      title: 'Tools & Platforms',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ['Git', 'GitHub', 'VS Code']
    },
    {
      title: 'Core Concepts',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      skills: ['Data Structures & Algorithms', 'OOP', 'Agile / Scrum']
    }
  ];

  return (
    <div className="flex flex-col gap-8 page-fade-in">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">Technical Skills</h2>
        <div className="w-[60px] h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mb-4"></div>
        <p className="text-text-secondary max-w-[600px] mx-auto text-[15px] md:text-base">
          A collection of libraries, programming languages, databases, and visualization tools I use.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="group bg-bg-secondary border border-border-custom rounded-2xl p-6 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:border-brand-blue hover:shadow-lg flex flex-col gap-5">
            <div className="flex items-center gap-4 border-b border-border-custom pb-4">
              <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-[6deg] group-hover:bg-brand-blue group-hover:text-white">
                {category.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-text-primary font-heading">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="bg-bg-tertiary text-text-secondary text-[13px] font-semibold px-3.5 py-1.5 rounded-full border border-border-custom transition-all duration-200 cursor-default hover:bg-brand-blue/10 hover:text-brand-blue hover:border-brand-blue hover:scale-105">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
