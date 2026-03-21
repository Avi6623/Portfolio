import { useMemo, useState } from "react";
import "./styles/PortfolioLab.css";

type Simulation = {
  p95: number;
  throughput: number;
  monthlyCost: number;
};

const qaBank: Array<{ keys: string[]; answer: string }> = [
  {
    keys: ["backend", "api", "node"],
    answer:
      "Primary strength backend architecture hai: secure Node.js APIs, RBAC, real-time events, aur performance-first data paths.",
  },
  {
    keys: ["mobile", "react native", "app"],
    answer:
      "Mobile side pe focus reliability hai: resilient sessions, live sync, and low-latency data interactions for field-heavy workflows.",
  },
  {
    keys: ["hire", "why", "choose", "fit"],
    answer:
      "Strong fit because product + platform dono layers pe delivery karta hoon, tradeoffs explicitly document karta hoon, aur measurable outcomes drive karta hoon.",
  },
  {
    keys: ["contact", "reach", "email"],
    answer:
      "Contact ke liye page ke bottom Contact section use karein. Fastest response email/GitHub message channel se milta hai.",
  },
];

const refactors = [
  {
    title: "Auth Middleware Refactor",
    before: "Role checks each route pe scattered the. Bug fixes repetitive the.",
    after: "Centralized policy middleware + reusable permission matrix.",
    impact: "Regression rate lower, onboarding faster, auth flow auditable.",
  },
  {
    title: "Realtime Event Compression",
    before: "Socket payloads noisy the, rider app pe unnecessary updates ja rahi thi.",
    after: "Delta events + adaptive frequency control.",
    impact: "Bandwidth reduce hua, ETA stream smoother hui.",
  },
  {
    title: "Analytics Query Split",
    before: "Dashboard load pe heavy aggregate query lock create kar rahi thi.",
    after: "Read-model split + cached summary pipeline.",
    impact: "p95 improved aur admin dashboards stable ho gaye.",
  },
];

const philosophies = [
  {
    title: "Ship With Evidence",
    body: "Har major decision ke saath metric attach karo: latency, error rate, ya delivery lead time.",
  },
  {
    title: "Prefer Boring Reliability",
    body: "Fancy architecture tabhi jab operational burden justify ho. Defaults predictable rakho.",
  },
  {
    title: "Design For Failure",
    body: "Retries, idempotency, and fallback paths core design ka part hone chahiye.",
  },
  {
    title: "Own The Tradeoff",
    body: "No perfect decision. Tradeoff explicitly document karo aur team ko context do.",
  },
  {
    title: "Respect Human Operators",
    body: "Monitoring aur tooling ko users jaisa hi product quality do.",
  },
];

const PortfolioLab = () => {
  const [traffic, setTraffic] = useState(60);
  const [cacheHit, setCacheHit] = useState(70);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "Question poochho: backend focus, hiring fit, mobile systems, ya architecture decisions."
  );
  const [refactorIndex, setRefactorIndex] = useState(0);

  const simulation: Simulation = useMemo(() => {
    const p95 = Math.max(70, 250 - cacheHit * 1.4 + traffic * 0.9);
    const throughput = Math.round(900 + traffic * 42 + cacheHit * 16);
    const monthlyCost = Math.round(1300 + traffic * 19 - cacheHit * 9);
    return { p95, throughput, monthlyCost };
  }, [traffic, cacheHit]);

  const ask = () => {
    const normalized = question.trim().toLowerCase();
    if (!normalized) return;
    const matched = qaBank.find((item) => item.keys.some((key) => normalized.includes(key)));
    setAnswer(
      matched
        ? matched.answer
        : "Is query ka best answer: robust backend systems, clear ownership, and measurable impact are the strongest signals in this portfolio."
    );
  };

  const refactor = refactors[refactorIndex];

  return (
    <section className="portfolio-lab section-container" id="proof-lab">
      <div className="signature-grid" aria-hidden="true" />
      <div className="fast-path">
        <div>
          <h2>Recruiter Fast Path</h2>
          <p>30-second summary: backend-heavy engineer, production-focused execution, and measurable outcomes.</p>
        </div>
        <div className="fast-stats">
          <span>Availability: Open to high-impact roles</span>
          <span>Top wins: APIs, Realtime, Platform Ops</span>
          <span>Primary stack: Node.js, React, MongoDB, Redis</span>
        </div>
        <div className="fast-actions">
          <a href="#contact">Contact</a>
          <a href="https://github.com/Avi6623" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="lab-grid">
        <article className="panel">
          <h3>Live Playground</h3>
          <p>Traffic and cache assumptions adjust karo, simulated outcomes live dekho.</p>
          <label>
            Traffic Intensity ({traffic}%)
            <input
              type="range"
              min={10}
              max={100}
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
            />
          </label>
          <label>
            Cache Hit Ratio ({cacheHit}%)
            <input
              type="range"
              min={10}
              max={95}
              value={cacheHit}
              onChange={(e) => setCacheHit(Number(e.target.value))}
            />
          </label>
          <div className="sim-metrics">
            <div>
              <span>p95 latency</span>
              <strong>{simulation.p95}ms</strong>
            </div>
            <div>
              <span>throughput</span>
              <strong>{simulation.throughput}/min</strong>
            </div>
            <div>
              <span>infra estimate</span>
              <strong>${simulation.monthlyCost}/mo</strong>
            </div>
          </div>
        </article>

        <article className="panel">
          <h3>AI Resume Q&A</h3>
          <p>Portfolio se direct contextual answers.</p>
          <div className="qa-box">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask: why hire, backend depth, mobile systems"
            />
            <button onClick={ask}>Ask</button>
          </div>
          <div className="qa-answer">{answer}</div>
        </article>
      </div>

      <div className="philosophy">
        <h3>Engineering Principles</h3>
        <div className="philosophy-grid">
          {philosophies.map((item) => (
            <div key={item.title} className="principle-card">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="refactor-story">
        <h3>Before / After Refactor Stories</h3>
        <div className="refactor-tabs">
          {refactors.map((item, index) => (
            <button
              key={item.title}
              className={index === refactorIndex ? "active" : ""}
              onClick={() => setRefactorIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="refactor-panels">
          <article>
            <span>Before</span>
            <p>{refactor.before}</p>
          </article>
          <article>
            <span>After</span>
            <p>{refactor.after}</p>
          </article>
          <article>
            <span>Impact</span>
            <p>{refactor.impact}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PortfolioLab;
