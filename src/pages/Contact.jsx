import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    fetch("https://formsubmit.co/ajax/saikumarkaidampally@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Portfolio Contact Form Submission",
        message: formData.message
      })
    })
      .then((res) => {
        if (res.ok) {
          setStatus('success');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          setStatus('error');
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
      });
  };

  return (
    <div className="flex flex-col gap-8 page-fade-in">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">Contact Me</h2>
        <div className="w-[60px] h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mb-4"></div>
        <p className="text-text-secondary max-w-[600px] mx-auto text-[15px] md:text-base">
          Feel free to reach out for internship opportunities, collaborations, or questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start w-full">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-5 w-full">
          <a href="mailto:saikumarkaidampally@gmail.com" className="flex items-center gap-4 bg-bg-secondary border border-border-custom rounded-2xl p-5 shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Email Me</span>
              <span className="text-[14px] md:text-[15px] font-semibold text-text-primary">saikumarkaidampally@gmail.com</span>
            </div>
          </a>

          <a href="tel:+919959378045" className="flex items-center gap-4 bg-bg-secondary border border-border-custom rounded-2xl p-5 shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Call Me</span>
              <span className="text-[14px] md:text-[15px] font-semibold text-text-primary">+91 9959378045</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/ksai22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-bg-secondary border border-border-custom rounded-2xl p-5 shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">LinkedIn</span>
              <span className="text-[14px] md:text-[15px] font-semibold text-text-primary">linkedin.com/in/ksai22</span>
            </div>
          </a>

          <a href="https://github.com/SaiKaidampally" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-bg-secondary border border-border-custom rounded-2xl p-5 shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">GitHub</span>
              <span className="text-[14px] md:text-[15px] font-semibold text-text-primary">github.com/SaiKaidampally</span>
            </div>
          </a>
        </div>

        {/* Message Form Wrapper */}
        <div className="w-full bg-bg-secondary border border-border-custom rounded-2xl p-6 md:p-8 shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[13px] font-semibold text-text-secondary">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-bg-primary border border-border-custom text-text-primary rounded-xl px-4 py-3 text-[14px] transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-bg-secondary outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[13px] font-semibold text-text-secondary">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-bg-primary border border-border-custom text-text-primary rounded-xl px-4 py-3 text-[14px] transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-bg-secondary outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-[13px] font-semibold text-text-secondary">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-bg-primary border border-border-custom text-text-primary rounded-xl px-4 py-3 text-[14px] transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-bg-secondary outline-none"
                placeholder="Job Opportunity / Question"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[13px] font-semibold text-text-secondary">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-bg-primary border border-border-custom text-text-primary rounded-xl px-4 py-3 text-[14px] transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-bg-secondary outline-none resize-y min-h-[120px]"
                placeholder="Hi Sai, I'd love to talk about..."
                required
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="py-3 px-4 rounded-xl text-center text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/25">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className="py-3 px-4 rounded-xl text-center text-xs font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/25">
                Please fill in all the required fields correctly.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:shadow-brand-blue/20 hover:-translate-y-[2px] active:translate-y-0 px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
