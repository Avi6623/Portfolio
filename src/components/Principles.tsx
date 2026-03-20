import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Principles.css";

gsap.registerPlugin(ScrollTrigger);

const Principles = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".principle-card");
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".principles-container",
          start: "top 80%",
        },
      }
    );
  }, []);

  const principles = [
    {
      title: "Scalability First",
      desc: "Architecting systems designed to handle millions of requests seamlessly from day one.",
      icon: "🚀"
    },
    {
      title: "Real-Time Systems",
      desc: "Optimized socket connections and precise data synchronization for lag-free experiences.",
      icon: "⚡"
    },
    {
      title: "Clean Architecture",
      desc: "Writing modular, testable, and robust codebases that scale along with the business.",
      icon: "🧩"
    },
    {
      title: "Product UX",
      desc: "Backend power means nothing without a frictionless, premium user interface.",
      icon: "✨"
    }
  ];

  return (
    <div className="principles-section" id="principles">
      <div className="principles-container">
        <h2 className="principles-title">
          My <span>Principles</span>
        </h2>
        <div className="principles-grid">
          {principles.map((p, index) => (
            <div className="principle-card" key={index}>
              <div className="principle-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;
