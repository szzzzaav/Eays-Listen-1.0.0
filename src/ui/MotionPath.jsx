import gsap from "gsap";
import { PiMusicNotesFill } from "react-icons/pi";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  position: absolute;
  overflow: visible;
  width: 100% !important;
  height: 100vh !important;
  /* Fix Safari rendering bug */
  transform: translateZ(0);
  stroke: transparent;
  & circle {
    stroke: transparent;
    fill: none;
  }
`;

const StyledPath = styled.path`
  stroke-width: 2;
  fill: none;
`;

const StyledG = styled.g`
  & svg {
    font-size: 35px;
  }
`;

function MotionPath() {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#rect1", {
      ease: "expoScale",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scrollTrigger: {
        trigger: "#svg",
        start: "20px 100px",
        end: "+=600",
        scrub: true,
      },
    });
    gsap.to("#rect2", {
      ease: "expoScale",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scrollTrigger: {
        trigger: "#svg",
        start: "20px 100px",
        end: "+=400",
        scrub: true,
      },
    });
  }, []);
  return (
    <StyledSvg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
      <circle cx="100" cy="100" r="3" />
      <circle cx="300" cy="20" r="3" />
      <StyledPath
        id="path"
        d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"
      />
      <StyledG id="rect1">
        <PiMusicNotesFill style={{ color: "var(--color--blue-80)" }} />
      </StyledG>
      <StyledG id="rect2">
        <PiMusicNotesFill style={{ color: "var(--color-blue-20)" }} />
      </StyledG>
    </StyledSvg>
  );
}

export default MotionPath;
