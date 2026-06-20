import React from 'react';
import avatarImg from '../assets/professional_avatar.png';

const About = () => {
  return (
    <div className="flex flex-col gap-12 page-fade-in">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">About Me</h2>
        <div className="w-[60px] h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mb-4"></div>
        <p className="text-text-secondary max-w-[600px] mx-auto text-[15px] md:text-base">
          Get to know my professional background, academic foundation, and core values.
        </p>
      </div>

      {/* Main Info Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* Avatar Photo Frame */}
        <div className="flex justify-center relative group">
          <div className="relative w-[280px] md:w-[320px] h-[280px] md:h-[320px] p-2.5 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:rotate-[1deg] group-hover:shadow-2xl z-10">
            <img 
              src={avatarImg} 
              alt="Kaidampally Sai Kumar" 
              className="w-full h-full object-cover rounded-xl bg-bg-secondary" 
            />
          </div>
          <div className="absolute top-[-10px] left-[-10px] w-full h-full border-2 border-dashed border-text-muted rounded-2xl z-0 opacity-50 pointer-events-none transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>

        {/* Text details */}
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-text-primary font-heading">
            Aspiring Software Engineer & Data Analytics Professional
          </h3>
          <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
            I am an ambitious tech enthusiast pursuing a Bachelor of Technology in <span className="text-brand-blue font-semibold">Artificial Intelligence & Data Science</span> (CGPA 8.5) from Guru Nanak Institutions Technical Campus. 
          </p>
          <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
            With hands-on experience across full-stack technologies like <span className="text-brand-blue font-semibold">React.js</span> and data analytics libraries like <span className="text-brand-blue font-semibold">Python, MySQL, Power BI, and Excel</span>, I love bridging the gap between web development and data-driven analysis. 
          </p>
          <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
            I have completed multiple internships, including Web Development roles at <span className="text-brand-blue font-semibold">EY GDS & AICTE</span> and a Data Analytics internship at <span className="text-brand-blue font-semibold">Infotact Solutions</span>. I am passionate about building responsive, user-friendly applications and extracting clear, actionable business strategies from raw datasets.
          </p>

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4 bg-bg-secondary border border-border-custom rounded-2xl shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue hover:shadow-lg">
              <div className="text-2xl md:text-3xl font-extrabold font-heading bg-gradient-to-br from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-1">
                8.5
              </div>
              <div className="text-[10px] md:text-xs text-text-secondary font-bold uppercase tracking-wider">
                BTech CGPA
              </div>
            </div>
            <div className="text-center p-4 bg-bg-secondary border border-border-custom rounded-2xl shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue hover:shadow-lg">
              <div className="text-2xl md:text-3xl font-extrabold font-heading bg-gradient-to-br from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-1">
                2+
              </div>
              <div className="text-[10px] md:text-xs text-text-secondary font-bold uppercase tracking-wider">
                Internships
              </div>
            </div>
            <div className="text-center p-4 bg-bg-secondary border border-border-custom rounded-2xl shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue hover:shadow-lg">
              <div className="text-2xl md:text-3xl font-extrabold font-heading bg-gradient-to-br from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-1">
                7+
              </div>
              <div className="text-[10px] md:text-xs text-text-secondary font-bold uppercase tracking-wider">
                Projects Built
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Cards Section */}
      <div className="mt-8">
        <h3 className="text-center text-xl md:text-2xl font-bold text-text-primary mb-8 font-heading">
          What I Drive For
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bg-secondary border border-border-custom rounded-2xl p-6 text-center shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:border-brand-blue hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary font-heading">Software Engineering</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Writing clean, modular, and reusable code. Designing responsive frontend layouts that deliver seamless user interactions.
            </p>
          </div>

          <div className="bg-bg-secondary border border-border-custom rounded-2xl p-6 text-center shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:border-brand-blue hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary font-heading">Data Analytics</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Conducting exploratory data analysis to isolate trends, creating dashboards to model KPIs, and enabling data-driven inventory and business decisions.
            </p>
          </div>

          <div className="bg-bg-secondary border border-border-custom rounded-2xl p-6 text-center shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:border-brand-blue hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" y1="12" x2="18" y2="12"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="18"></line>
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary font-heading">Agile Collaborator</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Experienced with Agile practices and Scrum methodologies. Ready to cooperate effectively in multi-disciplinary teams to deliver software sprints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
