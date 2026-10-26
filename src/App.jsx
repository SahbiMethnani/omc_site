import { useEffect, useState } from "react";

const CONTACT = {
  email: "contact@omc-developpement.tn",
  phone: "+21656302645", 
  whatsapp: "21656302645", 
  city: "Tunis, Tunisie",
  linkedin: "https://www.linkedin.com/"};

const NAV = [
  { href: "#expertise", label: "Expertise" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#formations", label: "Formations" },
  { href: "#contact", label: "Contact" },
];

const STAGES = ["Capteur", "Firmware", "Connectivité", "Application", "Intelligence artificielle"];

const EXPERTISE = [
  {
    title: "Systèmes embarqués et IoT",
    text: "Cartes électroniques, microcontrôleurs, capteurs et communication. Nous concevons le matériel et le firmware qui collectent les données sur le terrain.",
    items: ["Microcontrôleurs", "Capteurs", "Protocoles IoT", "Prototypage"],
  },
  {
    title: "Applications web et mobiles",
    text: "Des applications rapides et simples à utiliser, avec une interface en React et une API solide derrière.",
    items: ["React", "FastAPI", "Bases de données", "Déploiement cloud"],
  },
  {
    title: "Intelligence artificielle",
    text: "Chatbots qui répondent à partir de vos propres documents, automatisation de tâches et exploitation des données de vos équipements.",
    items: ["Chatbots RAG", "Traitement de documents", "Analyse de données", "Automatisation"],
  },
  {
    title: "Digitalisation des métiers",
    text: "Restaurants, commerces, centres de formation, coachs : nous transformons vos processus papier en outils de gestion complets.",
    items: ["Gestion de stock et caisse", "Réservation en ligne", "Suivi des clients", "Tableaux de bord"],
  },
];

const PROJECTS = [
  {
    name: "Tactak",
    kind: "Restaurant",
    text: "Application de menu numérique et de réservation de tables pour restaurants. Le client consulte la carte et réserve depuis son téléphone.",
    tags: ["Menu en ligne", "Réservation"],
    url: "https://tactak.netlify.app/",
  },
  {
    name: "POS Vente",
    kind: "Commerce",
    text: "Système complet de gestion de boutique : caisse, produits, stock et suivi des ventes.",
    tags: ["Caisse", "Stock", "React", "FastAPI"],
    url: "https://pos-vente.netlify.app/",
  },
  {
    name: "Formation Platform",
    kind: "Formation",
    text: "Plateforme de gestion de formation avec un espace étudiant et un espace formateur : cours, évaluations et suivi de progression.",
    tags: ["Espace étudiant", "Espace formateur", "React", "FastAPI"],
    url: "https://formation-platform.netlify.app/",
  },
  {
    name: "Coaching Sport",
    kind: "Sport et bien-être",
    text: "Site web pour un coach sportif : présentation des programmes, des offres et prise de contact.",
    tags: ["Site vitrine", "Programmes"],
    url: "https://coachingsport.netlify.app/",
  },
];

const TRAININGS = [
  {
    title: "Python",
    text: "Des bases au développement d'applications et à l'automatisation, avec des projets concrets.",
    audience: "Débutants et étudiants",
  },
  {
    title: "React",
    text: "Construire des interfaces modernes, de la première page au déploiement en ligne.",
    audience: "Étudiants et développeurs",
  },
  {
    title: "Intelligence artificielle",
    text: "Comprendre les modèles, les utiliser dans vos applications et créer un chatbot sur vos documents.",
    audience: "Étudiants et professionnels",
  },
  {
    title: "Encadrement de PFE",
    text: "Choix du sujet, architecture, développement, rédaction du rapport et préparation de la soutenance.",
    audience: "Étudiants en fin d'études",
  },
];

/* ------------------------------------------------------------------ */

function Logo() {
  return (
    <a
      className="logo"
      href="#top"
      aria-label="OMC Développement, retour en haut"
    >
      <img
        src="/logo.jpg"
        alt="Logo OMC Développement"
        className="logo-image"
      />

      <span className="logo-text">
        <strong>OMC</strong> Développement
      </span>
    </a>
  );
}

function Header({ theme, onToggleTheme })  {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Logo />
        <button
  className="theme-toggle"
  type="button"
  onClick={onToggleTheme}
  aria-label={
    theme === "dark"
      ? "Activer le mode clair"
      : "Activer le mode sombre"
  }
  title={theme === "dark" ? "Mode clair" : "Mode sombre"}
>
  {theme === "dark" ? "☀️" : "🌙"}
</button>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
        <nav id="main-nav" className={"nav" + (open ? " nav-open" : "")} aria-label="Navigation principale">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="btn btn-small" href="#contact" onClick={() => setOpen(false)}>
            Parler de votre projet
          </a>
        </nav>
      </div>
    </header>
  );
}

