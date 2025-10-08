/* global React, ReactDOM */

const { useEffect, useState, useMemo } = React;

const ROUTES = {
  home: 'Home',
  projects: 'Projects',
  resume: 'Resume',
  experience: 'Experience',
  contacts: 'Contacts'
};

function useHashRoute(defaultRoute = 'home') {
  const getRouteFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return ROUTES[hash] ? hash : defaultRoute;
  };

  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to) => {
    if (!ROUTES[to]) return;
    if (window.location.hash !== `#${to}`) {
      window.location.hash = `#${to}`;
    }
  };

  return [route, navigate];
}

function NavBar({ route, onNavigate }) {
  return (
    <nav className="site-nav">
      <div className="nav-inner container">
        <div className="nav-links">
          <a className={`nav-logo ${route === 'home' ? 'active' : ''}`} href="#home" aria-label="Home" onClick={(e)=>{e.preventDefault(); onNavigate('home');}}>
            <i className="fa-solid fa-house"></i>
          </a>
          <a className={`nav-link ${route === 'projects' ? 'active' : ''}`} href="#projects" onClick={(e)=>{e.preventDefault(); onNavigate('projects');}}>Projects</a>
          <a className={`nav-link ${route === 'resume' ? 'active' : ''}`} href="#resume" onClick={(e)=>{e.preventDefault(); onNavigate('resume');}}>Resume</a>
          <a className={`nav-link ${route === 'experience' ? 'active' : ''}`} href="#experience" onClick={(e)=>{e.preventDefault(); onNavigate('experience');}}>Experience</a>
          <a className={`nav-link ${route === 'contacts' ? 'active' : ''}`} href="#contacts" onClick={(e)=>{e.preventDefault(); onNavigate('contacts');}}>Contacts</a>
        </div>
      </div>
    </nav>
  );
}

function PageShell({ route, children }) {
  const themeClass = useMemo(() => {
    switch (route) {
      case 'home': return 'theme-home';
      case 'projects': return 'theme-projects';
      case 'resume': return 'theme-resume';
      case 'experience': return 'theme-experience';
      case 'contacts': return 'theme-contacts';
      default: return 'theme-home';
    }
  }, [route]);

  return (
    <main className={`page-section ${themeClass}`}>
      <div className="container">
        {children}
      </div>
    </main>
  );
}

function Home() {
  return (
    <section>
      <div className="hero">
        <h1 className="hero-title">Hi, I'm Kiefer</h1>
        <p className="hero-subtitle">I'm a software engineer & creative problem solver</p>
        <p className="hero-description">I'm a junior at Boston University. I build thoughtful, reliable software. Welcome to my website.</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#projects">View my work</a>
          <a className="btn btn-secondary" href="#resume">Resume</a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      key: 'proj-1',
      title: 'Movie Search Web Application',
      description: 'A full-stack web app with a responsive UI to search and display trending movies with their ratings. Search functionality implements search debouncing and searches stored in Appwrite database.',
      tech: ['React JS', 'Rest API', 'Docker', 'Tailwind CSS', 'HTML', 'Appwrite', 'Vercel']
    },
    {
      key: 'proj-2',
      title: 'Full-Stack File Storage and Sharing Application',
      description: 'A full-stack file storage and sharing application with a responsive UI. Users can upload, download, and share files with others. Files are stored in Appwrite database.',
      tech: ['React JS', 'TypeScript', 'Rest API', 'Tailwind CSS', 'HTML', 'Vercel', 'Appwrite', 'ShadCN', 'Chart.js']
    },
    {
      key: 'proj-3',
      title: 'This Website',
      description: 'My personal website displaying my current projects, experience and information about me.',
      tech: ['React JS', 'Tailwind CSS', 'HTML', 'JavaScript']
    }
  ];

  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Here are some of the projects I've worked on in my free time!</p>
      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card" key={p.key}>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <div className="project-tech">
                {p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section>
      <h2 className="section-title">Resume</h2>
      <p className="section-subtitle">Experience, education, and skills</p>
      <div className="resume-content">
        <div className="download-card">
          <i className="fas fa-file-pdf"></i>
          <h3>Download Resume</h3>
          <p>Get a PDF copy of my complete resume</p>
          <a className="btn btn-primary" href="#" onClick={(e)=>{e.preventDefault(); alert('Link your PDF here.');}}>Download PDF</a>
        </div>
        <div>
          <div className="resume-section">
            <h3 className="resume-section-title">Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">(Tailwind) CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">Go</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">Here's a glimpse into the work and experiences that I've had in my professional journey so far.</p>
      <div className="resume-section">
        <h4 className="timeline-title">Course Assistant – Boston University</h4>
        <p className="timeline-date">August 2025 – Present</p>
        <p className="timeline-description">● Lead 370+ students to master python and programming fundamentals for CS111 through labs and office hours.</p>
        <p className="timeline-description">● Adapted teaching styles to maximize student engagement and encourage problem solving and collaboration.</p>
      </div>
      <div className="resume-section">
        <h4 className="timeline-title">Returning IT ServiceDesk Engineer Intern – Liberty Caribbean ICT</h4>
        <p className="timeline-date">May 2025 – August 2025</p>
        <p className="timeline-description">● Migrated company information to a new credential management system, reducing costs by $200/mo.</p>
        <p className="timeline-description">● Implemented AI workflow automation with a Linux Virtual Machine and n8n, utilizing scripts and APIs to streamline ticket handling and save 30 seconds per ticket.</p> 
        <p className="timeline-description">● Managed antivirus scans and cloud data backups to maintain system security and client data integrity.</p>
        <p className="timeline-description">● Awarded $3000 scholarship for outstanding performance and exceptional customer feedback.</p>
      </div>
      <div className="resume-section">
        <h4 className="timeline-title">IT ServiceDesk Engineer Intern – Liberty Caribbean ICT</h4>
        <p className="timeline-date">June 2024 – August 2024</p>
        <p className="timeline-description">● Resolved networking, software, Azure, Microsoft 365 and printer issues to keep IT operations running smoothly.</p>
        <p className="timeline-description">● Strengthened client relationships by consistently providing prompt solutions, resulting in positive client feedback.</p>
      </div>
      <div className="resume-section">
        <h4 className="timeline-title">Computer Repair Technician – Simply Computers</h4>
        <p className="timeline-date">June 2019 – August 2019</p>
        <p className="timeline-description">● Assembled and repaired 15+ computers, laptops, and servers by diagnosing hardware and software issues and applying targeted repair solutions to restore full system functionality.</p>
        <p className="timeline-description">● Advised clients on tailored technology upgrades, generating $500+ in revenue and enhancing customer satisfaction.</p>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section>
      <h2 className="section-title">Contacts</h2>
      <p className="section-subtitle">Get in touch</p>
      <div className="contacts-grid">
        <a className="contact-card" href="mailto:you@example.com"><i className="fas fa-envelope"></i> Email</a>
        <a className="contact-card" href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a>
        <a className="contact-card" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </section>
  );
}

function App() {
  const [route, navigate] = useHashRoute('home');

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#home';
    }
  }, []);

  return (
    <div>
      <PageShell route={route}>
        <NavBar route={route} onNavigate={navigate} />
        {route === 'home' && <Home />}
        {route === 'projects' && <Projects />}
        {route === 'resume' && <Resume />}
        {route === 'experience' && <Experience />}
        {route === 'contacts' && <Contacts />}
      </PageShell>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


