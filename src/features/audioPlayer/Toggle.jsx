import styled, { css } from "styled-components";
import { FaPlay } from "react-icons/fa";
import { useAudioContext } from "../../context/useAudioPlayer";
const Wrapper = styled.div`
  position: relative;
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`;

const Triangle = styled.div`
  & svg {
    position: absolute !important;
    text-align: center;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 1.2rem;
    color: #ffffff;
    top: calc(50% - 10px);
    left: calc(50% - 10px);

    ${(props) =>
      props.$first &&
      css`
        transform: translateX(-10px);
      `}
    ${(props) =>
      props.$pre &&
      css`
        transform: rotate(180deg);
      `}
    ${(props) =>
      props.$pre &&
      props.$first &&
      css`
        transform: rotate(180deg) translateX(-10px);
      `}
  }
`;

function Next() {
  const { musicObjects, currentMusic, dispatch } = useAudioContext();
  const handleNext = function () {
    if (!currentMusic) return;
    let idx = 0;
    musicObjects.forEach((e, i) => {
      if (e.music?.id === currentMusic?.music?.id) {
        idx = i;
      }
    });
    idx++;
    if (idx === musicObjects.length) {
      idx = 0;
    }
    dispatch({ type: "setMusic", payload: { ...musicObjects[idx] } });
  };
  return (
    <div>
      <Wrapper onClick={handleNext}>
        <Triangle $first={1}>
          <FaPlay />
        </Triangle>
        <Triangle>
          <FaPlay />
        </Triangle>
      </Wrapper>
    </div>
  );
}

function Pre() {
  const { musicObjects, currentMusic, dispatch } = useAudioContext();
  const handlePrev = function () {
    if (!currentMusic) return;
    let idx = 0;
    musicObjects.forEach((e, i) => {
      if (e.music?.id === currentMusic?.music?.id) {
        idx = i;
      }
    });
    idx--;
    if (idx === -1) {
      idx = musicObjects.length - 1;
    }
    dispatch({ type: "setMusic", payload: { ...musicObjects[idx] } });
  };
  return (
    <div>
      <Wrapper onClick={handlePrev}>
        <Triangle $first={1} $pre={1}>
          <FaPlay />
        </Triangle>
        <Triangle $pre={1}>
          <FaPlay />
        </Triangle>
      </Wrapper>
    </div>
  );
}

export { Pre, Next };
