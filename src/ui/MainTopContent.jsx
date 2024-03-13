import styled from "styled-components";

const StyledMainTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  top: 0;
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    to right,
    var(--color--blue-100),
    var(--color--blue-80),
    var(--color--blue-60)
  );
  & span {
    display: block;
    position: relative;
    font-family: "Roboto", sans-serif;
    font-size: 70px;
    font-weight: 900;
    color: #fff;
    z-index: 2;
    line-height: 60px;
    /* mix-blend-mode: difference; */
  }
  & button {
    background-color: transparent;
    border-radius: 70px;
    border: 2px solid #fff;
    padding: 10px 15px;
  }
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: var(--border-radius-lg);
  border: 2px solid white;
  @media (min-width: 800px) {
    width: 300px;
    height: 300px;
  }
`;

export { StyledMainTop, StyledImg };