function SignalChain() {
  // Une seule ligne : un signal carré (le monde de l'embarqué) qui s'adoucit en courbe (l'IA)
  const d =
    "M0 170 H70 V60 H140 V170 H210 V60 H280 V170 H350 V60 H420 V170 H490 V110 H550 " +
    "C610 110 620 40 690 40 S780 180 850 180 S940 40 1010 40 S1100 150 1160 150 S1190 120 1200 110";
  return (
    <figure className="chain" aria-label="Schéma : du signal du capteur à l'intelligence artificielle">
      <svg viewBox="0 0 1200 220" preserveAspectRatio="none" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="sig" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0" stopColor="#0F2A43" />
            <stop offset="0.45" stopColor="#0F2A43" />
            <stop offset="0.6" stopColor="#1F5BFF" />
            <stop offset="1" stopColor="#1F5BFF" />
          </linearGradient>
        </defs>
        <path className="chain-grid" d="M0 110 H1200" />
        <path className="chain-line" d={d} pathLength="1" fill="none" stroke="url(#sig)" strokeWidth="5" strokeLinejoin="round" />
      </svg>
      <ol className="chain-stages">
        {STAGES.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </figure>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <h1>
          De la carte électronique à l'intelligence artificielle.
        </h1>
        <p className="hero-lead">
          OMC Développement conçoit des solutions informatiques complètes pour les entreprises tunisiennes : matériel
          embarqué, applications web et outils d'IA, réalisés par la même équipe.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#contact">
            Demander un devis gratuit
          </a>
          <a className="btn btn-ghost" href="#realisations">
            Voir nos réalisations
          </a>
        </div>
        <SignalChain />
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="wrap">
        <h2>Ce que nous construisons</h2>
        <p className="section-lead">
          Une seule équipe pour toute la chaîne : vous n'avez pas besoin de coordonner plusieurs prestataires entre le
          matériel, le logiciel et l'IA.
        </p>
        <div className="expertise">
          {EXPERTISE.map((e) => (
            <article key={e.title} className="expertise-item">
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <ul className="tags">
                {e.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section section-tint" id="realisations">
      <div className="wrap">
        <h2>Des applications déjà en ligne</h2>
        <p className="section-lead">
          Quatre projets livrés et utilisables aujourd'hui. Ouvrez-les et testez-les vous-même.
        </p>
        <ul className="projects">
          {PROJECTS.map((p) => (
            <li key={p.name} className="project">
              <div className="project-head">
                <h3>{p.name}</h3>
                <span className="project-kind">{p.kind}</span>
              </div>
              <p className="project-text">{p.text}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                Ouvrir {p.name}
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Trainings() {
  return (
    <section className="section section-dark" id="formations">
      <div className="wrap">
        <h2>Formations et encadrement de PFE</h2>
        <p className="section-lead">
          Nous formons la prochaine génération de développeurs tunisiens, avec la même exigence que pour nos projets
          clients.
        </p>
        <div className="trainings">
          {TRAININGS.map((t) => (
            <article key={t.title} className="training">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <p className="training-audience">{t.audience}</p>
            </article>
          ))}
        </div>
        <a className="btn btn-yellow" href="#contact">
          Demander le programme
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Devis pour un projet", message: "" });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact">
        <div>
          <h2>Parlons de votre projet</h2>
          <p className="section-lead">
            Décrivez votre besoin en quelques lignes. Nous vous répondons sous 24 heures avec une première proposition.
          </p>
          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </dd>
            </div>
            <div>
              <dt>Téléphone</dt>
              <dd>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  Écrire sur WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt>Ville</dt>
              <dd>{CONTACT.city}</dd>
            </div>
          </dl>
        </div>

        <form className="form" onSubmit={submit}>
          <label>
            Nom complet
            <input type="text" required value={form.name} onChange={update("name")} autoComplete="name" />
          </label>
          <label>
            Email
            <input type="email" required value={form.email} onChange={update("email")} autoComplete="email" />
          </label>
          <label>
            Sujet
            <select value={form.subject} onChange={update("subject")}>
              <option>Devis pour un projet</option>
              <option>Formation</option>
              <option>Encadrement de PFE</option>
              <option>Autre demande</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="5" required value={form.message} onChange={update("message")} />
          </label>
          <button className="btn" type="submit">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Logo />
        <p>© {new Date().getFullYear()} OMC Développement. Tous droits réservés.</p>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("omc-theme") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("omc-theme", theme);
    } catch {
      // Le site reste fonctionnel si le stockage est indisponible.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Trainings />
        <Contact />
      </main>
      <Footer />
    </>
  );
}