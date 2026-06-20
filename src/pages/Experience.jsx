import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'EDUNET Foundation (EY GDS & AICTE)',
      duration: 'Feb – Mar 2025',
      duties: [
        'Built modern, responsive web applications using HTML5, CSS3, JavaScript (ES6+), and React.js following Agile software development practices.',
        'Acquired operational exposure to backend and database architectures including Node.js, Express.js, and MongoDB.',
        'Collaborated in Scrum team structures to present project progress during review cycles.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Agile/Scrum']
    },
    {
      role: 'Data Analytics Intern',
      company: 'Infotact Solutions',
      duration: 'Feb – May 2026',
      duties: [
        'Performed Exploratory Data Analysis (EDA) on a coffee store sales dataset using Python, SQL, and Excel to discover customer purchase trends.',
        'Engineered interactive Power BI dashboards utilizing complex DAX measures to track essential store KPIs.',
        'Derived key inventory decisions and product bundling recommendations to support management planning.'
      ],
      technologies: ['Python', 'Pandas', 'MySQL', 'Excel', 'Power BI', 'DAX', 'Data Analysis']
    }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-[800px] mx-auto page-fade-in">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">Work Experience</h2>
        <div className="w-[60px] h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mb-4"></div>
        <p className="text-text-secondary max-w-[600px] mx-auto text-[15px] md:text-base">
          My professional internships in web development and data analytics roles.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative py-4 w-full">
        {/* Vertical tracking line */}
        <div className="absolute top-0 bottom-0 left-[20px] sm:left-[31px] w-[2px] bg-border-custom z-0"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-12 sm:pl-20 mb-12 last:mb-0 group">
            {/* Timeline Dot cap */}
            <div className="absolute left-[5px] sm:left-[16px] top-[8px] w-[32px] h-[32px] rounded-full bg-bg-primary border-[4px] border-brand-blue z-10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-blue group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-blue/20 text-brand-blue group-hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>

            {/* Timeline Card */}
            <div className="bg-bg-secondary border border-border-custom rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:border-brand-blue group-hover:shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                <div className="flex flex-col">
                  <h3 className="text-[16px] md:text-lg font-bold text-text-primary font-heading leading-tight">
                    {exp.role}
                  </h3>
                  <span className="text-[14px] text-text-secondary font-medium mt-1">
                    {exp.company}
                  </span>
                </div>
                <span className="bg-brand-blue/10 text-brand-blue text-[11px] font-semibold px-3.5 py-1.5 rounded-full border border-brand-blue/10 self-start sm:self-center whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              
              <ul className="flex flex-col gap-3 mb-5 list-none">
                {exp.duties.map((duty, dutyIdx) => (
                  <li key={dutyIdx} className="relative pl-5 text-[14px] text-text-secondary leading-relaxed before:content-['•'] before:absolute before:left-1 before:text-brand-blue before:text-lg before:leading-none">
                    {duty}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 border-t border-dashed border-border-custom pt-4">
                {exp.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="bg-bg-tertiary text-text-secondary text-xs font-semibold px-3 py-1 rounded border border-border-custom">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
