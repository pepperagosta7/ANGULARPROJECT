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
  aboutMe = "Mi chiamo Giuseppe Ragosta, ho 24 anni e sono un ragazzo con tanta voglia di lavorare e accrescere le mie conoscenze. Nel mio futuro professionale, voglio crescere in un ruolo che mi permetta di utilizzare e approfondire le mie competenze tecniche, contribuendo a progetti innovativi.";

  experiences = [
    {
      role: "Sviluppatore di software",
      company: "DaVinci Engineering",
      duration: "01/09/2022 – 31/08/2024",
      description: "Risorsa umana di DaVinci per Continental per lo sviluppo, la validazione, la verifica e il testing di software con architettura AUTOSAR."
    },
    {
      role: "Sviluppatore Web",
      company: "I.T. Svil srl",
      duration: "31/05/2022 – 31/08/2022",
      description: "Tirocinio universitario in programmazione full stack con Java Spring Boot, Hibernate ORM, Apache Maven e AngularJS."
    }
  ];

  education = [
    {
      degree: "Laurea triennale in Scienze Informatiche",
      institution: "Università degli Studi di Salerno",
      year: "2023"
    },
    {
      degree: "Attestato di frequenza",
      institution: "ITConsulting s.r.l.",
      year: "2025"
    }
  ];

  skills = [
    "Java (Spring Boot, Hibernate)",
    "HTML5, CSS3, TypeScript, Angular",
    "SQL (Oracle, PostgreSQL, MySQL)",
    "Versionamento: Git, GitHub",
    "AUTOSAR, Vector CANoe, Lauterbach TRACE32"
  ];

  languages = [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "C1" },
    { name: "Francese", level: "A1" }
  ];

  projects = [
    {
      title: "Progetto 1",
      description: "Descrizione del progetto..."
    }
  ];

  contactInfo = {
    email: "giusepperagosta29@gmail.com",
    phone: "(+39) 3887906719"
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
