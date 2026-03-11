import React, { useState } from 'react';
import photo from './cv_photo.jpg';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('English');

  const languages = [
    {
      name: 'English',
      text: (
        <div style={{ textAlign: 'left' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '16px',
              border: '3px solid #fff',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p
            style={{
              color: '#bdc3c7',
              marginBottom: '20px',
              fontSize: '15px',
            }}
          >
            Senior Java/React Developer / Architect
          </p>

          <h3>Contact</h3>
          <p style={{ color: '#ecf0f1' }}>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#3498db' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p style={{ color: '#bdc3c7', margin: '0.25rem 0' }}>+372 5687 7001</p>
          <p style={{ color: '#bdc3c7', margin: '0.25rem 0 16px 0' }}>Tallinn, Estonia</p>

          <h3>Repositories</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#3498db' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#3498db' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#3498db' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#3498db' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Project</h3>
          <p style={{ marginBottom: '16px' }}>
            <a href="https://picklematch.vercel.app" style={{ color: '#3498db' }}>
              PickleMatch - Tennis tournament management (ClojureScript MVP)
            </a>
          </p>
        </div>
      ),
    },
    {
      name: 'Français',
      text: (
        <div style={{ textAlign: 'left' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '16px',
              border: '3px solid #fff',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p
            style={{
              color: '#bdc3c7',
              marginBottom: '20px',
              fontSize: '15px',
            }}
          >
            Développeur Java/React Senior / Architecte
          </p>

          <h3>Contact</h3>
          <p style={{ color: '#ecf0f1' }}>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#3498db' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p style={{ color: '#bdc3c7', margin: '0.25rem 0' }}>+372 5687 7001</p>
          <p style={{ color: '#bdc3c7', margin: '0.25rem 0 16px 0' }}>Tallinn, Estonie</p>

          <h3>Dépôts</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#3498db' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#3498db' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#3498db' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#3498db' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projet</h3>
          <p style={{ marginBottom: '16px' }}>
            <a href="https://picklematch.vercel.app" style={{ color: '#3498db' }}>
              PickleMatch - Gestion de tournois de tennis (MVP ClojureScript)
            </a>
          </p>
        </div>
      ),
    },
    {
      name: 'Eesti',
      text: (
        <div style={{ textAlign: 'left' }}>
          <img
            src={photo}
            alt="Vladimir Rurik"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '16px',
              border: '3px solid #fff',
            }}
          />
          <h1>Vladimir Rurik</h1>
          <p
            style={{
              color: '#bdc3c7',
              marginBottom: '20px',
              fontSize: '15px',
            }}
          >
            Senior Java/React Arendaja / Arhitekt
          </p>

          <h3>Kontakt</h3>
          <p style={{ color: '#ecf0f1' }}>
            <a href="mailto:vladimir.rurik@gmail.com" style={{ color: '#3498db' }}>
              vladimir.rurik@gmail.com
            </a>
          </p>
          <p style={{ color: '#bdc3c7', margin: '0.25rem 0' }}>+372 5687 7001</p>
          <p style={{ color: '#bdc3c7', margin: '0.25rem 0 16px 0' }}>Tallinn, Eesti</p>

          <h3>Repositooriumid</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
            <li>
              <a href="https://github.com/RurikV" style={{ color: '#3498db' }}>
                github.com/RurikV
              </a>
            </li>
            <li>
              <a href="https://github.com/vladimir-rurik" style={{ color: '#3498db' }}>
                github.com/vladimir-rurik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#3498db' }}>
                gitlab.com/vovo-otus/excusiohub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/room-2-otus" style={{ color: '#3498db' }}>
                gitlab.com/room-2-otus
              </a>
            </li>
          </ul>

          <h3>Projekt</h3>
          <p style={{ marginBottom: '16px' }}>
            <a href="https://picklematch.vercel.app" style={{ color: '#3498db' }}>
              PickleMatch - Tennise turniirihaldus (ClojureScript MVP)
            </a>
          </p>
        </div>
      ),
    },
  ];

  const content = {
    English: {
      summary: `Over 20 years in software development across energy trading, banking, retail, logistics, education, and government sectors. Full-stack developer and solution architect skilled in Java, Spring, React, ASP.NET, Python, Clojure, Rust, and cloud technologies.`,
      skills: [
        {
          category: 'Backend',
          items: ['Java', 'Spring Boot', 'ASP.NET Core', 'Python', 'Node.js', 'C#', 'Clojure', 'Rust'],
        },
        { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { category: 'Databases', items: ['MS SQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
        { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD'] },
      ],
      experience: [
        {
          company: 'Nortal',
          location: 'Tallinn, Estonia',
          position: 'Senior Java/React Developer',
          period: 'Oct 2023 - Present',
          description: 'Java developer on a large energy trading platform. Mentoring junior developers.',
        },
        {
          company: 'Cognizant',
          location: 'Belgium',
          position: 'Senior Java/React Developer',
          period: 'Oct 2022 - Oct 2023',
          description: 'React, Java, Spring Boot for banking client. Microservices architecture.',
        },
        {
          company: 'StarOfService',
          location: 'Remote, Rome, Italy',
          position: 'Full Stack Developer',
          period: 'Jan 2021 - Oct 2022',
          description: 'React, TypeScript, Java, Spring Boot for professional services marketplace.',
        },
        {
          company: 'Pipedrive',
          location: 'Tallinn, Estonia',
          position: 'Senior Java/React Developer',
          period: 'Jun 2020 - Jan 2021',
          description: 'React, TypeScript, Java, Spring Boot for CRM platform.',
        },
        {
          company: 'Playtech',
          location: 'Tallinn, Estonia',
          position: 'Senior .NET Developer',
          period: 'Mar 2019 - Jun 2020',
          description: 'Gaming platform development.',
        },
        {
          company: 'Nortal',
          location: 'Tallinn, Estonia',
          position: 'Senior .NET Developer',
          period: 'Mar 2017 - Mar 2019',
          description: 'Gambling industry software for US client.',
        },
        {
          company: 'Playtech',
          location: 'Tallinn, Estonia',
          position: 'Senior .NET Developer',
          period: '2013 - 2017',
          description: 'Gaming platform development.',
        },
      ],
      education: [
        {
          school: 'Tallinn University of Technology',
          degree: "Master's in Computer Science",
          period: '2016 - 2019',
        },
        {
          school: 'Tallinn University of Technology',
          degree: "Bachelor's in Computer Engineering",
          period: '2005 - 2011',
        },
      ],
    },
    Français: {
      summary: `Plus de 20 ans dans le développement logiciel à travers divers secteurs : énergie, banque, retail, logistique, éducation et gouvernement. Développeur full-stack et architecte de solutions compétent en Java, Spring, React, ASP.NET, Python, Clojure, Rust et technologies cloud.`,
      skills: [
        {
          category: 'Backend',
          items: ['Java', 'Spring Boot', 'ASP.NET Core', 'Python', 'Node.js', 'C#', 'Clojure', 'Rust'],
        },
        { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { category: 'Bases de données', items: ['MS SQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
        { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD'] },
      ],
      experience: [
        {
          company: 'Nortal',
          location: 'Tallinn, Estonie',
          position: 'Développeur Java/React Senior',
          period: 'Oct 2023 - Présent',
          description:
            'Développeur Java sur une plateforme de trading d&apos;énergie. Mentorat des développeurs juniors.',
        },
        {
          company: 'Cognizant',
          location: 'Belgique',
          position: 'Développeur Java/React Senior',
          period: 'Oct 2022 - Oct 2023',
          description: 'React, Java, Spring Boot pour client bancaire. Architecture de microservices.',
        },
      ],
      education: [
        {
          school: 'Université de Technologie de Tallinn',
          degree: 'Master en Informatique',
          period: '2016 - 2019',
        },
        {
          school: 'Université de Technologie de Tallinn',
          degree: 'Bachelor en Génie Informatique',
          period: '2005 - 2011',
        },
      ],
    },
    Eesti: {
      summary: `Üle 20 aasta kogemust tarkvaraarenduses erinevates valdkondades: energeetika, pangandus, jaemüük, logistika, haridus ja riigihaldus. Täispinna arendaja ja lahendusarhitekt, kes valdab Java, Spring, React, ASP.NET, Pythoni, Clojure&apos;i, Rusti ja pilvetehnoloogiaid.`,
      skills: [
        {
          category: 'Backend',
          items: ['Java', 'Spring Boot', 'ASP.NET Core', 'Python', 'Node.js', 'C#', 'Clojure', 'Rust'],
        },
        { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { category: 'Andmebaasid', items: ['MS SQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
        { category: 'Pilv & DevOps', items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD'] },
      ],
      experience: [
        {
          company: 'Nortal',
          location: 'Tallinn, Eesti',
          position: 'Senior Java/React Arendaja',
          period: 'Oktoober 2023 - Praeguseni',
          description: 'Java arendaja suure energiaturgu platvormi juures. Nooremate arendajate mentorlus.',
        },
        {
          company: 'Cognizant',
          location: 'Belgia',
          position: 'Senior Java/React Arendaja',
          period: 'Oktoober 2022 - Oktoober 2023',
          description: 'React, Java, Spring Boot pangakliendile. Mikroteenuste arhitektuur.',
        },
      ],
      education: [
        {
          school: 'Tallinna Tehnikaülikool',
          degree: 'Magister arvutiteaduses',
          period: '2016 - 2019',
        },
        {
          school: 'Tallinna Tehnikaülikool',
          degree: 'Bakalaureus arvutitehnikas',
          period: '2005 - 2011',
        },
      ],
    },
  };

  const langContent = content[activeTab as keyof typeof content];

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '720px',
          }}
        >
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.name}
                onClick={() => setActiveTab(lang.name)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: activeTab === lang.name ? '#3498db' : 'transparent',
                  color: '#fff',
                  border: activeTab === lang.name ? 'none' : '1px solid #7f8c8d',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>

          <div
            style={{
              padding: '24px',
              borderRadius: '8px',
              width: '100%',
              textAlign: 'left',
              backgroundColor: '#ffffff',
            }}
          >
            {languages.find((lang) => lang.name === activeTab)?.text}

            <h2>Summary</h2>
            <p>{langContent.summary}</p>

            <h2>Technical Skills</h2>
            {langContent.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <strong>{skillGroup.category}:</strong> {skillGroup.items.join(', ')}
              </div>
            ))}

            <h2>Work Experience</h2>
            {langContent.experience.map((job) => (
              <div key={job.company} style={{ marginBottom: '12px' }}>
                <p style={{ margin: '0 0 2px 0' }}>
                  <strong>
                    {job.company} - {job.position}
                  </strong>
                </p>
                <p style={{ margin: '0 0 2px 0', fontSize: '13px', color: '#666' }}>
                  {job.location} | {job.period}
                </p>
                <p style={{ margin: 0, fontSize: '13px' }}>{job.description}</p>
              </div>
            ))}

            <h2>Education</h2>
            {langContent.education.map((edu) => (
              <div key={edu.school}>
                <p style={{ margin: '0 0 2px 0' }}>
                  <strong>{edu.school}</strong>
                </p>
                <p style={{ margin: 0, fontSize: '13px' }}>
                  {edu.degree} ({edu.period})
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
