import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";
import "./styles/About.css";

const About = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `const avneesh = {
  name: 'Avneesh Shukla',
  role: 'Full-Stack Developer',
  focus: ['Backend Architecture', 'APIs', 'React Native'],
  skills: {
    backend: ['Node.js', 'Express', 'MongoDB'],
    frontend: ['React', 'TailwindCSS', 'Vite'],
    infra: ['Redis', 'Socket.IO', 'Firebase']
  }
};

// Deploy Identity Sequence
console.log("=> INITIALIZING SECURE PROFILE...");
console.log(JSON.stringify(avneesh, null, 2));
console.log("=> STATUS: 100% OPERATIONAL");`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="about-section" id="about">
      <div className="about-code-window">
        <div className="code-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="code-title">avneesh.ts</span>
          <button className="copy-btn" onClick={handleCopy} title="Copy Code">
            {copied ? <MdCheck size={16} color="#27c93f" /> : <MdContentCopy size={16} />}
          </button>
        </div>
        <pre className="code-snippet">
          <code>
<span className="keyword">const</span> <span className="number">avneesh</span> = {'{'}{'\n'}
  <span className="keyword">name</span>: <span className="string">'Avneesh Shukla'</span>,{'\n'}
  <span className="keyword">role</span>: <span className="string">'Full-Stack Developer'</span>,{'\n'}
  <span className="keyword">focus</span>: [<span className="string">'Backend Architecture'</span>, <span className="string">'APIs'</span>, <span className="string">'React Native'</span>],{'\n'}
  <span className="keyword">skills</span>: {'{'}{'\n'}
    backend: [<span className="string">'Node.js'</span>, <span className="string">'Express'</span>, <span className="string">'MongoDB'</span>],{'\n'}
    frontend: [<span className="string">'React'</span>, <span className="string">'TailwindCSS'</span>, <span className="string">'Vite'</span>],{'\n'}
    infra: [<span className="string">'Redis'</span>, <span className="string">'Socket.IO'</span>, <span className="string">'Firebase'</span>]{'\n'}
  {'}'}{'\n'}
{'}'};{'\n'}
{'\n'}
<span className="comment">// Deploy Identity Sequence</span>{'\n'}
console.log(<span className="string">"={`>`} INITIALIZING SECURE PROFILE..."</span>);{'\n'}
console.log(JSON.stringify(<span className="number">avneesh</span>, <span className="number">null</span>, <span className="number">2</span>));{'\n'}
console.log(<span className="string">"={`>`} STATUS: 100% OPERATIONAL"</span>);
          </code>
        </pre>
        <div className="code-footer">
          <span className="hint-icon">💡</span> 
          <span>Run this script in your <strong>Browser Console (F12)</strong> or an <strong>Online JS Compiler</strong>.</span>
        </div>
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
              I am a Full-Stack Software Developer equipped with hands-on experience in building comprehensive digital products from the ground up. While I am proficient across the entire stack—including React for web and React Native for mobile—my core expertise lies in backend engineering.
              <br />
              <br />
              I specialize in designing secure, scalable APIs using Node.js and Express, managing complex database schemas in MongoDB, and implementing real-time features using Socket.IO and Redis. I am passionate about writing clean, maintainable code and solving strict performance challenges.
            </p>
      </div>
    </div>
  );
};

export default About;
