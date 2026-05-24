import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import './App.css';
import DundiesLogo from './assets/dundie-removebg-preview.png';
import MyButton from './button';



const PROJETS = [
  { id: 'Etodo', titre: "E-TODO", texte: "Création d'une application de Todo list en groupe de 3. " },
  { id: 'hack & juice', titre: "Hack and Juice", texte: "Trouver et exploiter les failles sur unsite web peu sécurisé, gagner le plus de points possible en faisant les challenges et monter au classement." },
  { id: 'yowl', titre: "Yowl", texte: "Innovation d'une application mobile uniquement avec des maquettes et uine strfatégie marketing." },
  { id: 'Tardis', titre: "Tardis", texte: "Durant ce projet de groupe nous avons dû en utilisant des données (fichiers CSV) , créer un modèle de prediction en utilisant le machine learning." },
  { id: 'Nextbuy', titre: "Nextbuy", texte: "Dans ce projet nous devions faire des prédictions pour un magasin en untilisant les données (fichiers CSV) comme pouir le projet Tardis." },
  { id: 'alice', titre: "Alice in Wonderland", texte: "Ce projet avait pour but de pouvoir selectionner un livre dans une grande banque de livre et de créer des fonctionnalites qui donnent des informations sur ce dernier, par exemple en faire un résumé ou donner d’autres livres similaires etc..." },
  { id: 'eliza', titre: "Eliza", texte: "Pendant ce projet nous avons dû créer un chatbot (telegram) en entrainant un modèle IA. Nous avons lié notre bot au modèle IA d'Ollama, l'idée derrière ce projet était d'aider à améliorer la vie étudiante." },
  {id: 'job', titre: "Job aggregator", texte: "Ce projet de fin d'année a pour but la création d'un site d'annonces d'emploi entier (back, front, cybersécurité, data/IA...)"}

];

const SKILLS = [
  { nom: "Python / JavaScript", niveau: "40%" },
  { nom: "HTML / CSS / Node.js", niveau: "50%" },
  { nom: "SQL / MySQL", niveau: "40%" },
  { nom: "Git / Docker / Linux", niveau: "50%" },
  { nom: "Cybersécurité", niveau: "30%" },
];
  


