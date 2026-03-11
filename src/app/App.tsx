import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('English');

  const languages = [
    'English',
    'Français',
    'Español',
    'Português (Brasil)',
    'Italiano',
    'Eesti',
    'Suomi'
  ];

  const content: Record<string, any> = {
    'English': {
      title: 'Vladimir Rurik',
      subtitle: 'Full-Stack Developer / AI Enthusiast / Architect',
      location: 'Tallinn, Estonia',
      repositoriesTitle: 'Repositories',
      summaryTitle: 'Summary',
      skillsTitle: 'Technical Skills',
      experienceTitle: 'Work Experience',
      educationTitle: 'Education',
      summary: "I am a full-stack developer and AI enthusiast with experience in front-end (React, HTML/CSS, JavaScript, Blazor, Flutter) and back-end (.NET, SQL Server, Web Services, REST, Java Spring). Over the past years, I have contributed to various projects involving cloud-based technologies (Azure, Google), workflow automation, and machine learning components. My core focus is on building scalable, efficient, and user-centric solutions that drive business value.",
      skills: [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Kafka', 'Gradle', 'ASP.NET Core', 'C#', 'MS SQL Server', 'PostgreSQL', 'REST'] },
        { category: 'Frontend', items: ['React', 'Redux', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Blazor', 'Flutter'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'Bitbucket Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'Flyway'] },
        { category: 'AI & Machine Learning', items: ['Machine Learning', 'NLP', 'Deep Learning', 'Neural Networks', 'MLOps'] }
      ],
      experience: [
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estonia',
          position: 'Product Development Manager',
          period: 'Dec 2021 - Dec 2024',
          description: 'Led a team of 10, overseeing software applications development. Created Archimate diagrams. Utilized C# ASP.NET 8.0, Blazor, SASS, JavaScript, Specflow, and Selenium.'
        },
        {
          company: 'Compensa Vienna Insurance Group',
          location: 'Tallinn, Estonia',
          position: 'Senior Software Developer',
          period: 'Nov 2019 - Dec 2021',
          description: 'Developed services for global sanction list checking, Odato KYC system integration, and XML bank statements parsing. Mentored junior developers.'
        },
        {
          company: 'Põhja-Eesti Regionaalhaigla',
          location: 'Tallinn, Estonia',
          position: 'Senior Software Developer',
          period: 'Jan 2019 - Aug 2019',
          description: 'Approved PRs within the Hospital Information System. Worked with C# .NET, WCF, ASP.NET MVC 5, Core, Javascript, Angular, Oracle, and MS SQL Server.'
        },
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estonia',
          position: 'Senior Software Developer',
          period: 'May 2013 - Nov 2018',
          description: 'Developed Power and Natural Gas inEnergy suite software. Used C# .NET ASP.NET MVC 5, Javascript, jQuery, Bootstrap, Win Forms, Kendo, DevExpress.'
        },
        {
          company: 'SportRadar AG',
          location: 'Tallinn, Estonia',
          position: 'Senior Software Developer',
          period: 'Apr 2012 - Apr 2013',
          description: 'Developed sport bookmakers application using C# .NET WPF.'
        },
        {
          company: 'Baltic Hotel & Restoraunt Systems OÜ',
          location: 'Tallinn, Estonia',
          position: 'Development Manager',
          period: 'May 2004 - Apr 2012',
          description: 'Developed IT systems for Restaurants/Hotels using .NET, C#, F#, Erlang, JVM, Java/Scala. Administrated Oracle, Linux and Windows servers.'
        },
        {
          company: 'Swedbank',
          location: 'Tallinn, Estonia',
          position: 'Software Developer, Implementation Process Manager',
          period: 'Jan 2005 - Mar 2007',
          description: 'J2EE WEB applications with PL/SQL. Deployment and testing in BEA Weblogic on Sun Solaris and RedHat.'
        },
        {
          company: 'Pensioniamet',
          location: 'Tallinn, Estonia',
          position: 'Software Developer',
          period: 'Apr 1997 - May 2004',
          description: 'Administrating/programming Oracle 8.0.7/9i Windows/Linux Servers operating systems; Delphi programs.'
        }
      ],
      education: [
        { school: 'Tartu University', degree: 'Cloud-native application design, DevOps and Kubernetes', period: 'Feb 2025 - Feb 2026' },
        { school: 'SDA Academy', degree: 'AI Engineer (4 months)', period: 'Jan 2025' },
        { school: 'HTML Academy', degree: 'Expert in HTML, CSS, JavaScript, TypeScript, and Node.js', period: 'Feb 2018 - Jan 2019' },
        { school: 'Tallinna Tehnikaülikool', degree: 'Automation Engineer, Magister', period: 'Sep 1996 - Aug 2002' }
      ]
    },
    'Français': {
      title: 'Vladimir Rurik',
      subtitle: 'Développeur Full-Stack / Passionné d\'IA / Architecte',
      location: 'Tallinn, Estonie',
      repositoriesTitle: 'Dépôts',
      summaryTitle: 'Résumé',
      skillsTitle: 'Compétences Techniques',
      experienceTitle: 'Expérience Professionnelle',
      educationTitle: 'Éducation',
      summary: "Je suis un développeur full-stack et passionné d'IA avec de l'expérience en front-end (React, HTML/CSS, JavaScript, Blazor, Flutter) et back-end (.NET, SQL Server, Web Services, REST, Java Spring). Au cours des dernières années, j'ai contribué à divers projets impliquant des technologies cloud (Azure, Google), l'automatisation des flux de travail et des composants d'apprentissage automatique.",
      skills: [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Kafka', 'Gradle', 'ASP.NET Core', 'C#', 'MS SQL Server', 'PostgreSQL', 'REST'] },
        { category: 'Frontend', items: ['React', 'Redux', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Blazor', 'Flutter'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'Bitbucket Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'Flyway'] },
        { category: 'IA & Machine Learning', items: ['Machine Learning', 'NLP', 'Deep Learning', 'Neural Networks', 'MLOps'] }
      ],
      experience: [
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estonie',
          position: 'Responsable du Développement Produit',
          period: 'Déc 2021 - Déc 2024',
          description: 'Direction d\'une équipe de 10 personnes pour le développement d\'applications logicielles. Création de diagrammes Archimate.'
        },
        {
          company: 'Compensa Vienna Insurance Group',
          location: 'Tallinn, Estonie',
          position: 'Développeur Logiciel Senior',
          period: 'Nov 2019 - Déc 2021',
          description: 'Développement de services pour la vérification des listes de sanctions, intégration KYC et analyse XML.'
        },
        {
          company: 'Põhja-Eesti Regionaalhaigla',
          location: 'Tallinn, Estonie',
          position: 'Développeur Logiciel Senior',
          period: 'Jan 2019 - Août 2019',
          description: 'Approbation des PR pour le système d\'information de l\'hôpital. Travail avec C# .NET, Oracle, et MS SQL Server.'
        },
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estonie',
          position: 'Développeur Logiciel Senior',
          period: 'Mai 2013 - Nov 2018',
          description: 'Développement du logiciel inEnergy. Utilisation de C# .NET, Javascript, jQuery, Bootstrap, Win Forms.'
        },
        {
          company: 'SportRadar AG',
          location: 'Tallinn, Estonie',
          position: 'Développeur Logiciel Senior',
          period: 'Avr 2012 - Avr 2013',
          description: 'Développement d\'une application de paris sportifs avec C# .NET WPF.'
        },
        {
          company: 'Baltic Hotel & Restoraunt Systems OÜ',
          location: 'Tallinn, Estonie',
          position: 'Responsable du Développement',
          period: 'Mai 2004 - Avr 2012',
          description: 'Systèmes informatiques pour hôtels/restaurants (.NET, C#, F#, Erlang, JVM). Administration de serveurs.'
        },
        {
          company: 'Swedbank',
          location: 'Tallinn, Estonie',
          position: 'Développeur Logiciel',
          period: 'Jan 2005 - Mar 2007',
          description: 'Applications J2EE WEB. Déploiement dans BEA Weblogic.'
        },
        {
          company: 'Pensioniamet',
          location: 'Tallinn, Estonie',
          position: 'Développeur Logiciel',
          period: 'Avr 1997 - Mai 2004',
          description: 'Administration/programmation de serveurs Oracle/Windows/Linux ; Delphi.'
        }
      ],
      education: [
        { school: 'Université de Tartu', degree: 'Conception d\'applications Cloud-native, DevOps et Kubernetes', period: 'Fév 2025 - Fév 2026' },
        { school: 'SDA Academy', degree: 'Ingénieur en IA (4 mois)', period: 'Jan 2025' },
        { school: 'HTML Academy', degree: 'Expert en HTML, CSS, JavaScript, TypeScript, Node.js', period: 'Fév 2018 - Jan 2019' },
        { school: 'Tallinna Tehnikaülikool', degree: 'Ingénieur en automatisation, Master', period: 'Sep 1996 - Août 2002' }
      ]
    },
    'Español': {
      title: 'Vladimir Rurik',
      subtitle: 'Desarrollador Full-Stack / Entusiasta de la IA / Arquitecto',
      location: 'Tallin, Estonia',
      repositoriesTitle: 'Repositorios',
      summaryTitle: 'Resumen',
      skillsTitle: 'Habilidades Técnicas',
      experienceTitle: 'Experiencia Laboral',
      educationTitle: 'Educación',
      summary: "Soy un desarrollador full-stack y entusiasta de la IA con experiencia en front-end y back-end. En los últimos años, he contribuido a varios proyectos relacionados con tecnologías en la nube (Azure, Google), automatización de flujos de trabajo y componentes de aprendizaje automático.",
      skills: [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Kafka', 'Gradle', 'ASP.NET Core', 'C#', 'MS SQL Server', 'PostgreSQL', 'REST'] },
        { category: 'Frontend', items: ['React', 'Redux', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Blazor', 'Flutter'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'Bitbucket Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'Flyway'] },
        { category: 'IA & Machine Learning', items: ['Machine Learning', 'NLP', 'Deep Learning', 'Neural Networks', 'MLOps'] }
      ],
      experience: [
        {
          company: 'Intelometry OÜ',
          location: 'Tallin, Estonia',
          position: 'Gerente de Desarrollo de Producto',
          period: 'Dic 2021 - Dic 2024',
          description: 'Lideré un equipo de 10 personas, supervisando el desarrollo de aplicaciones. Creación de diagramas Archimate.'
        },
        {
          company: 'Compensa Vienna Insurance Group',
          location: 'Tallin, Estonia',
          position: 'Desarrollador de Software Senior',
          period: 'Nov 2019 - Dic 2021',
          description: 'Desarrollé servicios para comprobación de listas de sanciones, integración KYC y análisis de XML.'
        },
        {
          company: 'Põhja-Eesti Regionaalhaigla',
          location: 'Tallin, Estonia',
          position: 'Desarrollador de Software Senior',
          period: 'Ene 2019 - Ago 2019',
          description: 'Aprobación de PR en el Sistema de Información Hospitalaria.'
        },
        {
          company: 'Intelometry OÜ',
          location: 'Tallin, Estonia',
          position: 'Desarrollador de Software Senior',
          period: 'May 2013 - Nov 2018',
          description: 'Desarrollé el software inEnergy. Uso de C# .NET, Javascript, jQuery, Bootstrap.'
        },
        {
          company: 'SportRadar AG',
          location: 'Tallin, Estonia',
          position: 'Desarrollador de Software Senior',
          period: 'Abr 2012 - Abr 2013',
          description: 'Aplicación de apuestas deportivas usando C# .NET WPF.'
        },
        {
          company: 'Baltic Hotel & Restoraunt Systems OÜ',
          location: 'Tallin, Estonia',
          position: 'Gerente de Desarrollo',
          period: 'May 2004 - Abr 2012',
          description: 'Sistemas TI para restaurantes/hoteles (.NET, C#, Erlang, Java). Administración de servidores.'
        },
        {
          company: 'Swedbank',
          location: 'Tallin, Estonia',
          position: 'Desarrollador de Software',
          period: 'Ene 2005 - Mar 2007',
          description: 'Aplicaciones WEB J2EE con PL/SQL.'
        },
        {
          company: 'Pensioniamet',
          location: 'Tallin, Estonia',
          position: 'Desarrollador de Software',
          period: 'Abr 1997 - May 2004',
          description: 'Administración/programación Oracle, Windows/Linux; programas Delphi.'
        }
      ],
      education: [
        { school: 'Universidad de Tartu', degree: 'Diseño de aplicaciones Cloud-native, DevOps y Kubernetes', period: 'Feb 2025 - Feb 2026' },
        { school: 'SDA Academy', degree: 'Ingeniero en IA (4 meses)', period: 'Ene 2025' },
        { school: 'HTML Academy', degree: 'Experto en HTML, CSS, JavaScript, TypeScript, Node.js', period: 'Feb 2018 - Ene 2019' },
        { school: 'Tallinna Tehnikaülikool', degree: 'Ingeniero en automatización, Magister', period: 'Sep 1996 - Ago 2002' }
      ]
    },
    'Português (Brasil)': {
      title: 'Vladimir Rurik',
      subtitle: 'Desenvolvedor Full-Stack / Entusiasta de IA / Arquiteto',
      location: 'Tallinn, Estônia',
      repositoriesTitle: 'Repositórios',
      summaryTitle: 'Resumo',
      skillsTitle: 'Habilidades Técnicas',
      experienceTitle: 'Experiência Profissional',
      educationTitle: 'Educação',
      summary: "Sou um desenvolvedor full-stack e entusiasta de IA com experiência em front-end e back-end. Nos últimos anos, contribuí para vários projetos envolvendo tecnologias de nuvem, automação de fluxo de trabalho e componentes de aprendizado de máquina.",
      skills: [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Kafka', 'Gradle', 'ASP.NET Core', 'C#', 'MS SQL Server', 'PostgreSQL', 'REST'] },
        { category: 'Frontend', items: ['React', 'Redux', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Blazor', 'Flutter'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'Bitbucket Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'Flyway'] },
        { category: 'IA & Machine Learning', items: ['Machine Learning', 'NLP', 'Deep Learning', 'Neural Networks', 'MLOps'] }
      ],
      experience: [
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estônia',
          position: 'Gerente de Desenvolvimento de Produto',
          period: 'Dez 2021 - Dez 2024',
          description: 'Liderei uma equipe de 10 pessoas, supervisionando o desenvolvimento de aplicativos. Criação de diagramas Archimate.'
        },
        {
          company: 'Compensa Vienna Insurance Group',
          location: 'Tallinn, Estônia',
          position: 'Desenvolvedor de Software Sênior',
          period: 'Nov 2019 - Dez 2021',
          description: 'Desenvolvi serviços para verificação de listas de sanções, integração KYC e análise de XML.'
        },
        {
          company: 'Põhja-Eesti Regionaalhaigla',
          location: 'Tallinn, Estônia',
          position: 'Desenvolvedor de Software Sênior',
          period: 'Jan 2019 - Ago 2019',
          description: 'Aprovação de PRs no Sistema de Informação Hospitalar.'
        },
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estônia',
          position: 'Desenvolvedor de Software Sênior',
          period: 'Mai 2013 - Nov 2018',
          description: 'Desenvolvimento do software inEnergy.'
        },
        {
          company: 'SportRadar AG',
          location: 'Tallinn, Estônia',
          position: 'Desenvolvedor de Software Sênior',
          period: 'Abr 2012 - Abr 2013',
          description: 'Aplicativo de apostas esportivas usando C# .NET WPF.'
        },
        {
          company: 'Baltic Hotel & Restoraunt Systems OÜ',
          location: 'Tallinn, Estônia',
          position: 'Gerente de Desenvolvimento',
          period: 'Mai 2004 - Abr 2012',
          description: 'Sistemas de TI para restaurantes/hotéis. Administração de servidores.'
        },
        {
          company: 'Swedbank',
          location: 'Tallinn, Estônia',
          position: 'Desenvolvedor de Software',
          period: 'Jan 2005 - Mar 2007',
          description: 'Aplicações J2EE WEB com PL/SQL.'
        },
        {
          company: 'Pensioniamet',
          location: 'Tallinn, Estônia',
          position: 'Desenvolvedor de Software',
          period: 'Abr 1997 - Mai 2004',
          description: 'Administração/programação Oracle, Windows/Linux; programas Delphi.'
        }
      ],
      education: [
        { school: 'Universidade de Tartu', degree: 'Design de aplicações Cloud-native, DevOps e Kubernetes', period: 'Fev 2025 - Fev 2026' },
        { school: 'SDA Academy', degree: 'Engenheiro de IA (4 meses)', period: 'Jan 2025' },
        { school: 'HTML Academy', degree: 'Especialista em HTML, CSS, JavaScript, TypeScript, Node.js', period: 'Fev 2018 - Jan 2019' },
        { school: 'Tallinna Tehnikaülikool', degree: 'Engenheiro de Automação, Mestrado', period: 'Set 1996 - Ago 2002' }
      ]
    },
    'Italiano': {
      title: 'Vladimir Rurik',
      subtitle: 'Sviluppatore Full-Stack / Appassionato di IA / Architetto',
      location: 'Tallinn, Estonia',
      repositoriesTitle: 'Repository',
      summaryTitle: 'Riepilogo',
      skillsTitle: 'Competenze Tecniche',
      experienceTitle: 'Esperienza Lavorativa',
      educationTitle: 'Formazione',
      summary: "Sono uno sviluppatore full-stack e appassionato di IA con esperienza sia in ambito front-end che back-end. Negli ultimi anni, ho contribuito a vari progetti che coinvolgono tecnologie cloud, automazione dei flussi di lavoro e componenti di machine learning.",
      skills: [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Kafka', 'Gradle', 'ASP.NET Core', 'C#', 'MS SQL Server', 'PostgreSQL', 'REST'] },
        { category: 'Frontend', items: ['React', 'Redux', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Blazor', 'Flutter'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'Bitbucket Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'Flyway'] },
        { category: 'IA & Machine Learning', items: ['Machine Learning', 'NLP', 'Deep Learning', 'Neural Networks', 'MLOps'] }
      ],
      experience: [
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estonia',
          position: 'Manager Sviluppo Prodotti',
          period: 'Dic 2021 - Dic 2024',
          description: 'Ho guidato un team di 10 persone, supervisionando lo sviluppo di applicazioni software.'
        },
        {
          company: 'Compensa Vienna Insurance Group',
          location: 'Tallinn, Estonia',
          position: 'Sviluppatore Software Senior',
          period: 'Nov 2019 - Dic 2021',
          description: 'Sviluppo di servizi per il controllo delle liste di sanzioni, integrazione KYC e parsing XML.'
        },
        {
          company: 'Põhja-Eesti Regionaalhaigla',
          location: 'Tallinn, Estonia',
          position: 'Sviluppatore Software Senior',
          period: 'Gen 2019 - Ago 2019',
          description: 'Approvazione PR per il Sistema Informativo Ospedaliero.'
        },
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Estonia',
          position: 'Sviluppatore Software Senior',
          period: 'Mag 2013 - Nov 2018',
          description: 'Sviluppo software inEnergy. Utilizzo di C# .NET, Javascript, Bootstrap.'
        },
        {
          company: 'SportRadar AG',
          location: 'Tallinn, Estonia',
          position: 'Sviluppatore Software Senior',
          period: 'Apr 2012 - Apr 2013',
          description: 'Applicazione di scommesse sportive tramite C# .NET WPF.'
        },
        {
          company: 'Baltic Hotel & Restoraunt Systems OÜ',
          location: 'Tallinn, Estonia',
          position: 'Manager dello Sviluppo',
          period: 'Mag 2004 - Apr 2012',
          description: 'Sistemi IT per ristoranti/hotel. Amministrazione dei server.'
        },
        {
          company: 'Swedbank',
          location: 'Tallinn, Estonia',
          position: 'Sviluppatore Software',
          period: 'Gen 2005 - Mar 2007',
          description: 'Applicazioni J2EE WEB. Distribuzione in BEA Weblogic.'
        },
        {
          company: 'Pensioniamet',
          location: 'Tallinn, Estonia',
          position: 'Sviluppatore Software',
          period: 'Apr 1997 - Mag 2004',
          description: 'Amministrazione/programmazione server Oracle/Windows/Linux; programmi Delphi.'
        }
      ],
      education: [
        { school: 'Università di Tartu', degree: 'Design di applicazioni Cloud-native, DevOps e Kubernetes', period: 'Feb 2025 - Feb 2026' },
        { school: 'SDA Academy', degree: 'Ingegnere IA (4 mesi)', period: 'Gen 2025' },
        { school: 'HTML Academy', degree: 'Esperto in HTML, CSS, JavaScript, TypeScript, Node.js', period: 'Feb 2018 - Gen 2019' },
        { school: 'Tallinna Tehnikaülikool', degree: 'Ingegnere dell\'automazione, Magistrale', period: 'Set 1996 - Ago 2002' }
      ]
    },
    'Eesti': {
      title: 'Vladimir Rurik',
      subtitle: 'Täispinup Arendaja / AI Entusiast / Arhitekt',
      location: 'Tallinn, Eesti',
      repositoriesTitle: 'Repositooriumid',
      summaryTitle: 'Kokkuvõte',
      skillsTitle: 'Tehnilised Oskused',
      experienceTitle: 'Töökogemus',
      educationTitle: 'Haridus',
      summary: "Olen täispinup arendaja ja tehisintellekti entusiast, kellel on kogemusi front-end ja back-end arenduses. Viimaste aastate jooksul olen panustanud erinevatesse projektidesse, mis hõlmavad pilvetehnoloogiaid, töövoogude automatiseerimist ja masinõppe komponente.",
      skills: [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Kafka', 'Gradle', 'ASP.NET Core', 'C#', 'MS SQL Server', 'PostgreSQL', 'REST'] },
        { category: 'Frontend', items: ['React', 'Redux', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Blazor', 'Flutter'] },
        { category: 'Pilv & DevOps', items: ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'Bitbucket Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'Flyway'] },
        { category: 'AI & Masinõpe', items: ['Masinõpe', 'NLP', 'Süvaõpe', 'Närvivõrgud', 'MLOps'] }
      ],
      experience: [
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Eesti',
          position: 'Tootearendusjuht',
          period: 'Dets 2021 - Dets 2024',
          description: 'Juhtisin 10-liikmelist meeskonda, vastutades tarkvararakenduste arendamise eest. Lõin Archimate diagramme.'
        },
        {
          company: 'Compensa Vienna Insurance Group',
          location: 'Tallinn, Eesti',
          position: 'Vanem tarkvaraarendaja',
          period: 'Nov 2019 - Dets 2021',
          description: 'Arendasin teenuseid sanktsioonide nimekirjade kontrollimiseks, KYC süsteemi integreerimiseks ja XML parsimiseks.'
        },
        {
          company: 'Põhja-Eesti Regionaalhaigla',
          location: 'Tallinn, Eesti',
          position: 'Vanem tarkvaraarendaja',
          period: 'Jaan 2019 - Aug 2019',
          description: 'Haigla infosüsteemi arenduste kinnitamine ja suunamine.'
        },
        {
          company: 'Intelometry OÜ',
          location: 'Tallinn, Eesti',
          position: 'Vanem tarkvaraarendaja',
          period: 'Mai 2013 - Nov 2018',
          description: 'inEnergy tarkvara arendus. Kasutatud: C# .NET, Javascript, Bootstrap, Win Forms.'
        },
        {
          company: 'SportRadar AG',
          location: 'Tallinn, Eesti',
          position: 'Vanem tarkvaraarendaja',
          period: 'Apr 2012 - Apr 2013',
          description: 'Spordikihlvedude rakenduste arendamine (C# .NET WPF).'
        },
        {
          company: 'Baltic Hotel & Restoraunt Systems OÜ',
          location: 'Tallinn, Eesti',
          position: 'Arendusjuht',
          period: 'Mai 2004 - Apr 2012',
          description: 'IT-süsteemide arendamine restoranidele ja hotellidele. Oracle, Linux ja Windows serverite haldamine.'
        },
        {
          company: 'Swedbank',
          location: 'Tallinn, Eesti',
          position: 'Tarkvaraarendaja',
          period: 'Jaan 2005 - Märts 2007',
          description: 'J2EE WEB rakendused PL/SQL-ga.'
        },
        {
          company: 'Pensioniamet',
          location: 'Tallinn, Eesti',
          position: 'Tarkvaraarendaja',
          period: 'Apr 1997 - Mai 2004',
          description: 'Oracle, Windows/Linux serverite haldamine; Delphi programmid.'
        }
      ],
      education: [
        { school: 'Tartu Ülikool', degree: 'Pilvepõhiste rakenduste disain, DevOps ja Kubernetes', period: 'Veebr 2025 - Veebr 2026' },
        { school: 'SDA Academy', degree: 'AI Insener (4 kuud)', period: 'Jaan 2025' },
        { school: 'HTML Academy', degree: 'Ekspert HTML, CSS, JavaScript, TypeScript, Node.js', period: 'Veebr 2018 - Jaan 2019' },
        { school: 'Tallinna Tehnikaülikool', degree: 'Automaatika insener, Magister', period: 'Sept 1996 - Aug 2002' }
      ]
    },
    'Suomi': {
      title: 'Vladimir Rurik',
      subtitle: 'Full-Stack Kehittäjä / AI Entusiasti / Arkkitehti',
      location: 'Tallinna, Viro',
      repositoriesTitle: 'Reposiitoriot',
      summaryTitle: 'Yhteenveto',
      skillsTitle: 'Tekniset Taidot',
      experienceTitle: 'Työkokemus',
      educationTitle: 'Koulutus',
      summary: "Olen full-stack kehittäjä ja tekoälystä innostunut asiantuntija. Minulla on kokemusta front-end ja back-end kehityksestä. Viime vuosina olen osallistunut useisiin projekteihin, joihin liittyy pilviteknologioita, työnkulkujen automatisointia ja koneoppimiskomponentteja.",
      skills: [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Kafka', 'Gradle', 'ASP.NET Core', 'C#', 'MS SQL Server', 'PostgreSQL', 'REST'] },
        { category: 'Frontend', items: ['React', 'Redux', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Blazor', 'Flutter'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'Bitbucket Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'Flyway'] },
        { category: 'AI & Machine Learning', items: ['Koneoppiminen', 'NLP', 'Syväoppiminen', 'Neuroverkot', 'MLOps'] }
      ],
      experience: [
        {
          company: 'Intelometry OÜ',
          location: 'Tallinna, Viro',
          position: 'Tuotekehityspäällikkö',
          period: 'Joulu 2021 - Joulu 2024',
          description: 'Johdin 10 hengen tiimiä, valvoen ohjelmistosovellusten kehitystä. Loin Archimate-kaavioita.'
        },
        {
          company: 'Compensa Vienna Insurance Group',
          location: 'Tallinna, Viro',
          position: 'Vanhempi Ohjelmistokehittäjä',
          period: 'Marras 2019 - Joulu 2021',
          description: 'Kehitin palveluita pakotelistojen tarkistamiseen, KYC-integraatioon ja XML-jäsennukseen.'
        },
        {
          company: 'Põhja-Eesti Regionaalhaigla',
          location: 'Tallinna, Viro',
          position: 'Vanhempi Ohjelmistokehittäjä',
          period: 'Tammi 2019 - Elo 2019',
          description: 'Sairaalan tietojärjestelmän vetopyyntöjen hyväksyminen.'
        },
        {
          company: 'Intelometry OÜ',
          location: 'Tallinna, Viro',
          position: 'Vanhempi Ohjelmistokehittäjä',
          period: 'Touko 2013 - Marras 2018',
          description: 'inEnergy-ohjelmiston kehitys (C# .NET, Javascript, Bootstrap).'
        },
        {
          company: 'SportRadar AG',
          location: 'Tallinna, Viro',
          position: 'Vanhempi Ohjelmistokehittäjä',
          period: 'Huhti 2012 - Huhti 2013',
          description: 'Urheiluvedonlyöntisovellusten kehittäminen (C# .NET WPF).'
        },
        {
          company: 'Baltic Hotel & Restoraunt Systems OÜ',
          location: 'Tallinna, Viro',
          position: 'Kehityspäällikkö',
          period: 'Touko 2004 - Huhti 2012',
          description: 'IT-järjestelmät ravintoloille ja hotelleille. Palvelimien ylläpito.'
        },
        {
          company: 'Swedbank',
          location: 'Tallinna, Viro',
          position: 'Ohjelmistokehittäjä',
          period: 'Tammi 2005 - Maalis 2007',
          description: 'J2EE WEB-sovellukset PL/SQL:llä.'
        },
        {
          company: 'Pensioniamet',
          location: 'Tallinna, Viro',
          position: 'Ohjelmistokehittäjä',
          period: 'Huhti 1997 - Touko 2004',
          description: 'Oracle, Windows/Linux-palvelimien ylläpito; Delphi-ohjelmat.'
        }
      ],
      education: [
        { school: 'Tartton Yliopisto', degree: 'Pilvinatiivi sovellussuunnittelu, DevOps ja Kubernetes', period: 'Helmi 2025 - Helmi 2026' },
        { school: 'SDA Academy', degree: 'Tekoälyinsinööri (4 kuukautta)', period: 'Tammi 2025' },
        { school: 'HTML Academy', degree: 'Asiantuntija: HTML, CSS, JavaScript, TypeScript, Node.js', period: 'Helmi 2018 - Tammi 2019' },
        { school: 'Tallinna Tehnikaülikool', degree: 'Automaatioinsinööri, Maisteri', period: 'Syys 1996 - Elo 2002' }
      ]
    }
  };

  const langContent = content[activeTab as keyof typeof content] || content['English'];

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
            padding: '20px 0',
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
                key={lang}
                onClick={() => setActiveTab(lang)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: activeTab === lang ? '#3498db' : 'transparent',
                  color: activeTab === lang ? '#fff' : '#61dafb',
                  border: activeTab === lang ? 'none' : '1px solid #7f8c8d',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                {lang}
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
              color: '#333'
            }}
          >
            <h1>{langContent.title}</h1>
            <p style={{ color: '#666', marginBottom: '20px', fontSize: '15px' }}>
              {langContent.subtitle}
            </p>
            <p style={{ color: '#666', margin: '0.25rem 0 16px 0' }}>{langContent.location}</p>

            <h3>{langContent.repositoriesTitle}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
              <li>
                <a href="https://github.com/RurikV" style={{ color: '#3498db' }} target="_blank" rel="noreferrer">
                  github.com/RurikV
                </a>
              </li>
              <li>
                <a href="https://github.com/vladimir-rurik" style={{ color: '#3498db' }} target="_blank" rel="noreferrer">
                  github.com/vladimir-rurik
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/vovo-otus/excusiohub" style={{ color: '#3498db' }} target="_blank" rel="noreferrer">
                  gitlab.com/vovo-otus/excusiohub
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/room-2-otus" style={{ color: '#3498db' }} target="_blank" rel="noreferrer">
                  gitlab.com/room-2-otus
                </a>
              </li>
            </ul>

            <h2>{langContent.summaryTitle}</h2>
            <p style={{ lineHeight: '1.5' }}>{langContent.summary}</p>

            <h2>{langContent.skillsTitle}</h2>
            {langContent.skills.map((skillGroup: any) => (
              <div key={skillGroup.category} style={{ marginBottom: '8px' }}>
                <strong>{skillGroup.category}:</strong> {skillGroup.items.join(', ')}
              </div>
            ))}

            <h2>{langContent.experienceTitle}</h2>
            {langContent.experience.map((job: any) => (
              <div key={job.company + job.period} style={{ marginBottom: '16px' }}>
                <p style={{ margin: '0 0 2px 0' }}>
                  <strong>
                    {job.position} @ {job.company}
                  </strong>
                </p>
                <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#666' }}>
                  {job.location} | {job.period}
                </p>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4' }}>{job.description}</p>
              </div>
            ))}

            <h2>{langContent.educationTitle}</h2>
            {langContent.education.map((edu: any) => (
              <div key={edu.school + edu.degree} style={{ marginBottom: '12px' }}>
                <p style={{ margin: '0 0 2px 0' }}>
                  <strong>{edu.school}</strong>
                </p>
                <p style={{ margin: 0, fontSize: '14px' }}>
                  {edu.degree}
                </p>
                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                  {edu.period}
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
