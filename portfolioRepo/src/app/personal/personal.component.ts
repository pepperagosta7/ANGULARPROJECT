import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-personal',
  imports: [CommonModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements AfterViewInit {
  aboutMe = "Mi chiamo Giuseppe Ragosta, ho 24 anni e sono un ragazzo con tanta voglia di lavorare e accrescere le mie conoscenze. Nel mio futuro professionale, voglio crescere in un ruolo che mi permetta di utilizzare e approfondire le mie competenze tecniche, contribuendo a progetti innovativi. Il mio obiettivo è raggiungere posizioni in cui posso avere un impatto concreto, collaborando in team e prendendo decisioni che guidino il successo dell'azienda.";

  experiences = [
    {
      role: "Full-stack Developer",
      company: "ITConsulting s.r.l.",
      duration: "17/02/2025 – 28/03/2025",
      description: "Academy finanziata da Forma.Temp e realizzata in collaborazione con GiGroup APL. Programma del corso: SQL, Spring Boot, Angular, Node.js, e integrazione di Java e SQL."
    },
    {
      role: "Infotainement Quality Software Engineer",
      company: "DaVinci Engineering GmbH",
      duration: "01/09/2022 – 31/08/2024",
      description: "Risorsa umana di DaVinci per Continental per lo sviluppo, la validazione, la verifica e il testing di software con architettura AUTOSAR per prototipi di Automotive boards. Utilizzo di tools quali EB Tresos, AutosarBuilder, Vector CANoe, Lauterbach Trace32 e Atlassian Suite (JIRA/Confluence)."
    },
    {
      role: "Sviluppatore Web",
      company: "I.T. Svil srl",
      duration: "05/2022 – 08/2022",
      description: "Tirocinio universitario in programmazione back-end. Sviluppo, test e debugging di microservizi con Java EE, Spring Boot, JPA, Hibernate, Maven, PostgreSQL, Docker, Jenkins e GitLab. Framework Agile: SCRUM."
    }
  ];

  education = [
    {
      degree: "Laurea triennale in Scienze Informatiche",
      institution: "Università degli Studi di Salerno",
      year: "16/09/2019 – 15/12/2023"
    },
    {
      degree: "Diploma di Liceo Classico Europeo",
      institution: "Liceo Classico Statale indirizzo T.L. Caro",
      year: "09/2014 – 06/2019"
    }
  ];

  skills = [
    "Automotive: EB Tresos, CANOE Vector, AUTOSAR, Lauterbach TRACE32, Embedded C, MISRA C",
    "Full-stack Development: Java (Java SE, Java EE, Spring Boot), Angular, Node.js, SQL, REST API",
    "Database: PostgreSQL, MySQL, Oracle",
    "Versionamento: Git, GitHub, Atlassian Suite (JIRA, Confluence)",
    "Web Development: HTML, CSS, JavaScript, TypeScript",
    "Build Tools: Maven, Gradle, Docker, Jenkins"
  ];

  languages = [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "C1" },
    { name: "Francese", level: "A1" }
  ];

  contactInfo = {
    email: "giusepperagosta29@gmail.com",
    phone: "(+39) 3887906719",
    linkedin: "https://www.linkedin.com/in/giuseppe-ragosta-a16409253/",
    github: "https://github.com/pepperagosta7"
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Controlla se il codice è in esecuzione nel browser
    if (isPlatformBrowser(this.platformId)) {
      const navLinks = document.querySelectorAll("nav ul li a");

      // Effetto di scorrimento attivo sulla navbar
      window.addEventListener("scroll", () => {
        const fromTop = window.scrollY;

        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          const section = href ? document.querySelector(href) : null;

          if (
            section && section instanceof HTMLElement &&
            section.offsetTop <= fromTop + 100 &&
            section.offsetTop + section.offsetHeight > fromTop + 100
          ) {
            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
          }
        });
      });

      // Animazione smooth per lo scrolling
      navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const href = link.getAttribute("href");
          const targetId = href ? href.substring(1) : "";
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 50,
              behavior: "smooth"
            });
          }
        });
      });
    }
  }
}
