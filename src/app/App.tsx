import React, { useState } from 'react';
import photo from './cv_photo.jpg';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('English');

  const languages = [
    {
      name: 'English',
      text: (
        <div style={{ textAlign: 'left', fontSize: '15px', color: '#333' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '20px',
              border: '4px solid #fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p
            style={{
              color: '#fff',
              marginBottom: '25px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Senior Java/React Developer / Solution Architect
          </p>

          <h3>Contact</h3>
          <p>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#fff' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p style={{ color: '#eee' }}>+372 5687 7001</p>
          <p style={{ color: '#eee' }}>Tallinn, Estonia</p>

          <h3>My Repositories</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#fff' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#fff' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#fff' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#fff' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projects</h3>
          <p>
            <a href="https://picklematch.vercel.app" style={{ color: '#fff' }}>
              PickleMatch - Tennis tournament management app (ClojureScript MVP)
            </a>
          </p>

          <h3>Summary</h3>
          <p style={{ color: '#eee' }}>
            Over 20 years in software development across energy trading, banking, retail, logistics, education, and
            government sectors. Full-stack developer and solution architect skilled in Java, Spring, React, ASP.NET,
            Python, Clojure, Rust, and cloud technologies.
          </p>

          <h3>Skills</h3>
          <ul>
            <li>
              <strong>Backend:</strong> Java, Spring Boot, ASP.NET Core, Python, Node.js, C#, Clojure, Rust
            </li>
            <li>
              <strong>Frontend:</strong> React, TypeScript, JavaScript, HTML5, CSS3
            </li>
            <li>
              <strong>Databases:</strong> MS SQL, PostgreSQL, MongoDB, Redis
            </li>
            <li>
              <strong>Cloud:</strong> Azure, AWS
            </li>
            <li>
              <strong>DevOps:</strong> Docker, Kubernetes, Git, CI/CD
            </li>
          </ul>

          <h3>Experience</h3>
          <p>
            <strong>Nortal</strong> (Tallinn, Estonia) - Senior Java/React Developer - Oct 2023 to Present
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            Java developer on a large energy trading platform. Mentoring junior developers.
          </p>

          <p>
            <strong>Cognizant</strong> (Belgium) - Senior Java/React Developer - Oct 2022 to Oct 2023
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            React, Java, Spring Boot for banking client. Microservices architecture.
          </p>

          <p>
            <strong>StarOfService</strong> (Remote, Rome) - Full Stack Developer - Jan 2021 to Oct 2022
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            React, TypeScript, Java, Spring Boot for professional services marketplace.
          </p>

          <p>
            <strong>Pipedrive</strong> (Tallinn, Estonia) - Senior Java/React Developer - Jun 2020 to Jan 2021
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>React, TypeScript, Java, Spring Boot for CRM platform.</p>

          <p>
            <strong>Playtech</strong> (Tallinn, Estonia) - Senior .NET Developer - Mar 2019 to Jun 2020
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>Gaming platform development.</p>

          <h3>Education</h3>
          <p>
            <strong>Tallinn University of Technology</strong>
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            Master&apos;s in Computer Science (2016-2019)
            <br />
            Bachelor&apos;s in Computer Engineering (2005-2011)
          </p>
        </div>
      ),
    },
    {
      name: 'Français',
      text: (
        <div style={{ textAlign: 'left', fontSize: '15px', color: '#333' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '20px',
              border: '4px solid #fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p
            style={{
              color: '#fff',
              marginBottom: '25px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Développeur Java/React Senior / Architecte de Solutions
          </p>

          <h3>Contact</h3>
          <p>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#fff' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p style={{ color: '#eee' }}>+372 5687 7001</p>
          <p style={{ color: '#eee' }}>Tallinn, Estonie</p>

          <h3>Dépôts</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#fff' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#fff' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#fff' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#fff' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projets</h3>
          <p>
            <a href="https://picklematch.vercel.app" style={{ color: '#fff' }}>
              PickleMatch - Application de gestion de tournois de tennis (MVP ClojureScript)
            </a>
          </p>

          <h3>Résumé</h3>
          <p style={{ color: '#eee' }}>
            Plus de 20 ans dans le développement logiciel à travers divers secteurs : énergie, banque, retail,
            logistique, éducation et gouvernement. Développeur full-stack et architecte de solutions compétent en Java,
            Spring, React, ASP.NET, Python, Clojure, Rust et technologies cloud.
          </p>

          <h3>Compétences</h3>
          <ul>
            <li>
              <strong>Backend :</strong> Java, Spring Boot, ASP.NET Core, Python, Node.js, C#, Clojure, Rust
            </li>
            <li>
              <strong>Frontend :</strong> React, TypeScript, JavaScript, HTML5, CSS3
            </li>
            <li>
              <strong>Bases de données :</strong> MS SQL, PostgreSQL, MongoDB, Redis
            </li>
            <li>
              <strong>Cloud :</strong> Azure, AWS
            </li>
            <li>
              <strong>DevOps :</strong> Docker, Kubernetes, Git, CI/CD
            </li>
          </ul>

          <h3>Expérience</h3>
          <p>
            <strong>Nortal</strong> (Tallinn, Estonie) - Développeur Java/React Senior - Oct 2023 à présent
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            Développeur Java sur une plateforme de trading d&apos;énergie. Mentorat des développeurs juniors.
          </p>

          <p>
            <strong>Cognizant</strong> (Belgique) - Développeur Java/React Senior - Oct 2022 à Oct 2023
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            React, Java, Spring Boot pour client bancaire. Architecture de microservices.
          </p>

          <h3>Éducation</h3>
          <p>
            <strong>Université de Technologie de Tallinn</strong>
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            Master en Informatique (2016-2019)
            <br />
            Bachelor en Génie Informatique (2005-2011)
          </p>
        </div>
      ),
    },
    {
      name: 'Eesti',
      text: (
        <div style={{ textAlign: 'left', fontSize: '15px', color: '#333' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '20px',
              border: '4px solid #fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p
            style={{
              color: '#fff',
              marginBottom: '25px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Senior Java/React Arendaja / Lahendusarhitekt
          </p>

          <h3>Kontakt</h3>
          <p>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#fff' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p style={{ color: '#eee' }}>+372 5687 7001</p>
          <p style={{ color: '#eee' }}>Tallinn, Eesti</p>

          <h3>Repositooriumid</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#fff' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#fff' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#fff' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#fff' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projektid</h3>
          <p>
            <a href="https://picklematch.vercel.app" style={{ color: '#fff' }}>
              PickleMatch - Tennise turniirihalduse rakendus (ClojureScript MVP)
            </a>
          </p>

          <h3>Kokkuvõte</h3>
          <p style={{ color: '#eee' }}>
            Üle 20 aasta kogemust tarkvaraarenduses erinevates valdkondades: energeetika, pangandus, jaemüük, logistika,
            haridus ja riigihaldus. Täispinna arendaja ja lahendusarhitekt, kes valdab Java, Spring, React, ASP.NET,
            Pythoni, Clojure&apos;i, Rusti ja pilvetehnoloogiaid.
          </p>

          <h3>Oskused</h3>
          <ul>
            <li>
              <strong>Backend:</strong> Java, Spring Boot, ASP.NET Core, Python, Node.js, C#, Clojure, Rust
            </li>
            <li>
              <strong>Frontend:</strong> React, TypeScript, JavaScript, HTML5, CSS3
            </li>
            <li>
              <strong>Andmebaasid:</strong> MS SQL, PostgreSQL, MongoDB, Redis
            </li>
            <li>
              <strong>Pilv:</strong> Azure, AWS
            </li>
            <li>
              <strong>DevOps:</strong> Docker, Kubernetes, Git, CI/CD
            </li>
          </ul>

          <h3>Kogemus</h3>
          <p>
            <strong>Nortal</strong> (Tallinn, Eesti) - Senior Java/React Arendaja - Oktoober 2023 – praeguseni
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            Java arendaja suure energiaturgu platvormi juures. Nooremate arendajate mentorlus.
          </p>

          <p>
            <strong>Cognizant</strong> (Belgia) - Senior Java/React Arendaja - Oktoober 2022 – Oktoober 2023
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            React, Java, Spring Boot pangakliendile. Mikroteenuste arhitektuur.
          </p>

          <h3>Haridus</h3>
          <p>
            <strong>Tallinna Tehnikaülikool</strong>
          </p>
          <p style={{ color: '#eee', fontSize: '14px' }}>
            Magister arvutiteaduses (2016-2019)
            <br />
            Bakalaureus arvutitehnikas (2005-2011)
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '700px',
          }}
        >
          <div
            style={{
              display: 'flex',
              marginBottom: '25px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.name}
                onClick={() => setActiveTab(lang.name)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: activeTab === lang.name ? '#fff' : 'rgba(255,255,255,0.2)',
                  color: activeTab === lang.name ? '#667eea' : '#fff',
                  border: '2px solid #fff',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <div
            style={{
              padding: '35px',
              borderRadius: '16px',
              width: '100%',
              textAlign: 'left',
              backgroundColor: '#ffffff',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            }}
          >
            {languages.find((lang) => lang.name === activeTab)?.text}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
