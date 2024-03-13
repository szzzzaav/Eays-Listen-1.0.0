import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function useHeaderGsap() {
  useEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    const init = () => {
      gsap.to(".header_move", {
        duration: 2,
        ease: "power1.in",
        x: 1300,
        opacity: 0,
        scrollTrigger: {
          start: "120px 80px",
          end: "+=300",
          scrub: true,
        },
      });
      gsap.to(".header_icon_move", {
        duration: 2,
        ease: "power1.in",
        x: 800,
        opacity: 0,
        scrollTrigger: {
          start: "120px 80px",
          end: "+=300",
          scrub: true,
        },
      });
      gsap.to(".avatar", {
        duration: 2,
        ease: "power1.in",
        borderColor: "#222",
        scrollTrigger: {
          start: "120px 100px",
          end: "+=300",
          scrub: true,
        },
      });
    };
    init();
    window.addEventListener("load", () => {
      init();
    });
  }, []);
}

export default useHeaderGsap;
