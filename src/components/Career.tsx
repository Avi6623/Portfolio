import { useEffect, useRef } from "react";
import "./styles/Career.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      let scrollWidth = trackRef.current!.scrollWidth;
      let windowWidth = window.innerWidth;
      
      // Calculate how far to move left
      let xMove = -(scrollWidth - windowWidth + 200);

      gsap.to(trackRef.current, {
        x: xMove,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "center center",
          end: `+=${Math.abs(xMove)}`,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="career-section section-container" ref={containerRef}>
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> focus
          <br />
          <span className="scroll-hint highlight">Scroll this way &gt;&gt;</span>
        </h2>
        
        <div className="career-track" ref={trackRef}>
          <div className="career-info-box custom-glass-card">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Graduate</h4>
                <h5>Amity University</h5>
              </div>
              <h3 style={{ whiteSpace: 'nowrap' }}>2023—26</h3>
            </div>
            <p>
              Started my journey as a developer here. Completed my 6th semester on March 19, 2026, building a strong foundation in software engineering, algorithms, and practical product development.
            </p>
          </div>
          <div className="career-info-box custom-glass-card">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend & API Engineering</h4>
                <h5>Independent & Freelance</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Deepened expertise in Node.js, Express, and database architecture. 
              Focused on designing scalable RESTful APIs, microservices, and 
              real-time systems tailored for high-performance applications.
            </p>
          </div>
          <div className="career-info-box custom-glass-card highlight-glow">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Node.js & React Native</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Engineering resilient backend architectures, real-time user apps, and comprehensive 
              administrative suites. Focused on building scalable APIs with Node.js and integrating 
              smooth cross-platform experiences using React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
