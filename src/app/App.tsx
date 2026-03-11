import React, { useState } from 'react';
import photo from './cv_photo.jpg';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('English');

  const languages = [
    {
      name: 'English',
      text: (
        <div style={{ textAlign: 'left', fontSize: '14px' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '20px',
              border: '3px solid #61dafb',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p style={{ color: '#61dafb', marginBottom: '20px' }}>Senior Full-Stack Developer / Solution Architect</p>

          <h3>Contact</h3>
          <p>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#61dafb' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/vladimir-rurik" style={{ color: '#61dafb' }}>
              LinkedIn
            </a>
          </p>

          <h3>My Repositories</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#61dafb' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#61dafb' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#61dafb' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#61dafb' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projects</h3>
          <p>
            <a href="https://picklematch.vercel.app" style={{ color: '#61dafb' }}>
              PickleMatch (MVP) - Tennis tournament management app
            </a>
          </p>

          <h3>Summary</h3>
          <p>
            Over 20 years in software development across energy trading, banking, retail, logistics, education, and
            government sectors. Full-stack developer and solution architect skilled in Java, Spring, React, ASP.NET,
            Python, Clojure, Rust, and cloud technologies.
          </p>

          <h3>Core Skills</h3>
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

          <h3>Current Position</h3>
          <p>
            <strong>Senior Java/React Developer</strong> at Nortal (Tallinn, Estonia) - Oct 2023 to Present
          </p>
          <p>Java developer on a large energy trading platform. Mentoring junior developers.</p>

          <h3>Previous Experience</h3>
          <ul>
            <li>
              <strong>Cognizant</strong> (Belgium) - Oct 2022 to Oct 2023
              <br />
              React, Java, Spring Boot for banking client. Microservices architecture.
            </li>
            <li>
              <strong>StarOfService</strong> (Remote, Rome) - Jan 2021 to Oct 2022
              <br />
              Full-stack development for professional services marketplace.
            </li>
            <li>
              <strong>Pipedrive</strong> (Tallinn, Estonia) - Jun 2020 to Jan 2021
              <br />
              React, TypeScript, Java, Spring Boot for CRM platform.
            </li>
            <li>
              <strong>Playtech</strong> (Tallinn, Estonia) - Mar 2019 to Jun 2020
              <br />
              Senior .NET Developer for gaming platform.
            </li>
          </ul>

          <h3>Education</h3>
          <p>
            <strong>Tallinn University of Technology</strong>
            <br />
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
        <div style={{ textAlign: 'left', fontSize: '14px' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '20px',
              border: '3px solid #61dafb',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p style={{ color: '#61dafb', marginBottom: '20px' }}>
            Développeur Full-Stack Senior / Architecte de Solutions
          </p>

          <h3>Contact</h3>
          <p>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#61dafb' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/vladimir-rurik" style={{ color: '#61dafb' }}>
              LinkedIn
            </a>
          </p>

          <h3>Mes Dépôts</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#61dafb' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#61dafb' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#61dafb' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#61dafb' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projets</h3>
          <p>
            <a href="https://picklematch.vercel.app" style={{ color: '#61dafb' }}>
              PickleMatch (MVP) - Application de gestion de tournois de tennis
            </a>
          </p>

          <h3>Résumé</h3>
          <p>
            Plus de 20 ans dans le développement logiciel à travers divers secteurs : énergie, banque, retail,
            logistique, éducation et gouvernement. Développeur full-stack et architecte de solutions compétent en Java,
            Spring, React, ASP.NET, Python, Clojure, Rust et technologies cloud.
          </p>

          <h3>Compétences Principales</h3>
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

          <h3>Position Actuelle</h3>
          <p>
            <strong>Développeur Java/React Senior</strong> chez Nortal (Tallinn, Estonie) - Oct 2023 à présent
          </p>

          <h3>Éducation</h3>
          <p>
            <strong>Université de Technologie de Tallinn</strong>
            <br />
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
        <div style={{ textAlign: 'left', fontSize: '14px' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '20px',
              border: '3px solid #61dafb',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p style={{ color: '#61dafb', marginBottom: '20px' }}>Täispinna Arendaja / Lahendusarhitekt</p>

          <h3>Kontakt</h3>
          <p>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#61dafb' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/vladimir-rurik" style={{ color: '#61dafb' }}>
              LinkedIn
            </a>
          </p>

          <h3>Minu Repositooriumid</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#61dafb' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#61dafb' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#61dafb' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#61dafb' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projektid</h3>
          <p>
            <a href="https://picklematch.vercel.app" style={{ color: '#61dafb' }}>
              PickleMatch (MVP) - Tennise turniirihalduse rakendus
            </a>
          </p>

          <h3>Kokkuvõte</h3>
          <p>
            Üle 20 aasta kogemust tarkvaraarenduses erinevates valdkondades: energeetika, pangandus, jaemüük, logistika,
            haridus ja riigihaldus. Täispinna arendaja ja lahendusarhitekt, kes valdab Java, Spring, React, ASP.NET,
            Pythoni, Clojure&apos;i, Rusti ja pilvetehnoloogiaid.
          </p>

          <h3>Põhioskused</h3>
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

          <h3>Praegune Positsioon</h3>
          <p>
            <strong>Senior Java/React Arendaja</strong> ettevõttes Nortal (Tallinn, Eesti) - Oktoober 2023 – praeguseni
          </p>

          <h3>Haridus</h3>
          <p>
            <strong>Tallinna Tehnikaülikool</strong>
            <br />
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', marginBottom: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {languages.map((lang) => (
              <button
                key={lang.name}
                onClick={() => setActiveTab(lang.name)}
                style={{
                  padding: '8px 16px',
                  margin: '5px',
                  backgroundColor: activeTab === lang.name ? '#61dafb' : '#282c34',
                  color: 'white',
                  border: '1px solid #61dafb',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <div
            style={{
              padding: '30px',
              border: '1px solid #61dafb',
              borderRadius: '8px',
              minWidth: '300px',
              maxWidth: '600px',
              textAlign: 'left',
              backgroundColor: 'rgba(40, 44, 52, 0.8)',
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
