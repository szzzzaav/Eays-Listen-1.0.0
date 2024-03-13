import gsap from "gsap";
import { useEffect } from "react";

function useInfiGsap() {
  useEffect(function () {
    const photobox = {
      container: document.querySelector(".photos"),
      img_data: [],
      container_width: 0,
      container_height: 0,
      photo_width: 0,
      photo_height: 0,
      if_movable: false,
      mouse_x: 0,
      mouse_y: 0,
      init() {
        this.resize();
        window.addEventListener("resize", () => {
          this.resize();
        });
        this.container.addEventListener("mousedown", (e) => {
          this.if_movable = true;
          this.mouse_x = e.clientX;
          this.mouse_y = e.clientY;
        });
        this.container.addEventListener("mouseup", () => {
          this.if_movable = false;
        });
        this.container.addEventListener("mouseleave", () => {
          this.if_movable = false;
        });
        this.container.addEventListener("mousemove", (e) => {
          this.move(e.clientX, e.clientY);
        });
      },
      resize() {
        let imgs = [...document.querySelectorAll(".photos_line_photo")];
        if (!imgs) return;
        this.container_width = this.container?.offsetWidth;
        this.container_height = this.container?.offsetHeight;
        this.photo_width = imgs[0]?.offsetWidth;
        this.photo_height = imgs[0]?.offsetHeight;
        gsap.to(imgs, {
          transform: `translate(0,0)`,
          duration: 0,
          ease: "power4.out",
        });
        this.img_data = [];
        imgs.forEach((img) => {
          this.img_data.push({
            node: img,
            x: img?.offsetLeft,
            y: img?.offsetTop,
            mov_x: 0,
            mov_y: 0,
            ani: {},
          });
        });
      },
      move(x, y) {
        if (!this.if_movable) return;
        let distance_x = x - this.mouse_x;
        let distance_y = y - this.mouse_y;
        this.img_data.forEach((img) => {
          let duration = 0.3;
          img.mov_x += distance_x;
          img.mov_y += distance_y;
          if (img.x + img.mov_x > this.container_width) {
            img.mov_x -= this.container_width;
            duration = 0;
          }
          if (img.x + img.mov_x < -this.photo_width) {
            img.mov_x += this.container_width;
            duration = 0;
          }
          if (img.y + img.mov_y > this.container_height) {
            img.mov_y -= this.container_height;
            duration = 0;
          }
          if (img.y + img.mov_y < -this.photo_height) {
            img.mov_y += this.container_height;
            duration = 0;
          }
          if (Object.keys(img.ani).length !== 0) {
            img.ani.kill();
          }
          img.ani = gsap.to(img.node, {
            transform: `translate(${img.mov_x}px,${img.mov_y}px)`,
            duration: duration,
            ease: "power4.out",
          });
        });
        this.mouse_x = x;
        this.mouse_y = y;
      },
    };
    photobox.init();
  }, []);
}

export default useInfiGsap;
