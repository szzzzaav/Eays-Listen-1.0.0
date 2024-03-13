import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function useFooterGsap() {
  useEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".footer_scroll_text", {
      duration: 0.5,
      opacity: 1,
      ease: "power1.in",
      yPercent: 100,
      scrollTrigger: {
        trigger: ".footer_container",
        start: "top 80px",
      },
    });
    gsap.to(".footer_scroll", {
      duration: 0.5,
      opacity: 1,
      ease: "power1.in",
      yPercent: 100,
      scrollTrigger: {
        trigger: ".footer_container",
        start: "top 80px",
      },
    });
  }, []);
}

export default useFooterGsap;
