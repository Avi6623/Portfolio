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
      "Focused on software development, backend concepts, databases, and UI/UX design with practical project work.",
  },
  {
    institute: "A. Mukherjee & Co.",
    degree: "Class 10",
    duration: "State Board",
    details: "Built strong core fundamentals in mathematics and computer basics.",
  },
  {
    institute: "Amity Institute",
    degree: "Bachelor of Computer Applications",
    duration: "CGPA: 6.87/10",
    details: "Academic profile emphasizing application development and modern software tooling.",
  },
  {
    institute: "Bhagirath Inks",
    degree: "Class 12",
    duration: "State Board",
    details: "Higher secondary education with consistent performance and technical curiosity.",
  },
  {
    institute: "CT Group of Institutions",
    degree: "ADCA",
    duration: "Diploma",
    details: "Early formal computer applications training and productivity tooling.",
  },
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

const ResumePanel = ({ isOpen, onClose }: Props) => {
  const resumeHtml = useMemo(() => {
    const educationHtml = education
      .map(
        (item) =>
          `<li><strong>${item.institute}</strong> - ${item.degree} (${item.duration})<br/>${item.details}</li>`
      )
      .join("");

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
li{margin-bottom:10px}
</style>
</head>
<body>
<h1>Avneesh Shukla</h1>
<p>Full-Stack Developer (Backend-Leaning)</p>
<p>Email: avneesh.amity@gmail.com | LinkedIn: https://www.linkedin.com/in/avneesh-shukla-453a922b6/ | GitHub: https://github.com/Avi6623</p>
<h2>Professional Summary</h2>
<p>Backend-focused full-stack developer experienced in building secure APIs, real-time systems, and scalable web/mobile products with production-oriented engineering practices.</p>
<h2>Skills</h2>
<div>${skills.map((s) => `<span class="badge">${s}</span>`).join("")}</div>
<h2>Education</h2>
<ul>${educationHtml}</ul>
</body>
</html>`;
  }, []);

  const downloadResume = () => {
    const blob = new Blob([resumeHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Avneesh-Shukla-Resume.html";
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
          <p>Full-Stack Developer (Backend-Leaning)</p>
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
          <h3>Summary</h3>
          <p>
            Backend-focused full-stack developer with hands-on experience in building secure APIs,
            real-time systems, and scalable web/mobile products. Strong ownership mindset with
            measurable engineering outcomes.
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
            <MdDownload /> Download Resume
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
