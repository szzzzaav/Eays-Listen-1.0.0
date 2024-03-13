import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function useAlbumGsap() {
  useEffect(function () {
    const scrollbox = {
      container: document.querySelector(".scrollbox_container"),
      cards: [...document.querySelectorAll(".scrollbox_card")],
      trigger_distance: 0,
      border_distance: 0,
      addHover() {
        if (!this.container) return;
        this.cards.forEach((e) => {
          e.addEventListener("mouseenter", () => {
            const IMGBG = e.querySelector(".imgBg");
            const RECORD = e.querySelector(".record");
            const TEXT = e.querySelector(".text");
            if (IMGBG) {
              IMGBG.style.transform = "scale(1.2,1.2)";
            }
            if (RECORD) {
              RECORD.style.transform = "rotate(75deg)";
              RECORD.style.left = "calc(50%)";
            }
            if (TEXT) {
              TEXT.style.transform = "translateY(-10px)";
              TEXT.style.opacity = "1";
            }
          });
          e.addEventListener("mouseleave", () => {
            const IMGBG = e.querySelector(".imgBg");
            const RECORD = e.querySelector(".record");
            const TEXT = e.querySelector(".text");
            if (IMGBG) {
              e.querySelector(".imgBg").style.transform = "";
            }
            if (RECORD) {
              e.querySelector(".record").style.transform = "";
              e.querySelector(".record").style.left = "calc(0%)";
            }
            if (TEXT) {
              e.querySelector(".text").style.transform = "";
              e.querySelector(".text").style.opacity = "0";
            }
          });
        });
      },
      resize() {
        let _scrollbox = document.querySelector(".scrollbox");
        if (!_scrollbox) return;
        _scrollbox.style.height = `${this.container?.offsetWidth}px`;
        this.trigger_distance = this.container.offsetTop;
        this.border_distance =
          this.trigger_distance +
          this.container.offsetWidth -
          window.innerHeight;
        this.distance_y = -this.trigger_distance;
        this.distance_x =
          (this.distance_y / (this.border_distance - this.trigger_distance)) *
          this.container.offsetWidth;
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".scrollbox_container", {
          position: "fixed",
          ease: "none",
          top: 0,
          x: -(
            scrollbox.border_distance -
            scrollbox.trigger_distance -
            window.innerHeight
          ),
          scrollTrigger: {
            trigger: ".scrollbox",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        gsap.to(".scrollbox_container", {
          duration: 0.15,
          ease: "power1.in",
          scale: 0,
          scrollTrigger: {
            trigger: ".scrollbox",
            start: "bottom bottom",
            end: "+=500",
            scrub: true,
          },
        });
        gsap.to(".underline", {
          duration: 0.5,
          ease: "bounce.inOut",
          backgroundSize: "100% 3px",
          scrollTrigger: {
            trigger: ".underline",
            toggleActions: "restart none reverse none",
          },
        });
      },
    };
    scrollbox.resize();
    scrollbox.addHover();
    window.addEventListener("load", () => {
      scrollbox.resize();
    });
    window.addEventListener("resize", () => {
      scrollbox.resize();
    });
  }, []);
}

export default useAlbumGsap;
