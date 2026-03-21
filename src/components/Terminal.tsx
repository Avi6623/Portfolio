import React, { useState, useRef, useEffect } from "react";
import "./styles/Terminal.css";

const projectArchitectures: Record<string, string> = {
  "1": "Centralized Backend API => RBAC + JWT auth, Redis caching, realtime sockets, payment service boundaries.",
  "2": "Customer App => resilient session flow, socket sync, guarded checkout state machine.",
  "3": "Admin Panel => metrics stream, ops dashboards, policy-guarded access.",
  "4": "Rider App => compact location event stream + GPS fallback strategy.",
  "5": "Super Admin => multi-system analytics normalization layer.",
};

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "Welcome to Avneesh OS v2.0.0" },
    { type: "sys", text: "Type 'help' to see a list of available commands." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isOpen]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      setInput("");

      let newHistory = [...history, { type: "cmd", text: `avneesh@server:~$ ${cmd}` }];

      if (cmd === "help") {
        newHistory.push({
          type: "out",
          text:
            "Commands: whoami, projects, techstack, ping, architecture <id>, impact, decision-log, download-cv, clear, quit, exit",
        });
      } else if (cmd === "whoami") {
        newHistory.push({
          type: "out",
          text: "Avneesh Shukla - Full Stack Developer (Backend-Leaning). Specialized in secure APIs and scalable architecture.",
        });
      } else if (cmd === "projects") {
        newHistory.push({
          type: "out",
          text:
            "[1] Centralized Backend API\n[2] Customer App\n[3] Admin Panel\n[4] Rider App\n[5] Super Admin\n[6] NGOServe\n[7] NGOConnect\n[8] Shared NGO API\n[9] NGOConnect Legacy",
        });
      } else if (cmd === "ping") {
        newHistory.push({
          type: "out",
          text: "PONG\nResponse latency: 12ms\nServer status: 100% Operational (Redis Cache: HIT)",
        });
      } else if (cmd === "techstack") {
        newHistory.push({
          type: "out",
          text: "Node.js | Express | MongoDB | Socket.IO | Redis | Razorpay | JWT | RBAC | React | React Native | Vite | TailwindCSS",
        });
      } else if (cmd.startsWith("architecture")) {
        const id = cmd.split(" ")[1] || "1";
        const output = projectArchitectures[id];
        if (output) {
          newHistory.push({ type: "out", text: output });
        } else {
          newHistory.push({ type: "err", text: "Unknown project id. Use 1-5 for architecture quick view." });
        }
      } else if (cmd === "impact") {
        newHistory.push({
          type: "out",
          text:
            "Impact Snapshot => p95 latency optimized, uptime sustained near 99.9+, and infra cost trimmed through cache + query strategy.",
        });
      } else if (cmd === "decision-log") {
        newHistory.push({
          type: "out",
          text:
            "Decision Log => [D1] Centralized API core\n[D2] Redis-first caching policy\n[D3] Compatibility layer for legacy migrations",
        });
      } else if (cmd === "download-cv") {
        newHistory.push({
          type: "out",
          text: "CV endpoint configured. Use contact section for latest shareable resume link.",
        });
      } else if (cmd === "clear") {
        newHistory = [];
      } else if (cmd === "quit" || cmd === "exit") {
        setIsOpen(false);
        return;
      } else if (cmd === "") {
        return;
      } else if (cmd.startsWith("echo ")) {
        newHistory.push({ type: "out", text: cmd.substring(5) });
      } else {
        newHistory.push({ type: "err", text: `Command not found: ${cmd}` });
      }

      setHistory(newHistory);
    }
  };

  if (!isOpen) {
    return (
      <div className="terminal-trigger" onClick={() => setIsOpen(true)}>
        <span>&gt;_ Open Terminal</span>
      </div>
    );
  }

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="t-button close" onClick={() => setIsOpen(false)}></div>
          <div className="t-button min"></div>
          <div className="t-button max"></div>
        </div>
        <div className="terminal-title">avneesh@server:~</div>
      </div>
      <div className="terminal-body">
        {history.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="prompt">avneesh@server:~$</span>
          <input
            type="text"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            spellCheck="false"
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Terminal;
