import styled from "styled-components";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { useState } from "react";
import { useAudioContext } from "../../context/useAudioPlayer";

import WIDTH from "./PlayerConfig";

const volumnRangeWidth = WIDTH * 0.9375;

const StyledRange = styled.input`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  outline: 0;
  background-color: transparent;

  &::-webkit-slider-runnable-track {
    background-color: transparent;
  }

  &::-webkit-slider-container {
    background-color: transparent;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    z-index: 2;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 1px solid #e3e3e3;
    cursor: pointer;
  }
`;

const StyledVolume = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: ${WIDTH}px;
  height: 20px;

  & svg {
    width: 20px;
    height: 20px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledContainer = styled.div`
  position: relative;
  width: ${volumnRangeWidth}px;
  height: 20px;
`;

const StyledBgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const StyledTrack = styled.div`
  position: relative;
  z-index: 2;
  height: 5px;
  background-color: #fff;
  border-radius: 2px;
`;

const StyledFake = styled.div`
  position: absolute;
  height: 5px;
  width: 100%;
  top: calc(50% - 2.5px);
  right: 0;
  background-color: #c9c9c9;
  border-radius: 2px;
`;

function Volumn() {
  const [mute, setMute] = useState(false);
  const [volumn, setVolumn] = useState(70);
  const { volumnRef, currentMusic } = useAudioContext();
  let width = (volumn / 100) * volumnRangeWidth;
  return (
    <StyledVolume>
      {!mute && (
        <HiMiniSpeakerWave
          onClick={() => {
            setMute(true);
            currentMusic?.musicObject.volumn(0);
          }}
        />
      )}
      {mute && (
        <HiMiniSpeakerXMark
          onClick={() => {
            setMute(false);
            currentMusic?.musicObject.volumn(Number(volumn) / 100);
          }}
        />
      )}
      <StyledWrapper>
        <StyledContainer>
          <StyledBgWrapper>
            <StyledFake />
            <StyledTrack style={{ width: `${width}px` }} />
          </StyledBgWrapper>
          <StyledRange
            ref={volumnRef}
            type="range"
            max={100}
            min={0}
            value={mute ? 0 : volumn}
            onChange={(e) => {
              if (mute) {
                setMute(false);
              }
              setVolumn(e.target.value);
              if (Number(e.target.value) === 0) {
                setMute(true);
              }
              currentMusic?.musicObject.volumn(Number(e.target.value) / 100);
            }}
          />
        </StyledContainer>
      </StyledWrapper>
    </StyledVolume>
  );
}

export default Volumn;

export {
  StyledVolume,
  StyledWrapper,
  StyledContainer,
  StyledBgWrapper,
  StyledFake,
  StyledRange,
  StyledTrack,
};
