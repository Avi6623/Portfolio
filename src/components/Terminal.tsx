import React, { useState, useRef, useEffect } from "react";
import "./styles/Terminal.css";

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "Welcome to Avneesh OS v1.0.0" },
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
      
      switch (cmd) {
        case "help":
          newHistory.push({ type: "out", text: "Commands: whoami, projects, techstack, ping, clear, quit, exit" });
          break;
        case "whoami":
          newHistory.push({ type: "out", text: "Avneesh Shukla - Full Stack Developer (Backend-Leaning). Specialized in secure APIs & Scalable Architecture." });
          break;
        case "projects":
          newHistory.push({ type: "out", text: "[1] Centralized Backend API (Node)\n[2] NGOServe Dashboard\n[3] NGOConnect Platform \n[4] Shared NGO Backend API\n[5] Customer React Native App\n[6] Admin Web Panel\n[7] Rider Logistics App\n[8] Super Admin HQ\n[9] NGOConnect Legacy" });
          break;
        case "ping":
          newHistory.push({ type: "out", text: "PONG\nResponse latency: 12ms\nServer status: 100% Operational (Redis Cache: HIT)" });
          break;
        case "techstack":
          newHistory.push({ type: "out", text: "Node.js | Express | MongoDB | Socket.IO | Redis | Razorpay | JWT | RBAC | React | React Native | Vite | TailwindCSS" });
          break;
        case "clear":
          newHistory = [];
          break;
        case "quit":
        case "exit":
          setIsOpen(false);
          return;
        case "":
          break;
        default:
          if (cmd.startsWith("echo ")) {
            newHistory.push({ type: "out", text: cmd.substring(5) });
          } else {
            newHistory.push({ type: "err", text: `Command not found: ${cmd}` });
          }
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
