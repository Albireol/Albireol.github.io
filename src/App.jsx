import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="bi bi-code-slash me-2"></i>Albireo
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            style={{ background: 'transparent', border: 'none' }}
          >
            <i className="bi bi-list text-white" style={{ fontSize: '1.5rem' }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1 className="fade-in">
                Hey, I'm <span className="gradient-text">Albireo</span>
              </h1>
              <p className="lead fade-in-delay">
                🔬 Plasma Physics Student | Computational Fusion Research | Code Tinkerer
              </p>
              <div className="hero-btns fade-in-delay">
                <a href="#projects" className="btn btn-primary">
                  <i className="bi bi-rocket-takeoff me-2"></i>View Projects
                </a>
                <a href="#contact" className="btn btn-outline-primary">
                  <i className="bi bi-chat-dots me-2"></i>Let's Talk
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-avatar">
                  <img src="/profile.jpg" alt="Albireo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know the person behind the code</p>
          
          <div className="row g-4">
            {/* Left Column - Profile Card */}
            <div className="col-lg-4">
              <div className="about-card text-center h-100">
                <img 
                  src="/profile.jpg" 
                  alt="Albireo" 
                  style={{ 
                    width: '200px', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '50%',
                    border: '3px solid var(--accent-primary)',
                    marginBottom: '1.5rem',
                    boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)'
                  }} 
                />
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Albireo</h3>
                <p style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Plasma Physics Student</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="https://github.com/Albireol" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-github fs-4"></i></a>
                  <a href="https://space.bilibili.com/40214866" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-tv fs-4"></i></a>
                  <a href="mailto:albireo@mail.ustc.edu.cn" className="text-white"><i className="bi bi-envelope fs-4"></i></a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Info & Skills */}
            <div className="col-lg-8">
              <div className="about-card h-100">
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  👋 Plasma Physics Student & Code Tinkerer
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  I'm a student studying plasma physics, doing computational fusion research 
                  focused on instability motivated by energetic particles.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  When I'm not researching, I'm an amateur code tinkerer and Bilibili uploader, 
                  exploring the intersection of science and technology.
                </p>
                
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  <i className="bi bi-code-slash text-primary me-2"></i>Tech Stack
                </h5>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="bi bi-filetype-cpp me-1"></i>C++</span>
                  <span className="skill-tag"><i className="bi bi-filetype-py me-1"></i>Python</span>
                  <span className="skill-tag"><i className="bi bi-filetype-java me-1"></i>Java</span>
                  <span className="skill-tag"><i className="bi bi-filetype-pdf me-1"></i>LaTeX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some things I've built</p>
          
          <div className="row g-4 justify-content-center">
            {/* Project 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card project-card">
                <div className="card-body p-4">
                  <div className="project-icon mb-3">
                    <i className="bi bi-cpu"></i>
                  </div>
                  <h5 className="card-title">Virtual MBTI Test</h5>
                  <p className="card-text">
                    A JavaScript-based virtual MBTI personality test with interactive questions and detailed results analysis.
                  </p>
                  <div className="tech-badges">
                    <span className="tech-badge">JavaScript</span>
                    <span className="tech-badge">HTML5</span>
                    <span className="tech-badge">CSS3</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Albireol/Virtual-MBTI-Test" target="_blank" rel="noopener noreferrer" className="btn btn-glow btn-sm">
                      <i className="bi bi-github me-1"></i>Code
                    </a>
                    <a href="https://albireol.github.io/Virtual-MBTI-Test/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                      <i className="bi bi-eye me-1"></i>Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card project-card">
                <div className="card-body p-4">
                  <div className="project-icon mb-3">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h5 className="card-title">GTC Analysis</h5>
                  <p className="card-text">
                    A Python-based data analysis tool for GTC (Gyrokinetic Toroidal Code) simulation results visualization and processing.
                  </p>
                  <div className="tech-badges">
                    <span className="tech-badge">Python</span>
                    <span className="tech-badge">NumPy</span>
                    <span className="tech-badge">Matplotlib</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Albireol/gtc-analysis" target="_blank" rel="noopener noreferrer" className="btn btn-glow btn-sm">
                      <i className="bi bi-github me-1"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's build something amazing together</p>
          
          <div className="contact-cards">
            <a href="mailto:albireo@mail.ustc.edu.cn" className="contact-card" style={{ textDecoration: 'none' }}>
              <i className="bi bi-envelope"></i>
              <h5 style={{ color: 'var(--text-primary)', margin: '0.5rem 0' }}>Email</h5>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>albireo@mail.ustc.edu.cn</p>
            </a>
            <a href="https://space.bilibili.com/40214866" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none' }}>
              <i className="bi bi-tv"></i>
              <h5 style={{ color: 'var(--text-primary)', margin: '0.5rem 0' }}>Bilibili</h5>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>space.bilibili.com/40214866</p>
            </a>
            <a href="https://github.com/Albireol" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none' }}>
              <i className="bi bi-github"></i>
              <h5 style={{ color: 'var(--text-primary)', margin: '0.5rem 0' }}>GitHub</h5>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>github.com/Albireol</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                © 2026 Made with <i className="bi bi-heart-fill text-danger"></i> by Albireo
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-links">
                <a href="https://github.com/Albireol" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                <a href="https://space.bilibili.com/40214866" target="_blank" rel="noopener noreferrer"><i className="bi bi-tv"></i></a>
                <a href="mailto:albireo@mail.ustc.edu.cn"><i className="bi bi-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
