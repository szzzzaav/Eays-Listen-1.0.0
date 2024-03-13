import styled, { css } from "styled-components";

const StyledButton = styled.button`
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.$size === "sm" &&
    css`
      font-size: 20px;
      font-weight: 600;
    `}
  ${(props) =>
    props.$size === "md" &&
    css`
      font-size: 40px;
      font-weight: 700;
    `}
  ${(props) =>
    props.$size === "la" &&
    css`
      font-size: 50px;
      font-weight: 800;
    `}
    ${(props) =>
    props.$bc &&
    css`
      background-color: ${props.$bc};
    `}
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & svg {
    position: absolute;
    margin: 0, auto;
  }
`;

StyledButton.defaultProps = {
  $size: "sm",
};

function Button({ onClick = () => {}, children, size }) {
  return (
    <StyledButton onClick={onClick} $size={size}>
      {children}
    </StyledButton>
  );
}

export default Button;
