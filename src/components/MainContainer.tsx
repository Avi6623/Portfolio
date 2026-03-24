import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Principles from "./Principles";
import Terminal from "./Terminal";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import PortfolioLab from "./PortfolioLab";
import setSplitText from "./utils/splitText";
import BackgroundEffect from "./BackgroundEffect";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    let resizeRaf = 0;
    const resizeHandler = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        setSplitText();
        setIsDesktopView(window.innerWidth > 1024);
      });
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <BackgroundEffect />
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <PortfolioLab />
            <About />
            <Principles />
            <WhatIDo />
            <Career />
            <Work />
            <Suspense fallback={<div>Loading....</div>}>
              <TechStack />
            </Suspense>
            <Contact />
          </div>
        </div>
      </div>
      <Terminal />
    </div>
  );
};

export default MainContainer;
