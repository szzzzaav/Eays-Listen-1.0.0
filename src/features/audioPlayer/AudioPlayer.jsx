import styled from "styled-components";
import Bg from "./Bg";
import Cover from "./Cover";
import Detail from "./Detail";
import Volumn from "./Volumn";
import Control from "./Control";
import Progress from "./Progress";
import Time from "./Time";
import { useAudioContext } from "../../context/useAudioPlayer";
import Lyric from "./Lyric";

const StageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 1000px) {
    flex-direction: row;
    flex-shrink: 0;
  }
`;

const StyledStage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-shrink: 0;
`;

const StyledLeftStage = styled(StyledStage)`
  width: 45%;
  height: 100vh;
  justify-content: center;
  flex-shrink: 0;
`;

const StyledRightStage = styled(StyledStage)`
  background-color: transparent;
  width: 55%;
  height: 90%;
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  width: 250px;
  height: auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px 0;
  @media (min-width: 440px) {
    width: 400px;
  }
`;

function AudioPlayer() {
  const { openLyric } = useAudioContext();
  return (
    <StageContainer>
      <Bg />
      <StyledLeftStage>
        <Cover />
        <StyledContainer>
          <Detail />
        </StyledContainer>

        <StyledContainer>
          <Volumn />
        </StyledContainer>

        <StyledContainer>
          <Control />
        </StyledContainer>

        <StyledContainer>
          <Progress />
        </StyledContainer>

        <Time />
      </StyledLeftStage>

      <StyledRightStage style={{ display: openLyric ? "block" : "none" }}>
        <Lyric />
      </StyledRightStage>
    </StageContainer>
  );
}

export default AudioPlayer;
