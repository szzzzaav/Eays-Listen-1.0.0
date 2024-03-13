import styled, { css, keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  ${(props) =>
    props.$bg &&
    css`
      color: ${props.$bg} !important;
    `}
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
  left: calc(50% - 1.2rem) !important;
`;

export default SpinnerMini;