const HRFile = ({ onClose }) => {
  const [tab, setTab] = useState('profile'); 

  return (
    <ModalOverlay close={onClose}>
      <motion.div
        className="hr-file"
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hr-file__header">
          <div className="hr-file__stamp">CONFIDENTIAL</div>
          <h2 className="hr-file__title">EMPLOYEE FILE</h2>

          <button className="close-x hr-close" onClick={onClose}>×</button>
        </div>

        <div className="hr-tabs">
          {[
            { id: 'profile', label: '👤 Profile' },
            { id: 'cv',      label: '📄 CV' },
          ].map((t) => (
            <button
              key={t.id}
              className={`hr-tab ${tab === t.id ? 'hr-tab--active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="hr-body">
          <AnimatePresence mode="wait">
            {tab === 'profile' && (
              <motion.div
                key="profile"
                className="hr-panel"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <div className="profile-layout">

                  <div className="photo-wrapper">
                   
                    <div className="photo-wrapper">
                      <img src='/photo-aymeric.png' alt="Aymeric" className="employee-photo" />
                      <div className="photo-badge">EMPLOYEE ID: #001</div>
                    </div>
        
                  </div>

                  <div className="profile-info">
                    <div className="dundie-header" style={{ marginBottom: '10px' }}>🏆 DUNDIE WINNER</div>
                    <h3 className="employee-name">AYMERIC DEROUDILHE</h3>
                    <p className="employee-title">Epitech student</p>
                    <hr className="file-divider" />
                    <div className="info-grid">
                      <div className="info-row">
                        <span className="info-key">Department:</span>
                        <span className="info-val">IT — Epitech Marseille</span>
                      </div>
                      <div className="info-row">
                        <span className="info-key">Status:</span>
                        <span className="info-val">Found an internship</span>
                      </div>
                      <div className="info-row">
                        <span className="info-key">Location:</span>
                        <span className="info-val">Marseille, France</span>
                      </div>
                      <div className="info-row">
                        <span className="info-key">Email:</span>
                        <span className="info-val">
                          <a className="file-link" href="mailto:aymeric.deroudilhe@epitech.eu">
                            aymeric.deroudilhe@epitech.eu
                          </a>
                        </span>
                      </div>
                      <div className="info-row">
                        <span className="info-key">GitHub:</span>
                        <span className="info-val">
                          <a className="file-link" href="https://github.com/aymericd941" target="_blank" rel="noreferrer">
                            github.com/aymericd941
                          </a>
                        </span>
                      </div>
                      <div className="info-row">
                        <span className="info-key">LinkedIn:</span>
                        <span className="info-val">
                          <a className="file-link" href="https://www.linkedin.com/in/aymeric-deroudilhe-a631413a2/" target="_blank" rel="noreferrer">
                            linkedin.com/in/aymeric-deroudilhe
                          </a>
                        </span>
                      </div>
                    </div>
                    <p className="file-note">
                      ⚠️ Performance review: <em>"Surprisingly competent. Michael gave him a Dundie anyway."</em>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'contact' && (
              <motion.div
                key="contact"
                className="hr-panel"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
              </motion.div>
            )}

            {tab === 'cv' && (
              <motion.div
                key="cv"
                className="hr-panel cv-panel"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <div className="cv-preview">
                  <div className="cv-icon">📋</div>
                  <h3 className="cv-title">CURRICULUM VITAE</h3>
                  <p className="cv-sub">Official Epitech student</p>
                  <div className="cv-meta">
                    <span>Aymeric Deroudilhe</span>
                    <span>•</span>
                    <span>Epitech Student</span>
                    <span>•</span>
                    <span>2026</span>
                  </div>
                  <div className="cv-warning">
                    ⚠️ Toby from HR has approved this document.
                  </div>

                  <a
                    href='/cv-aymeric.pdf'
                    download="CV_Aymeric_Deroudilhe.pdf"
                    className="office-btn primary cv-download-btn"
                  >
                    📥 DOWNLOAD CV (PDF)
                  </a>
                  <p className="cv-hint">
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};

export default function MyApp() {
  const [projetSelectionne, setProjetSelectionne] = useState(null);
  const [showHRFile, setShowHRFile] = useState(false);   
  const [showSkills, setShowSkills] = useState(false);
  const [isDwightMode, setIsDwightMode] = useState(false);
  const [buffer, setBuffer] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userName, setUserName] = useState('');
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newBuffer = (buffer + e.key.toLowerCase()).slice(-6);
      setBuffer(newBuffer);
      if (newBuffer === 'dwight') {
        setIsDwightMode(true);
        setShowHRFile(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [buffer]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.toLowerCase() === 'aymeric') {
      setIsAuthorized(true);
    } else {
      setAccessDenied(true);
      setIsDwightMode(true);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="login-screen">
        <motion.div 
          className={`login-card ${accessDenied ? 'identity-theft-mode' : ''}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <h1 className='dunder-logo' style={{fontSize: '3rem', marginBottom: '0'}}>PORTFOLIO</h1>
          <p className="branch-location" style={{marginBottom: '30px'}}>STUDENT PORTAL</p>
          
          {!accessDenied ? (
            <form onSubmit={handleLogin}>
              <input 
                type="text" 
                placeholder="Whose portfolio would you like to see? (First Name)" 
                className="login-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
              />
              <button type="submit" className="office-btn primary" style={{width: '100%'}}>VALIDATE</button>
            </form>
          ) : (
            <div className="dwight-rant">
              <p className="warning-text">IDENTITY THEFT IS NOT A JOKE, {userName.toUpperCase()}!</p>
              <p className="sub-warning">Millions of families suffer every year!</p>
              <button className="btn-close-dark" onClick={() => { setAccessDenied(false); setIsDwightMode(false); setUserName(''); }}>
                Try again, Jim.
              </button>
              <button className="btn-close-dark" onClick={() => { setIsAuthorized(true); }}>
                Continue as Aymeric
              </button>
            </div>
          )}
        </motion.div>
        <p className="inspired-footer">The office inspired.</p>  
      </div>
    );
  }

  return (
    <div className="office-layout"> 
      <img src={DundiesLogo} alt="Dundies Award Logo" className="corner-dundie" />
      
      <header className='top-bar'>
        <div className="status-badge" onClick={() => setShowHRFile(true)}>
          <MyButton /> | <span className="job-title">WORLD'S BEST STUDENT</span>
        </div>
      </header>
      
      <section className="hero-section">
        <div className="brand-box">
          <h1 className='dunder-logo'>EPITECH</h1>
          <p className="branch-location">MARSEILLE BRANCH</p>
        </div>
        <p className="quote">"I'm not superstitious, but I am a little stitious."</p>
      </section>

      <nav className="quick-access">
        <button className="office-btn primary" onClick={() => setShowHRFile(true)}>📂 EMPLOYEE FILE</button>
        <button className="office-btn secondary" onClick={() => setShowSkills(true)}>📊 PERFORMANCE</button>
      </nav>

      <main className='projects-grid'>
        {PROJETS.map((projet) => (
          <motion.div 
            key={projet.id} 
            className='folder'
            whileHover={{ y: -10, rotate: -1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setProjetSelectionne(projet)}
          >
            <div className='folder-tab'>Projet</div>
            <div className='folder-interior'>
              <h3 className='folder-label'>{projet.titre}</h3>
            </div>
          </motion.div>
        ))}
      </main>

      <AnimatePresence>
        {projetSelectionne && (
          <ModalOverlay close={() => setProjetSelectionne(null)}>
            <motion.div className="post-it" initial={{ scale: 0, rotate: -5 }} animate={{ scale: 1, rotate: 2 }} exit={{ scale: 0 }}>
              <h2 className="handwritten-title">{projetSelectionne.titre}</h2>
              <p className="handwritten-body">{projetSelectionne.texte}</p>
              {projetSelectionne.image && (
                <img src={projetSelectionne.image} alt={projetSelectionne.titre} style={{ width: '100%', height:'50%', borderRadius: '5px', marginBottom: '10px' }} />
              )}
              <button className="close-x" onClick={() => setProjetSelectionne(null)}>×</button>
            </motion.div>
          </ModalOverlay>
        )}

        {showHRFile && <HRFile onClose={() => setShowHRFile(false)} />}

        {showSkills && (
          <ModalOverlay close={() => setShowSkills(false)}>
            <motion.div className="office-whiteboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="whiteboard-title">Performance review</h2>
              <div className="confidential-file">
                {SKILLS.map((s) => (
                  <div key={s.nom} className="skill-item">
                    <span className="cv-title">{s.nom} : {s.niveau}</span>
                  </div>
                ))}
                <p className='cv-title'>Anglais niveau B1</p>
              </div>
              <button className="btn-close-dark" onClick={() => setShowSkills(false)}>Done</button>
            </motion.div>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </div>
  );
}

const ModalOverlay = ({ children, close }) => (
  <div className="overlay" onClick={close}>
    <div onClick={(e) => e.stopPropagation()}>{children}</div>
  </div>
);

