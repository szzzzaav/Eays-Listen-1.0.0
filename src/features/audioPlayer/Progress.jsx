import { StyledVolume, StyledWrapper } from "./Volumn";
import styled from "styled-components";
import { useState } from "react";
import VisualProgress from "./VisualProgress";
import { useAudioContext } from "../../context/useAudioPlayer";
import ControlProgress from "./ControlProgress";

import WIDTH from "./PlayerConfig";

const StyledWave = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 1;
  width: ${WIDTH}px;
  height: 3px;
  left: calc(50% - ${WIDTH / 2}px);
  top: calc(50% - 1.5px);
  backdrop-filter: blur(1px);

  & > div {
    display: block;
    position: absolute;
    bottom: 0.8px;
    z-index: -1;
    width: 3px;
    border-radius: 2px;
    background-color: #cdcdcd;
    border: none;
    transform: scale(1.01);
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: 20px;
`;

const ControlTime = styled.div`
  position: absolute;
  z-index: 2;
  width: 30px;
  color: #f9f9f9;
  font-size: 12px;
  left: calc(50% - 15px);
  text-align: center;
  top: 15px;
  transition: all 0.3s ease-in-out;
`;

function Progress() {
  const [useControl, setUseControl] = useState(false);
  const [progress, setProgress] = useState(0);
  const { progressRef, currentMusic } = useAudioContext();
  const musicLen = currentMusic?.musicObject?.getduration();
  const time = currentMusic?.musicObject?.songtimeFormat(
    Number(progress / 100) * musicLen
  );
  return (
    <StyledVolume
      onMouseEnter={() => {
        setUseControl(true);
        setProgress(progressRef.current?.value ?? 0);
      }}
      onMouseLeave={() => setUseControl(false)}
    >
      <StyledWrapper>
        <StyledContainer>
          <VisualProgress useControl={useControl} />
          <ControlProgress
            useControl={useControl}
            progress={progress}
            setProgress={setProgress}
            musicLen={musicLen}
          />
        </StyledContainer>
      </StyledWrapper>
      <ControlTime style={{ opacity: useControl ? 1 : 0 }}>
        {time || "00:00"}
      </ControlTime>
    </StyledVolume>
  );
}

export default Progress;

export { StyledWave, StyledContainer };
