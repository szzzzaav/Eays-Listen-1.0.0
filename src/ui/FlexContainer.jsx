import styled, { css } from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$ai &&
    css`
      align-items: ${props.$ai};
    `}
  ${(props) =>
    props.$jc &&
    css`
      justify-content: ${props.$jc};
    `}
  ${(props) =>
    props.$sk &&
    css`
      flex-shrink: 0;
    `}
  ${(props) =>
    props.$fd &&
    css`
      flex-direction: ${props.$fd};
    `}
  gap:10px;
  ${(props) =>
    props.$gap &&
    css`
      @media (min-width: 800px) {
        gap: ${props.$gap};
      }
    `}
  ${(props) =>
    props.$p &&
    css`
      position: ${props.$p};
    `}
    ${(props) =>
    props.$right &&
    css`
      right: ${props.$right};
    `}
    ${(props) =>
    props.$hi &&
    css`
      height: ${props.$hi};
    `}
    ${(props) =>
    props.$wd &&
    css`
      width: ${props.$wd};
    `}
`;

FlexContainer.defaultProps = {
  $fd: 0,
  $gap: null,
  $p: null,
  $right: null,
};

export default FlexContainer;
