import React, { useState, useEffect } from 'react';


const Home = () => {
  const titles = [
    'Aspiring Software Engineer',
    'Data Analytics Enthusiast',
    'Web Developer'
  ];

  const [currentText, setCurrentText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = titles[titleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === activeWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px-4rem)] gap-12 py-8 page-fade-in">
      {/* Hero Left Content */}
      <div className="flex-1.2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
        <span className="text-[14px] font-semibold text-brand-blue mb-2 uppercase tracking-[2px] font-heading">
          Welcome to my Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight text-text-primary font-heading">
          Kaidampally Sai Kumar
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-secondary mb-6 min-h-[40px] flex items-center font-heading">
          <span>{currentText}</span>
          <span className="font-normal text-brand-blue animate-blink ml-1">|</span>
        </div>
        <p className="text-base md:text-lg text-text-secondary mb-8 max-w-[580px] leading-relaxed">
          Aspiring Software Engineer and Data Analytics professional with a BTech in AI & Data Science (CGPA 8.5). 
          Passionate about building responsive web applications and turning raw data into actionable insights.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:shadow-brand-blue/20 hover:-translate-y-[2px] active:translate-y-0 px-6 py-3 rounded-xl font-bold flex items-center gap-2 cursor-pointer transition-all duration-300"
          >
            View My Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="/resume.pdf" download="Kaidampally_Sai_Kumar_Resume.pdf" className="bg-bg-secondary text-text-primary border border-border-custom shadow-md hover:border-text-muted hover:bg-bg-tertiary hover:-translate-y-[2px] active:translate-y-0 px-6 py-3 rounded-xl font-bold flex items-center gap-2 cursor-pointer transition-all duration-300">
            Download Resume
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>

      {/* Hero Right Visual Column */}
      <div className="flex-0.8 flex justify-center items-center relative w-full lg:w-auto">
        <div className="relative w-full max-w-[320px] md:max-w-[380px] h-[320px] md:h-[380px] flex justify-center items-center">
          <div className="absolute w-full h-full bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 rounded-full animate-blob-morph z-0"></div>
          <div className="relative z-10 w-[85%] h-[85%] border border-border-custom shadow-2xl rounded-2xl p-6 flex flex-col justify-between animate-float transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div>
              <div className="flex gap-1.5 border-b border-border-custom pb-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
              </div>
              <div className="font-mono text-xs text-text-secondary flex flex-col gap-2">
                <div className="flex gap-2">
                  <span className="text-[#ec4899]">const</span>
                  <span>developer = &#123;</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span>name:</span>
                  <span className="text-[#10b981]">'Sai Kumar'</span>,
                </div>
                <div className="flex gap-2 pl-4">
                  <span>skills: [</span>
                  <span className="text-[#10b981]">'React'</span>,
                  <span className="text-[#10b981]">'Python'</span>,
                  <span className="text-[#10b981]">'SQL'</span>
                  <span>]</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span>passion:</span>
                  <span className="text-[#10b981]">'Data to insights'</span>
                </div>
                <div>
                  <span>&#125;;</span>
                </div>
                <div className="text-text-muted mt-2">
                  // Code meets Data Analytics
                </div>
              </div>
            </div>
            
            {/* Visual Analytics Chart mockup */}
            <div className="mt-4 h-20 border-t border-border-custom pt-4 flex items-end gap-2 justify-around">
              <div className="w-[15%] bg-gradient-to-t from-brand-blue to-brand-cyan rounded-t-sm h-[40%]"></div>
              <div className="w-[15%] bg-gradient-to-t from-brand-blue to-brand-cyan rounded-t-sm h-[65%]"></div>
              <div className="w-[15%] bg-gradient-to-t from-brand-blue to-brand-cyan rounded-t-sm h-[90%]"></div>
              <div className="w-[15%] bg-gradient-to-t from-brand-blue to-brand-cyan rounded-t-sm h-[55%]"></div>
              <div className="w-[15%] bg-gradient-to-t from-brand-blue to-brand-cyan rounded-t-sm h-[75%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
