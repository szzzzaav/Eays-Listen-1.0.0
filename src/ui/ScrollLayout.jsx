import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledViewBox = styled.div`
  display: flex;
  position: fixed;
  align-items: flex-start;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const StyledScrollBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;
`;

function ScrollLayout({ children }) {
  const viewbox = useRef();
  const scrollbox = useRef();

  useEffect(() => {
    const scroll = {
      resize() {
        const height = scrollbox.current.offsetHeight;
        document.body.style.height = `${height}px`;
      },
    };
    window.addEventListener("load", scroll.resize());
    window.addEventListener("resize", scroll.resize());
    window.addEventListener("scroll", () => {
      scrollbox.current.style.transform = `translateY(${-window.scrollY}px)`;
    });
  }, []);

  return (
    <StyledViewBox ref={viewbox}>
      <StyledScrollBox ref={scrollbox}>{children}</StyledScrollBox>;
    </StyledViewBox>
  );
}

export default ScrollLayout;
