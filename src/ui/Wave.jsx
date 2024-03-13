import styled, { css } from "styled-components";

const StyledWave = styled.div`
  position: absolute;
  z-index: -1;
  bottom: -30px;
  width: 100%;
  height: 200px;
  --c: #fff;
  ${(props) =>
    props.$color &&
    css`
      --c: ${props.$color};
    `}
  --w1: radial-gradient(100% 57% at top, #0000 100%, var(--c) 100.5%) no-repeat;
  --w2: radial-gradient(100% 57% at bottom, var(--c) 100%, #0000 100.5%)
    no-repeat;
  background: var(--w1), var(--w2), var(--w1), var(--w2);
  background-position-x: -200%, -100%, 0%, 100%;
  background-position-y: 100%;
  background-size: 50.5% 100%;
`;

StyledWave.defaultProps = {
  $color: null,
};

export default StyledWave;
