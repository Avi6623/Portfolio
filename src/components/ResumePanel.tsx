import { useMemo } from "react";
import { MdClose, MdDownload, MdPrint } from "react-icons/md";
import "./styles/ResumePanel.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const education = [
  {
    institute: "Amity University Lucknow Campus",
    degree: "Bachelor of Computer Applications (BCA), Information Technology",
    duration: "Aug 2023 - Jun 2026",
    details:
      "Actively learning full-stack development and UI/UX with practical project execution in React Native and Node.js.",
  },
  {
    institute: "A. Mukherjee & Co.",
    degree: "Class 10",
    duration: "State Board",
    details: "Strong academic fundamentals and disciplined learning base.",
  },
  {
    institute: "Amity Institute",
    degree: "Bachelor of Computer Applications",
    duration: "CGPA: 6.87/10",
    details: "Application development focused coursework and hands-on software projects.",
  },
  {
    institute: "Bhagirath Inks",
    degree: "Class 12",
    duration: "State Board",
    details: "Higher secondary foundation with growing interest in technology and design.",
  },
  {
    institute: "CT Group of Institutions",
    degree: "ADCA",
    duration: "Diploma",
    details: "Formal introduction to computer applications and system fundamentals.",
  },
];

const projects = [
  "Centralized Backend API",
  "Customer App",
  "Admin Panel",
  "Rider App",
  "Super Admin Panel",
  "NGOServe",
  "NGOConnect",
  "Shared NGO Backend API",
  "NGOConnect Legacy",
];

const skills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "Socket.IO",
  "JWT + RBAC",
  "React.js",
  "React Native",
  "TypeScript",
  "Vite",
];

const resumePdfPath = "/docs/Avneesh_Shukla_CV.pdf";

const ResumePanel = ({ isOpen, onClose }: Props) => {
  const resumeHtml = useMemo(() => {
    const educationHtml = education
      .map(
        (item) =>
          `<li><strong>${item.institute}</strong> - ${item.degree} (${item.duration})<br/>${item.details}</li>`
      )
      .join("");

    const projectsHtml = projects.map((project) => `<li>${project}</li>`).join("");

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Avneesh Shukla Resume</title>
<style>
body{font-family:Arial,sans-serif;line-height:1.5;max-width:900px;margin:20px auto;padding:20px;color:#111}
h1{margin-bottom:4px}h2{margin-top:24px;border-bottom:1px solid #ddd;padding-bottom:6px}
.badge{display:inline-block;margin:4px 6px 0 0;padding:5px 10px;border:1px solid #ddd;border-radius:999px;font-size:12px}
li{margin-bottom:8px}
</style>
</head>
<body>
<h1>Avneesh Shukla</h1>
<p>Full-Stack Developer (Backend-Leaning)</p>
<p>Email: avneesh.amity@gmail.com | LinkedIn: https://www.linkedin.com/in/avneesh-shukla-453a922b6/ | GitHub: https://github.com/Avi6623</p>
<h2>Professional Summary</h2>
<p>Backend-focused full-stack developer experienced in building secure APIs, real-time systems, and scalable web/mobile products with measurable outcomes.</p>
<h2>Skills</h2>
<div>${skills.map((s) => `<span class="badge">${s}</span>`).join("")}</div>
<h2>Project Portfolio</h2>
<ul>${projectsHtml}</ul>
<h2>Education</h2>
<ul>${educationHtml}</ul>
</body>
</html>`;
  }, []);

  const downloadResume = () => {
    const anchor = document.createElement("a");
    anchor.href = resumePdfPath;
    anchor.download = "Avneesh_Shukla_CV.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const downloadWebVersion = () => {
    const blob = new Blob([resumeHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Avneesh-Shukla-Resume-Web.html";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
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
          <p>Top 1% Backend-Leaning Full-Stack Developer Profile</p>
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
          <h3>Executive Summary</h3>
          <p>
            Product-minded engineer with strong backend ownership. Built multi-app ecosystems,
            real-time systems, admin platforms, and secure APIs with measurable performance impact.
          </p>
        </section>

        <section>
          <h3>Core Skills</h3>
          <div className="resume-skill-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section>
          <h3>Project Portfolio</h3>
          <div className="resume-project-list">
            {projects.map((project, index) => (
              <article key={project}>
                <h4>{index + 1}. {project}</h4>
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
            <MdDownload /> Download CV (PDF)
          </button>
          <button onClick={downloadWebVersion}>
            <MdDownload /> Download Web Resume
          </button>
          <button onClick={() => window.print()}>
            <MdPrint /> Print / Save PDF
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ResumePanel;
