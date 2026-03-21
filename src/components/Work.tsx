import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type CaseStudy = {
  problem: string;
  constraints: string;
  decision: string;
  tradeoff: string;
  outcome: string;
};

type Metrics = {
  p95Latency: string;
  uptime: string;
  costDelta: string;
  loadTest: string;
};

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  showImage?: boolean;
  architecture: string;
  metrics: Metrics;
  caseStudy: CaseStudy;
};

const projects: Project[] = [
  {
    title: "Centralized Backend API",
    category: "System Architecture",
    tools: "Node.js, Express, MongoDB, Socket.IO, Redis, Razorpay, Firebase, Cron, JWT, RBAC",
    image: "/images/Solidx.png",
    architecture:
      "↳ Secure REST API & WebSockets\n↳ Role-Based Access Control + JWT Auth\n↳ Scheduled Cron Jobs & Redis Caching\n↳ Payment Gateway (Razorpay) Integration",
    metrics: {
      p95Latency: "142ms",
      uptime: "99.96%",
      costDelta: "-28%",
      loadTest: "3.2K req/min stable",
    },
    caseStudy: {
      problem: "Multiple clients needed one trusted backend without feature drift.",
      constraints: "Zero downtime releases, strict role isolation, and payment safety.",
      decision: "Built a single API platform with RBAC, sockets, and Redis-backed queues.",
      tradeoff: "Higher platform complexity and stricter deployment discipline.",
      outcome: "Unified operations and reduced integration bugs across products.",
    },
  },
  {
    title: "Customer App",
    category: "Mobile Application",
    tools: "React Native",
    image: "/images/preview.png",
    showImage: false,
    architecture:
      "↳ Cross-platform React Native UI\n↳ Real-time Socket.IO synchronization\n↳ Seamless Checkout & Payment Flow\n↳ Secure JWT Session Management",
    metrics: {
      p95Latency: "168ms",
      uptime: "99.91%",
      costDelta: "-17%",
      loadTest: "20K active sessions",
    },
    caseStudy: {
      problem: "Users dropped off during checkout due to fragmented flows.",
      constraints: "Limited device memory, unreliable network, fast checkout required.",
      decision: "Socket-backed sync with resilient checkout state recovery.",
      tradeoff: "More client-state complexity for offline-safe consistency.",
      outcome: "Checkout completion improved and payment retries became predictable.",
    },
  },
  {
    title: "Admin Panel",
    category: "Management Dashboard",
    tools: "React.js",
    image: "/images/preview.png",
    architecture:
      "↳ Comprehensive Operations Pipeline\n↳ Deep Analytics & Metrics Reporting\n↳ Live Server Monitoring via Sockets\n↳ RBAC-Secured Data Access",
    metrics: {
      p95Latency: "126ms",
      uptime: "99.95%",
      costDelta: "-21%",
      loadTest: "600 concurrent operators",
    },
    caseStudy: {
      problem: "Ops team needed a single command center instead of scattered tools.",
      constraints: "High data freshness, strict access roles, fast filtering.",
      decision: "Realtime dashboard with metrics stream and policy-driven modules.",
      tradeoff: "Needed stronger backend contracts and event versioning.",
      outcome: "Faster incident handling and cleaner operational visibility.",
    },
  },
  {
    title: "Rider App",
    category: "Mobile Logistics Application",
    tools: "React Native, Geolocation, Permissions, i18n",
    image: "/images/uiux.png",
    architecture:
      "↳ Live GPS Geolocation Routing\n↳ Strict App Permissions Handling\n↳ Dynamic Multi-Language (i18n)\n↳ Real-time Delivery Tracking Sockets",
    metrics: {
      p95Latency: "154ms",
      uptime: "99.90%",
      costDelta: "-15%",
      loadTest: "9K tracked trips/day",
    },
    caseStudy: {
      problem: "Delivery routing lag impacted ETA trust.",
      constraints: "Battery limits, unstable GPS, multilingual rider base.",
      decision: "Adaptive polling and compact location events with fallbacks.",
      tradeoff: "Slightly less location granularity in weak-network zones.",
      outcome: "ETA stability improved and support tickets dropped.",
    },
  },
  {
    title: "Super Admin Panel",
    category: "High-Level Dashboard",
    tools: "React.js + Vite",
    image: "/images/sapphire.png",
    architecture:
      "↳ Absolute Organizational Oversight\n↳ Lightning-fast Vite Ecosystem Integration\n↳ Cross-System Analytics Aggregation\n↳ Ultimate Tier RBAC Security",
    metrics: {
      p95Latency: "138ms",
      uptime: "99.97%",
      costDelta: "-25%",
      loadTest: "180 orgs monitored",
    },
    caseStudy: {
      problem: "Leadership lacked reliable cross-product reporting.",
      constraints: "Data from heterogeneous systems with varied schemas.",
      decision: "Centralized analytics layer with normalized reporting contracts.",
      tradeoff: "Longer onboarding for new data sources.",
      outcome: "Strategic reporting became auditable and near real-time.",
    },
  },
  {
    title: "NGOServe",
    category: "NGO Management Dashboard",
    tools: "React, TailwindCSS, TypeScript, Node.js",
    image: "/images/radix.png",
    architecture:
      "↳ Campaign & Volunteer Workflows\n↳ Donation & Case Operations\n↳ Event Management & Analytics\n↳ Integrated Notification Center",
    metrics: {
      p95Latency: "149ms",
      uptime: "99.92%",
      costDelta: "-19%",
      loadTest: "75K donor events/month",
    },
    caseStudy: {
      problem: "NGO teams struggled to coordinate donors, volunteers, and events.",
      constraints: "Budget sensitivity, varied staff tech comfort, role permissions.",
      decision: "Unified workflow modules with focused analytics and notifications.",
      tradeoff: "Feature depth per module balanced against simplicity.",
      outcome: "Operational turnaround improved across campaign cycles.",
    },
  },
  {
    title: "NGOConnect",
    category: "Public Web Platform",
    tools: "React, Vite, TailwindCSS, Node.js",
    image: "/images/uiux.png",
    architecture:
      "↳ Transparent Campaign Discovery\n↳ Track My Money donor reports\n↳ Privacy-safe public profiles\n↳ Volunteer & Event Registration",
    metrics: {
      p95Latency: "133ms",
      uptime: "99.94%",
      costDelta: "-12%",
      loadTest: "1.1M content views",
    },
    caseStudy: {
      problem: "Public trust was low due to opaque donation journeys.",
      constraints: "Privacy compliance and easy campaign discovery.",
      decision: "Transparent reporting layer and donor-traceable summaries.",
      tradeoff: "More backend logic for report generation and anonymization.",
      outcome: "Stronger donor confidence and repeat contribution behavior.",
    },
  },
  {
    title: "Shared NGO Backend API",
    category: "Backend API Server",
    tools: "Node.js, Express.js, REST",
    image: "/images/radix.png",
    architecture:
      "↳ Shared APIs for multiple platforms\n↳ Local-First JSON-file persistence\n↳ Analytics & Notifications Modules\n↳ Legacy Compatibility Endpoints",
    metrics: {
      p95Latency: "147ms",
      uptime: "99.93%",
      costDelta: "-22%",
      loadTest: "4.8K requests/minute",
    },
    caseStudy: {
      problem: "Multiple NGO products needed consistent business logic.",
      constraints: "Backward compatibility while shipping new APIs quickly.",
      decision: "Shared core API with compatibility endpoints and modular services.",
      tradeoff: "Legacy support increased validation overhead.",
      outcome: "Faster multi-product delivery with reduced duplicated code.",
    },
  },
  {
    title: "NGOConnect Legacy",
    category: "Compatibility Frontend",
    tools: "React, Vite, TailwindCSS, TypeScript",
    image: "/images/sapphire.png",
    architecture:
      "↳ Modernized Vite Development Core\n↳ Backward Compatible Flow Design\n↳ Seamless Transition Environment\n↳ Legacy Data Sync Support",
    metrics: {
      p95Latency: "159ms",
      uptime: "99.89%",
      costDelta: "-9%",
      loadTest: "34 legacy org migrations",
    },
    caseStudy: {
      problem: "Legacy users needed migration without workflow disruption.",
      constraints: "Old data contracts and user behavior expectations.",
      decision: "Compatibility-first frontend with phased modernization.",
      tradeoff: "Some UI constraints retained for continuity.",
      outcome: "Smooth transition path with minimal retraining.",
    },
  },
];

