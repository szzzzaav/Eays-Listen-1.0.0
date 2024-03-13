import styled, { css } from "styled-components";

const StyledCard = styled.div`
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  flex-shrink: 0;
  gap: 30px;
  @media (min-width: 800px) {
    width: auto;
    min-width: 600px;
  }
  ${(props) =>
    props.$bs &&
    css`
      box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.111),
        0px 0px 5.3px rgba(0, 0, 0, 0.127), 0px 0px 10px rgba(0, 0, 0, 0.13),
        0px 0px 17.9px rgba(0, 0, 0, 0.128), 0px 0px 33.4px rgba(0, 0, 0, 0.126),
        0px 0px 80px rgba(0, 0, 0, 0.15);
    `}
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height};
    `}
  ${(props) =>
    props.$bc &&
    css`
      background-color: ${props.$bc};
    `}
      ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}
      ${(props) =>
    props.$index &&
    css`
      z-index: ${props.$index};
    `}
      & span {
    font-family: "Noto Sans", sans-serif;
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 500;
  }
  & svg {
    color: #222;
    width: 45px;
    height: 45px;
  }
`;

export default StyledCard;
