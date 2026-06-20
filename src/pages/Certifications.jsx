import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera (Google)',
      year: '2025',
      skills: 'Data Cleaning, Data Visualization, SQL, R programming, Tableau, Dashboarding',
      credentialUrl: 'https://coursera.org'
    },
    {
      title: 'Software Developer - Product Development',
      issuer: 'PMKVY (Pradhan Mantri Kaushal Vikas Yojana)',
      year: '2025',
      skills: 'Product lifecycle, Software programming fundamentals, Database integration, QA',
      credentialUrl: '#'
    }
  ];

  return (
    <div className="flex flex-col gap-8 page-fade-in">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">Certifications</h2>
        <div className="w-[60px] h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mb-4"></div>
        <p className="text-text-secondary max-w-[600px] mx-auto text-[15px] md:text-base">
          Verified professional credentials demonstrating my skills in software and data analytics.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {certifications.map((cert, idx) => (
          <div key={idx} className="group bg-bg-secondary border border-border-custom rounded-2xl p-6 shadow-md flex gap-4 transition-all duration-300 hover:translate-y-[-5px] hover:border-brand-blue hover:shadow-lg">
            <div className="flex-shrink-0 w-[55px] h-[55px] rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-[6deg] group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan group-hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            
            <div className="flex flex-col gap-1.5 flex-1">
              <h3 className="text-base md:text-[17px] font-bold text-text-primary font-heading leading-snug">
                {cert.title}
              </h3>
              <span className="text-[13px] text-text-secondary font-semibold">
                {cert.issuer}
              </span>
              <p className="text-text-secondary text-[13px] leading-relaxed">
                <strong>Skills:</strong> {cert.skills}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-custom">
                <span className="text-[11px] text-text-muted font-semibold">
                  Issued: {cert.year}
                </span>
                {cert.credentialUrl !== '#' && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-blue hover:underline"
                  >
                    Verify Credential
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
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

export default Certifications;
