import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  // Theme loader on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // ScrollSpy scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Trigger threshold offset

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLinkClass = (id) => {
    const isActive = activeSection === id;
    return `text-[15px] font-semibold px-4 py-2 rounded-md transition-all duration-200 cursor-pointer w-full lg:w-auto block lg:inline-block ${
      isActive 
        ? 'text-nav-text-active bg-white/10' 
        : 'text-nav-text hover:text-nav-text-hover hover:bg-white/5'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-nav-bg border-b border-nav-border z-50 transition-all duration-300">
      <div className="max-w-[1200px] h-full mx-auto px-6 flex items-center justify-between">
        {/* Branding Logo */}
        <a href="#home" className="font-heading text-xl font-extrabold text-white flex flex-col" onClick={(e) => handleNavClick(e, 'home')}>
          <span>Sai Kumar</span>
          <span className="text-[10px] font-body font-medium text-nav-text mt-[-2px] tracking-wide">Portfolio</span>
        </a>

        {/* Menu Links */}
        <ul className={`fixed lg:static top-[80px] ${isOpen ? 'right-0' : 'right-[-100%]'} lg:right-auto w-[280px] lg:w-auto h-[calc(100vh-80px)] lg:h-auto bg-nav-bg lg:bg-transparent border-l lg:border-none border-nav-border flex flex-col lg:flex-row items-start lg:items-center p-8 lg:p-0 gap-6 lg:gap-2 transition-all duration-300 shadow-xl lg:shadow-none z-40 list-none`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={getLinkClass(item.id)} 
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions Button Group */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-nav-border rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/10 text-nav-text hover:text-white hover:scale-105"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              // Moon Icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              // Sun Icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl bg-none border-none text-nav-text hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Menu Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
