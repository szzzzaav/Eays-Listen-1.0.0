import styled from "styled-components";
import { useAudioContext } from "../../context/useAudioPlayer";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLyricContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  @media (min-width: 1000px) {
    width: 54vw;
    height: 88vh;
  }
  overflow-y: hidden;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation: stage_appear 0.3s ease-in-out 1 forwards;

  & div {
    display: block;
    position: relative;
    z-index: -8;
    min-width: 100%;
    min-height: 5vh;
    font-size: 1rem;
    line-height: 60px;
    height: auto;
    @media (min-width: 1000px) {
      min-width: 600px;
      min-height: 90px;
      font-size: 2rem;
      line-height: 30px;
    }
    color: rgb(212, 212, 212);
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    word-wrap: break-word;
  }

  & .active {
    word-wrap: break-word;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 2.8rem;
    }
    z-index: 10;
    color: #ffffff;
    transform: translateX(10px);
    line-height: 3.4rem;
  }

  & svg {
    position: absolute;
    width: 40px;
    height: 40px;
    color: #fff;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
  }
`;

function Lyric() {
  const { currentLyric, firstLoading, lyricStageRef } = useAudioContext();
  return (
    <StyledLyricContainer ref={lyricStageRef}>
      {Array.from({ length: 4 }).map((_, idx) => {
        return <div key={"placehoder" + idx}></div>;
      })}
      {firstLoading && <SpinnerMini />}
      {!firstLoading &&
        currentLyric?.lrcContent?.map((e, idx) => {
          return <div key={"lyric" + idx}>{e}</div>;
        })}
    </StyledLyricContainer>
  );
}

export default Lyric;