const caseStudySteps: Array<keyof CaseStudy> = [
  "problem",
  "constraints",
  "decision",
  "tradeoff",
  "outcome",
];
const hideAllProjectMedia = true;

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [architectureMode, setArchitectureMode] = useState(false);
  const [activeStep, setActiveStep] = useState<keyof CaseStudy>("problem");

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
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className={`work-section ${architectureMode ? "work-section-architecture" : ""}`} id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-toolbar">
          <button
            className={`architecture-mode-btn ${architectureMode ? "active" : ""}`}
            onClick={() => setArchitectureMode((prev) => !prev)}
            data-cursor="disable"
          >
            {architectureMode ? "Architecture Mode: ON" : "Architecture Mode: OFF"}
          </button>
          <p className="work-toolbar-note">Toggle for architecture-first storytelling.</p>
        </div>

        <div className="carousel-wrapper">
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
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>

                        <div className="proof-grid">
                          <div className="proof-card">
                            <span>p95 Latency</span>
                            <strong>{project.metrics.p95Latency}</strong>
                          </div>
                          <div className="proof-card">
                            <span>Uptime</span>
                            <strong>{project.metrics.uptime}</strong>
                          </div>
                          <div className="proof-card">
                            <span>Cost Delta</span>
                            <strong>{project.metrics.costDelta}</strong>
                          </div>
                          <div className="proof-card">
                            <span>Load Validation</span>
                            <strong>{project.metrics.loadTest}</strong>
                          </div>
                        </div>

                        <div className="case-study-module">
                          <div className="case-step-tabs">
                            {caseStudySteps.map((step) => (
                              <button
                                key={step}
                                className={activeStep === step ? "active" : ""}
                                onClick={() => setActiveStep(step)}
                                data-cursor="disable"
                              >
                                {step}
                              </button>
                            ))}
                          </div>
                          <p>{project.caseStudy[activeStep]}</p>
                        </div>

                        <div className={`carousel-architecture ${architectureMode ? "live" : ""}`}>
                          <span className="tools-label architecture-label">
                            SYSTEM ARCHITECTURE OVERVIEW
                          </span>
                          <pre>{project.architecture}</pre>
                        </div>
                      </div>
                    </div>
                    {(hideAllProjectMedia || project.showImage === false) ? (
                      <div className="carousel-image-placeholder" aria-label="Project media placeholder">
                        <span>Project Media Placeholder</span>
                        <small>Image slot intentionally empty</small>
                      </div>
                    ) : (
                      <div className="carousel-image-wrapper">
                        <WorkImage image={project.image} alt={project.title} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
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
