import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  const categories = [
    {
      title: "BACKEND",
      subtitle: "REST APIs & Realtime Systems",
      desc: "Specialized in designing secure, highly-scalable backend architectures tailored for high-performance operations.",
      tags: ["Node.js", "Express", "REST API", "Socket.IO", "Cron Jobs", "RBAC", "JWT", "Razorpay"]
    },
    {
      title: "FRONTEND",
      subtitle: "Web Applications & Dashboards",
      desc: "Building highly interactive, responsive single page applications and administrative dashboards.",
      tags: ["React.js", "Vite", "TailwindCSS", "TypeScript", "Responsive UI/UX"]
    },
    {
      title: "MOBILE",
      subtitle: "Cross-Platform App Development",
      desc: "Delivering native-like mobile experiences with complex hardware and sensor integrations.",
      tags: ["React Native", "Geolocation API", "Push Notifications", "i18n", "App Permissions"]
    },
    {
      title: "TOOLS & DB",
      subtitle: "Infrastructure & Data Handling",
      desc: "Utilizing robust NoSQL databases, caching layers, and modern developer tooling pipelines.",
      tags: ["MongoDB", "Redis", "Postman", "Git/GitHub", "Docker", "Firebase"]
    }
  ];

  return (
    <div className="whatIDO" style={{ paddingTop: '100px', marginTop: '-100px' }}>
      <div className="what-box">
        <h2 className="title">
          S<span className="hat-h2">KILL</span>
          <div>
            S<span className="do-h2">ET</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in" style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {categories.map((cat, index) => (
            <div
              key={index}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
              style={{ minWidth: '45%' }}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{cat.title}</h3>
                <h4>{cat.subtitle}</h4>
                <p>{cat.desc}</p>
                <h5>{cat.title} Stack</h5>
                <div className="what-content-flex">
                  {cat.tags.map((tag, tIndex) => (
                    <div className="what-tags" key={tIndex}>{tag}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
