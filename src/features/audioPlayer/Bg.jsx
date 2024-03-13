import styled, { css, keyframes } from "styled-components";
import { useAudioContext } from "../../context/useAudioPlayer";

const bgRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledBg = styled.div`
  position: fixed;
  z-index: -99;
  width: 3000px;
  height: 3000px;
  background: linear-gradient(45deg, #183e6c, #313d43);
  animation: ${bgRotate} 5s ease-in-out infinite;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.$blue &&
    css`
      background: linear-gradient(45deg, #183e6c, #313d43);
    `}
  ${(props) =>
    props.$pink &&
    css`
      background: linear-gradient(45deg, #f875aa, #8fc3e3);
    `}
  ${(props) =>
    props.$orange &&
    css`
      background: linear-gradient(45deg, #bc3e08, #891a09);
    `}
  ${(props) =>
    props.$purple &&
    css`
      background: linear-gradient(
        45deg,
        var(--color-blue-10),
        var(--color-purple)
      );
    `}
`;

const Shadow = styled.div`
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1.5px);
`;

function Bg() {
  const { color } = useAudioContext();
  return (
    <>
      <StyledBg {...color} />
      <Shadow />
    </>
  );
}

export default Bg;
