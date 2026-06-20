import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence & Data Science',
      institution: 'Guru Nanak Institutions Technical Campus',
      duration: '2022 – 2026',
      gradeType: 'CGPA',
      grade: '8.5 / 10',
      details: 'Focusing on core fields like Machine Learning, Deep Learning, SQL Relational Schemas, Data Analysis using Python, and Software Architecture.'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Telangana Model School & Junior College – Raikode',
      duration: '2020 – 2022',
      gradeType: 'Percentage',
      grade: '92%',
      details: 'Studied Mathematics, Physics, and Chemistry (MPC).'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Sri Vivekananda High School – Raikode',
      duration: '2020',
      gradeType: 'CGPA',
      grade: '10.0 / 10.0',
      details: 'Completed secondary schooling with absolute top scores across all subjects.'
    }
  ];

  return (
    <div className="flex flex-col gap-8 page-fade-in">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">Education</h2>
        <div className="w-[60px] h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mb-4"></div>
        <p className="text-text-secondary max-w-[600px] mx-auto text-[15px] md:text-base">
          My academic history, foundational fields of study, and standard credentials.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-[800px] mx-auto py-4 w-full">
        {/* Vertical tracking line */}
        <div className="absolute top-0 bottom-0 left-[20px] sm:left-[31px] w-[2px] bg-border-custom z-0"></div>

        {educationData.map((edu, idx) => (
          <div key={idx} className="relative pl-12 sm:pl-20 mb-12 last:mb-0 group">
            {/* Timeline Dot cap */}
            <div className="absolute left-[5px] sm:left-[16px] top-[8px] w-[32px] h-[32px] rounded-full bg-bg-primary border-[4px] border-brand-blue z-10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-blue group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-blue/20">
              <svg className="text-brand-blue group-hover:text-white transition-colors duration-300" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
            </div>

            {/* Timeline Card */}
            <div className="bg-bg-secondary border border-border-custom rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:border-brand-blue group-hover:shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                <div className="flex flex-col">
                  <h3 className="text-[16px] md:text-lg font-bold text-text-primary font-heading leading-tight">
                    {edu.degree}
                  </h3>
                  <span className="text-[14px] text-text-secondary font-medium mt-1">
                    {edu.institution}
                  </span>
                </div>
                <span className="bg-brand-blue/10 text-brand-blue text-[11px] font-semibold px-3.5 py-1.5 rounded-full border border-brand-blue/10 self-start sm:self-center whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-4">{edu.details}</p>
              
              <div className="flex justify-between items-center border-t border-dashed border-border-custom pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">
                    Academic {edu.gradeType}
                  </span>
                  <span className="text-xl md:text-2xl font-extrabold text-brand-blue font-heading mt-0.5">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
