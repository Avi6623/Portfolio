import React, { PropsWithChildren, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <>
      <div 
        className="landing-section" 
        id="landingDiv"
        onMouseMove={handleMouseMove}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        } as React.CSSProperties}
      >
        <div className="landing-container">
          <div className="landing-intro">
            <h2>👋 Hey, I'm</h2>
            <h1>
              AVNEESH
              <br />
              <span>SHUKLA.</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Building robust digital ecosystems...</h3>
            <div className="landing-info-h2" aria-hidden="true">
              <div className="landing-h2-1">Full-Stack Developer</div>
              <div className="landing-h2-2">Backend-Leaning</div>
            </div>
            <div className="landing-roles-secondary" aria-hidden="true">
              <div className="landing-h2-info">Backend-Leaning</div>
              <div className="landing-h2-info-1">Full-Stack Developer</div>
            </div>
            <div className="metrics-banner" style={{ display: 'flex', gap: '15px', marginTop: '30px', color: 'var(--accentColor)', fontSize: '14px', letterSpacing: '1px', fontWeight: 600, flexWrap: 'wrap' }}>
              <span>Node.js APIs</span> • <span>React & React Native</span> • <span>Real-Time Systems</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
