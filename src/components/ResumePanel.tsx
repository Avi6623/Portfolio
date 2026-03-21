import { MdClose, MdDownload, MdPrint } from "react-icons/md";
import "./styles/ResumePanel.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type Project = {
  title: string;
  stack: string;
  highlights: string[];
};

const resumePdfPath = "/docs/Avneesh_Shukla_CV.pdf";

const skills = {
  backend: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "JWT", "RBAC"],
  frontend: ["React.js", "React Native", "TypeScript", "Vite", "TailwindCSS"],
  tools: ["Git", "REST APIs", "Deployment Basics", "System Design Fundamentals"],
};

const projects: Project[] = [
  {
    title: "Centralized Backend API",
    stack: "Node.js, Express, MongoDB, Redis, Socket.IO",
    highlights: [
      "Built secure REST + realtime API foundation for multiple products.",
      "Implemented authentication and role-based access controls.",
      "Added caching and background-job style workflows for better performance.",
    ],
  },
  {
    title: "Customer App",
    stack: "React Native",
    highlights: [
      "Developed customer-facing app flows for discovery and checkout.",
      "Integrated live updates with backend events for smooth UX.",
    ],
  },
  {
    title: "Admin Panel",
    stack: "React.js",
    highlights: [
      "Created operations dashboard for monitoring, analytics, and control.",
      "Connected panel with backend modules and secured role-based actions.",
    ],
  },
  {
    title: "Rider App",
    stack: "React Native, Geolocation",
    highlights: [
      "Implemented rider-facing workflows with real-time tracking support.",
      "Handled location updates and session-based operational flows.",
    ],
  },
  {
    title: "Super Admin Panel",
    stack: "React.js, Vite",
    highlights: [
      "Built high-level management layer with multi-system visibility.",
      "Added privileged controls and consolidated oversight workflows.",
    ],
  },
  {
    title: "NGOServe",
    stack: "React, TypeScript, Node.js",
    highlights: [
      "Developed NGO operations dashboard for campaigns, events, and teams.",
      "Supported donation operations and activity visibility.",
    ],
  },
  {
    title: "NGOConnect",
    stack: "React, Vite, Node.js",
    highlights: [
      "Built public-facing platform for campaigns and volunteer interactions.",
      "Implemented trust and transparency-focused user journeys.",
    ],
  },
  {
    title: "Shared NGO Backend API",
    stack: "Node.js, Express.js",
    highlights: [
      "Created shared backend layer used across multiple NGO platforms.",
      "Maintained compatibility and reusable business logic.",
    ],
  },
  {
    title: "NGOConnect Legacy",
    stack: "React, TypeScript",
    highlights: [
      "Worked on compatibility-focused frontend for transition scenarios.",
      "Supported legacy flow continuity during modernization.",
    ],
  },
];

const education = [
  {
    institute: "Amity University Lucknow Campus",
    degree: "Bachelor of Computer Applications (BCA), Information Technology",
    duration: "Aug 2023 - Jun 2026",
    details:
      "Currently pursuing BCA with practical focus on software development, React Native, Node.js, backend concepts, and UI/UX learning.",
  },
  {
    institute: "Amity Institute",
    degree: "Bachelor of Computer Applications",
    duration: "CGPA: 6.87/10",
    details: "Academic profile with application development and software fundamentals.",
  },
  {
    institute: "Bhagirath Inks",
    degree: "Class 12 (State Board)",
    duration: "Higher Secondary",
    details: "Completed higher secondary education.",
  },
  {
    institute: "A. Mukherjee & Co.",
    degree: "Class 10 (State Board)",
    duration: "Secondary",
    details: "Completed secondary education with strong fundamentals.",
  },
  {
    institute: "CT Group of Institutions",
    degree: "ADCA",
    duration: "Diploma",
    details: "Computer applications diploma foundation.",
  },
];

const ResumePanel = ({ isOpen, onClose }: Props) => {
  const downloadResume = () => {
    const anchor = document.createElement("a");
    anchor.href = resumePdfPath;
    anchor.download = "Avneesh_Shukla_CV.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const printResume = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="resume-overlay" role="dialog" aria-modal="true" aria-label="Resume">
      <div className="resume-card">
        <button className="resume-close" onClick={onClose} aria-label="Close resume">
          <MdClose />
        </button>

        <header className="resume-header">
          <h2>Avneesh Shukla</h2>
          <p>Fresher Full-Stack Developer (Backend-Leaning)</p>
          <div className="resume-links">
            <a href="mailto:avneesh.amity@gmail.com">avneesh.amity@gmail.com</a>
            <a href="https://www.linkedin.com/in/avneesh-shukla-453a922b6/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Avi6623" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <section>
          <h3>Professional Summary</h3>
          <p>
            Fresher developer with hands-on project experience across backend APIs, dashboards,
            and mobile/web applications. Strong learning mindset with practical delivery in
            Node.js and React ecosystem.
          </p>
        </section>

        <section>
          <h3>Core Skills</h3>
          <div className="resume-skill-grid">
            {skills.backend.map((item) => (
              <span key={`b-${item}`}>{item}</span>
            ))}
            {skills.frontend.map((item) => (
              <span key={`f-${item}`}>{item}</span>
            ))}
            {skills.tools.map((item) => (
              <span key={`t-${item}`}>{item}</span>
            ))}
          </div>
        </section>

        <section>
          <h3>Project Experience</h3>
          <div className="resume-project-list">
            {projects.map((project) => (
              <article key={project.title}>
                <h4>{project.title}</h4>
                <p className="degree">{project.stack}</p>
                <ul>
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h3>Education</h3>
          <div className="resume-education-list">
            {education.map((item) => (
              <article key={`${item.institute}-${item.degree}`}>
                <h4>{item.institute}</h4>
                <p className="degree">{item.degree}</p>
                <p className="duration">{item.duration}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="resume-actions">
          <button onClick={downloadResume}>
            <MdDownload /> Download Original CV (PDF)
          </button>
          <button onClick={printResume}>
            <MdPrint /> Print / Save PDF
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ResumePanel;
