import styled from "styled-components";
import { Next, Pre } from "./Toggle";

import { CiTextAlignCenter } from "react-icons/ci";
import { FaPause, FaPlay } from "react-icons/fa";
import Color from "./Color";
import SpinnerMini from "../../ui/SpinnerMini";
import { useAudioContext } from "../../context/useAudioPlayer";

const StyledControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  & svg {
    @media (max-width: 1000px) {
      z-index: 99;
      position: relative;
    }
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 1.2rem;
    color: #ffffff;
    cursor: pointer;
  }
`;

function Control() {
  const {
    play,
    firstLoading: isPending,
    dispatch,
    currentMusic,
    progressRef,
    progressBgRef,
    timeProgressRef,
    visualStageRef,
  } = useAudioContext();
  return (
    <StyledControlBar>
      <CiTextAlignCenter onClick={() => dispatch({ type: "changeLyric" })} />
      <Pre />
      {isPending && <SpinnerMini />}
      {!isPending && !play && (
        <FaPlay
          onClick={() => {
            if (!currentMusic) return;
            if (!currentMusic?.musicObject?.progressRef) {
              currentMusic?.musicObject?.init?.({
                progressRef,
                progressBgRef,
                timeProgressRef,
                visualStageRef,
              });
            }
            if (play === null) {
              currentMusic?.musicObject?.jump(0, 0);
            } else {
              currentMusic?.musicObject?.continueplay();
            }
            dispatch({ type: "play" });
          }}
        />
      )}
      {!isPending && play && (
        <FaPause
          onClick={() => {
            if (!currentMusic) return;
            dispatch({ type: "pause" });
            currentMusic?.musicObject?.pause();
          }}
        />
      )}
      <Next />
      <Color />
    </StyledControlBar>
  );
}

export default Control;
