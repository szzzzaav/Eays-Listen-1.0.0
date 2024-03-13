import styled, { css } from "styled-components";
const FormLayout = styled.form`
  user-select: none;
  display: flex;
  width: 80%;
  height: 80%;
  ${(props) =>
    props.$wi &&
    css`
      width: ${props.$wi};
    `}
  ${(props) =>
    props.$hi &&
    css`
      width: ${props.$hi};
    `}
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  border-radius: var(--border-radius-md);
  background: rgba(255, 255, 255, 0.5);
  z-index: 10;
  backdrop-filter: blur(5px);
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
  & div {
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
  & button {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: var(--color--blue-100);
    cursor: pointer;
    border-radius: 42px;
    border: none;
    color: #fff;
    font-weight: 700;
  }
`;

const StyledImgUpLoad = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid #8a8a8a;
  overflow: hidden;
  z-index: 10;
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
  & img {
    position: absolute;
    top: 0;
    z-index: 2;
    width: 300px;
    height: 100%;
    cursor: pointer;
  }
  & svg {
    position: absolute;
    width: 40px;
    height: 40px;
    color: #fff;
    cursor: pointer;
  }
  & input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const FormRow = styled.div`
  position: relative;
  z-index: 1;
  width: 300px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ${(props) =>
    props.$frd &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
  gap: 10px;
  ${(props) =>
    props.$hiI &&
    css`
      & input {
        display: none;
      }
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
`;

export { FormLayout, FormRow, StyledImgUpLoad };
