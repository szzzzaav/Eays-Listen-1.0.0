import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color--blue-80);
  width: 150px;
  height: 40px;
  cursor: pointer;
  ${(props) =>
    props.$w &&
    css`
      width: ${props.$w};
    `}
  outline: none;
  box-shadow: none;
  border: none;
  transition: all 0.5s linear;
  ${(props) =>
    props.$bg &&
    css`
      background-color: ${props.$bg};
    `}
  &:hover {
    background-color: var(--color-purple);
    ${(props) =>
      props.$hvc &&
      css`
        background-color: ${props.$hvc};
      `}
  }
  & svg {
    color: #fff;
    width: 18px !important;
    height: 18px !important;
    font-size: 18px;
  }
  & span {
    color: #fff;
    ${(props) =>
      props.$spancl &&
      css`
        color: ${props.$spancl};
      `}
  }
`;

export default StyledButton;
