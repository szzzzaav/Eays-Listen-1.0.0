import styled, { css } from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  flex-shrink: 0;
  ${(props) =>
    props.$oh &&
    css`
      overflow: hidden;
    `}
  ${(props) =>
    props.$pd &&
    css`
      padding-right: ${props.$pd};
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    var(--color-blue-10),
    var(--color-purple)
  );
  ${(props) =>
    props.$sk &&
    css`
      flex-shrink: 0;
    `}
  ${(props) =>
    props.$hi &&
    css`
      height: ${props.$hi};
    `}
  ${(props) =>
    props.$pure &&
    css`
      background: ${props.$pure};
    `}
  ${(props) =>
    props.$pd &&
    css`
      padding: ${props.$pd};
    `}
  ${(props) =>
    props.$mh &&
    css`
      min-height: ${props.$mh};
    `}
  ${(props) =>
    props.$fd &&
    css`
      flex-direction: column;
    `}
    ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap};
    `}
`;

const FormLayout = styled.div`
  user-select: none;
  display: flex;

  width: 80%;
  height: 80%;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  border-radius: var(--border-radius-md);
  background: rgba(255, 255, 255, 0.5);
  z-index: 10;
  &:before {
    content: "";
    display: block;
    width: 450px;
    height: 600px;
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    inset: 0;
    transform: rotate(-5deg);
    z-index: 1;
  }
  & span {
    font-family: "Calibri", "Montserrat", sans-serif;
    font-size: 25px;
    letter-spacing: 5px;
    word-spacing: 0px;
    color: var(--color-font-black);
    font-weight: 600;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }

  @media (min-width: 500px) and (min-height: 700px) {
    width: 450px;
    height: 650px;
  }
`;

const FormImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

const FormRow = styled.div`
  position: relative;
  z-index: 1;
  width: 80%;
  height: 42px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.$flex === "flex-start" &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$flex === "flex-between" &&
    css`
      justify-content: space-between;
    `}

  & input {
    position: relative;
    outline: none;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 42px;
    border: none;
    text-indent: 2em;
    font-size: 17px;
    line-height: 17px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s linear;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  & svg {
    position: absolute;
    z-index: 6;
    left: 10px;
  }

  & button {
    width: 100%;
    height: 100%;
    background-color: var(--color--blue-100);
    cursor: pointer;
    border-radius: 42px;
    border: none;
  }
  & div {
    position: absolute;
    bottom: -24.5px;
  }
`;

FormRow.defaultProps = {
  $flex: 0,
};

StyledLayout.defaultProps = {
  $flex: "flex-start",
};

export { StyledLayout, FormLayout, FormImg, FormRow };
