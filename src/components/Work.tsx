import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Centralized Backend API",
    category: "System Architecture",
    tools: "Node.js, Express, MongoDB, Socket.IO, Redis, Razorpay, Firebase, Cron, JWT, RBAC",
    image: "/images/Solidx.png",
    architecture: `↳ Secure REST API & WebSockets\n↳ Role-Based Access Control + JWT Auth\n↳ Scheduled Cron Jobs & Redis Caching\n↳ Payment Gateway (Razorpay) Integration`
  },
  {
    title: "Customer App",
    category: "Mobile Application",
    tools: "React Native",
    image: "/images/project2.png",
    architecture: `↳ Cross-platform React Native UI\n↳ Real-time Socket.IO synchronization\n↳ Seamless Checkout & Payment Flow\n↳ Secure JWT Session Management`
  },
  {
    title: "Admin Panel",
    category: "Management Dashboard",
    tools: "React.js",
    image: "/images/project3.png",
    architecture: `↳ Comprehensive Operations Pipeline\n↳ Deep Analytics & Metrics Reporting\n↳ Live Server Monitoring via Sockets\n↳ RBAC-Secured Data Access`
  },
  {
    title: "Rider App",
    category: "Mobile Logistics Application",
    tools: "React Native, Geolocation, Permissions, i18n",
    image: "/images/uiux.png",
    architecture: `↳ Live GPS Geolocation Routing\n↳ Strict App Permissions Handling\n↳ Dynamic Multi-Language (i18n)\n↳ Real-time Delivery Tracking Sockets`
  },
  {
    title: "Super Admin Panel",
    category: "High-Level Dashboard",
    tools: "React.js + Vite",
    image: "/images/sapphire.png",
    architecture: `↳ Absolute Organizational Oversight\n↳ Lightning-fast Vite Ecosystem Integration\n↳ Cross-System Analytics Aggregation\n↳ Ultimate Tier RBAC Security`
  },
  {
    title: "NGOServe",
    category: "NGO Management Dashboard",
    tools: "React, TailwindCSS, TypeScript, Node.js",
    image: "/images/radix.png",
    architecture: `↳ Campaign & Volunteer Workflows\n↳ Donation & Case Operations\n↳ Event Management & Analytics\n↳ Integrated Notification Center`
  },
  {
    title: "NGOConnect",
    category: "Public Web Platform",
    tools: "React, Vite, TailwindCSS, Node.js",
    image: "/images/uiux.png",
    architecture: `↳ Transparent Campaign Discovery\n↳ "Track My Money" Donor Reports\n↳ Privacy-Safe Public Profiles\n↳ Volunteer & Event Registration`
  },
  {
    title: "Shared NGO Backend API",
    category: "Backend API Server",
    tools: "Node.js, Express.js, REST",
    image: "/images/radix.png",
    architecture: `↳ Shared APIs for multiple platforms\n↳ Local-First JSON-file persistence\n↳ Analytics & Notifications Modules\n↳ Legacy Compatibility Endpoints`
  },
  {
    title: "NGOConnect Legacy",
    category: "Compatibility Frontend",
    tools: "React, Vite, TailwindCSS, TypeScript",
    image: "/images/sapphire.png",
    architecture: `↳ Modernized Vite Development Core\n↳ Backward Compatible Flow Design\n↳ Seamless Transition Environment\n↳ Legacy Data Sync Support`
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index} data-cursor="pointer">
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.architecture && (
                          <div className="carousel-architecture" style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <span className="tools-label" style={{ color: 'var(--accentColor)', fontSize: '13px', marginBottom: '10px', display: 'block', letterSpacing: '1px' }}>SYSTEM ARCHITECTURE OVERVIEW</span>
                            <pre style={{ margin: 0, fontSize: '13px', color: '#aaa', fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
                              {project.architecture}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
