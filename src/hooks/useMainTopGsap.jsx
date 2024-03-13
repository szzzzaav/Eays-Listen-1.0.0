import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

function useMainTopGsap() {
  useEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hidden-text", {
      duration: 1,
      ease: "none",
      yPercent: -100,
      opacity: 1,
    });
    gsap.to(".main-top", {
      duration: 3,
      ease: "none",
      opacity: 0,
      scrollTrigger: {
        trigger: ".main-top",
        start: "center 100px",
        end: "+=2200",
        scrub: true,
      },
    });
    gsap.to(".hidden-text", {
      duration: 3,
      ease: "none",
      color: "#222",
      scrollTrigger: {
        trigger: ".main-top",
        start: "center 100px",
        end: "+=1200",
        scrub: true,
      },
    });
  }, []);
}

export default useMainTopGsap;
