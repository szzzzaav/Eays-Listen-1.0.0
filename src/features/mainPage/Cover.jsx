import styled, { css } from "styled-components";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import { StyledImg } from "../../ui/MainTopContent";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: calc(50% - 100px);
  top: calc(50% - 100px);
  @media (min-width: 630px) {
    right: calc(50% - 150px);
    top: calc(50% - 150px);
  }
  ${(props) =>
    props.$right &&
    css`
      @media (min-width: 800px) {
        right: ${props.$right};
      }
    `}
  transition:all 0.6s ease-in-out;
`;

const StyledDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: calc(50% - 1500px);
  left: calc(50% - 1500px);
  width: 3000px;
  height: 3000px;
  border-radius: 50%;
  background-color: #fff;
  ${(props) =>
    props.$out &&
    css`
      transition: all 0.6s ease-in-out;
      transform: scale(0);
    `}
`;

function Cover() {
  const { isLoading } = useTransitionContext();
  return (
    <FlexContainer $right={isLoading ? 0 : "20%"}>
      <StyledImg src="/logo.png" />
      <StyledDiv $out={isLoading ? 0 : 1}></StyledDiv>
    </FlexContainer>
  );
}

export default Cover;
