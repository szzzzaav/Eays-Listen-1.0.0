import styled from "styled-components";
import { useAudioContext } from "../../context/useAudioPlayer";

import WIDTH from "./PlayerConfig";

const StyledTime = styled.div`
  position: relative;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${WIDTH}px;
  color: #cdcdcd;
  font-size: 11px;
`;

function Time() {
  const { currentMusic, timeProgressRef } = useAudioContext();
  return (
    <StyledTime>
      <span ref={timeProgressRef}>00:00</span>
      <span>{currentMusic?.musicObject?.getFormatDuration() || "00:00"}</span>
    </StyledTime>
  );
}

export default Time;
